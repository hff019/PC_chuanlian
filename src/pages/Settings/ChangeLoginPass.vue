<template>
    <div class="ChangeLoginPass">
        <p class="title">修改登陆密码</p>
        <div class="choice-title">
            <span @click="cur=0" :class="{active:cur==0}">记得密码</span>
            <span @click="cur=1" :class="{active:cur==1}">忘记密码</span>
        </div>
        <form v-loading="loading" v-if="cur==0">
            <div class="inp-box">
                <label>旧 密 码</label>
                <input type="password" placeholder="请输入旧密码" v-model="oldPassword">
            </div>
            <div class="inp-box">
                <label>新 密 码</label>
                <input type="password" placeholder="请输入新密码" v-model="newPassword">
            </div>
            <div class="inp-box">
                <label>确认密码</label>
                <input type="password" placeholder="请输入确认密码" v-model="rePassword">
            </div>
            <el-button type="primary" @click="handleOk" :disabled="loading||disabled">确认修改</el-button>
        </form>
        <form autocomplete="off" v-loading="loading" v-if="cur==1">
            <div class="inp-box">
                <label>手 机 号</label>
                <input type="tel" placeholder="请输入手机号" autocomplete="off" :value="phone">
            </div>
            <div class="inp-box">
                <label>验 证 码</label>
                <input type="text" placeholder="请输入验证码">
                <span @click="getCode">发送验证码</span>
            </div>
            <div class="inp-box">
                <label>新 密 码</label>
                <input type="password" v-model="newPassword" placeholder="请输入新密码" autocomplete="off">
            </div>
            <div class="inp-box">
                <label>确认密码</label>
                <input type="password" v-model="rePassword" placeholder="请输入确认密码" autocomplete="off">
            </div>
            <el-button type="primary" @click="handlePasswordOk" :disabled="loading||disabledRes">确认修改</el-button>
        </form>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "ChangeLoginPass",
        data() {
            return {
                oldPassword: "",
                newPassword: "",
                rePassword: "",
                loading: false,
                error: "",
                is_know: true,
                code: null,
                countdown: 0,
                is_code: true,
                psInfo: "",
                cur:0
            };
        },
        computed: {
            ...mapState({
                USER_INFO: state => state.CURRENTUSER
            }),

            phone() {
                return this.USER_INFO.phone;
            },
            codeText() {
                return this.countdown > 0 ? `${this.countdown}s后重发` : "获取验证码";
            },
            disabled() {
                return (
                    this.oldPassword.length < 6 || this.newPassword.length < 6 || this.rePassword != this.newPassword
                )
            },
            disabledRes() {
                return (
                    this.rePassword.length < 6 || this.newPassword.length < 6 || this.rePassword != this.newPassword
                )
            },
            knowTitle() {
                return this.is_know ? '使用验证码修改' : "使用旧密码修改"
            }
        },
        methods: {
            handleOldPassword() {
                if (this.oldPassword.length >= 6) {
                    this.$http.get('safe/check-password', {
                        params: {password: this.oldPassword},
                        validate: state => state === 200
                    }).then(response => {
                        this.loading = false;
                        if (!response.data.verifyStatus) {
                            this.$message("* 输入密码不正确，请重新输入")
                            this.oldPassword = ""
                        } else {

                        }
                    }).catch(error => {
                        this.loading = false;
                    })
                } else {
                    this.$message("请输入正确的密码")
                    this.newPassword = ""
                }

            },
            handleRePassword() {
                if (this.oldPassword == "") {
                    this.$message("请输入旧密码")
                    return;
                }
                if (this.newPassword.length < 6) {
                    this.$message("请输入新密码")
                    return;
                }

            },
            handleOk() {
                if (this.loading) return;

                // 密码长度
                if (this.newPassword.length < 6 && this.rePassword < 6) {
                    this.$message("密码长度必须在6-16位之间")
                    return;
                }

                // 重复新密码
                if (this.rePassword !== this.newPassword) {
                    this.$toast("密码确认不一致，请重新输入")
                    return;
                }

                let param = {
                    newPassword: this.newPassword,
                    oldPassword: this.oldPassword,
                    type: 'password'
                };
                this.changePassword(param)
            },

            //手机验证
            getCode() {
                if (this.loading) return;
                let params = {
                    phone: this.phone,
                    type: 'phone'
                };
                this.loading = true;
                this.$http.post("verifycodes", params, {
                    validateStatus: status => status === 202
                }).then(response => {
                    this.loading = false;
                    this.countdown = 60;
                    this.countDown();
                    this.error = "";
                })
                .catch(error => {
                    this.loading = false;
                    let message = error.response.data.message ? error.response.data.message : '发送失败！';
                    this.$toast(message)
                })
            },
            countDown() {
                const t = setInterval(() => {
                    if (--this.countdown <= 0) {
                        this.countdown = 0;
                        clearInterval(t);
                    }
                }, 1000);
            },
            handleCode() {
                if (this.code.length === 6) {
                    let params = {
                        verifiable_code: this.code,
                    };
                    this.$http.get("/verifycodes/check", {params, validate: state => state === 200})
                    .then(response => {
                        if (response.data.status) {
                            this.is_code = false
                        } else {
                            this.$message('验证码不正确！')
                        }

                        this.loading = false;
                    })
                    .catch(error => {
                        this.loading = false;
                        this.$message('输入验证密码不正确');
                    });
                }
            },
            handlePasswordOk() {
                if (this.loading) return;

                // 密码长度
                if (this.newPassword.length < 6) {
                    this.$message("新密码长度必须在6-16位之间")
                    return;
                }

                // 重复新密码
                if (this.rePassword !== this.newPassword) {
                    this.$message("密码确认不一致，请重新输入")
                    return;
                }

                let param = {
                    newPassword: this.newPassword,
                    verifiable_code: this.code,
                    type: 'phone'
                };
                this.changePassword(param)
            },
            //修改密码公有函数
            changePassword(param) {
                this.loading = true;
                this.$http.post("safe/set-password", param,
                    {validate: state => state === 204})
                .then(() => {
                    this.loading = false;
                    this.$toast("密码修改成功，请使用新密码重新登陆");
                    this.$lstore.removeData("H5_CUR_USER");
                    this.$lstore.removeData("H5_ACCESS_TOKEN");
                    this.$store.dispatch("SIGN_OUT");
                    this.$router.push('/home')
                    this.oldPassword = ""
                    this.newPassword = ""
                    this.rePassword = ""
                })
                .catch(error => {
                    this.loading = false;
                    this.$message("修改失败")
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .choice-title {
        height: 50px;
        border-bottom: 2px solid #e6e6e6;
        line-height: 48px;
        font-size: 16px;
        text-align: center;

        span {
            padding: 0 20px;
            line-height: 50px;
            display: inline-block;
            cursor: pointer;
        }

        .active {
            border-bottom: 2px solid #26a2ff;
        }
    }

    .ChangeLoginPass {
        background: #fff;
        border-radius: 5px;
    }

    .el-button {
        display: block;
        margin: 20px auto;
        width: 405px;
        height: 50px;
    }

    .title {
        padding: 20px 0;
        font-size: 14px;
        border-bottom: 1px solid #e6e6e6;
    }

    .inp-box {
        width: 400px;
        height: 54px;
        margin: 20px auto;
        border: 1px solid #e6e6e6;
        display: flex;
        line-height: 54px;
        padding: 0 10px;
        font-size: 14px;
        position: relative;

        label {
            letter-spacing: 2px;
            width: 80px;
        }

        input {
            border: 0px;
            width: 300px;
            background: #fff;
        }

        span {
            width: 100px;
            height: 54px;
            border-left: 1px solid #e6e6e6;
            text-align: center;
            position: absolute;
            right: 0px;
            top: 0px;
            cursor: pointer;
        }
    }

    input:focus {
        outline: none;
        background: none
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
        -webkit-text-fill-color: #333;
    }
</style>