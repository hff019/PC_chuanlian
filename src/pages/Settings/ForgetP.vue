<template>
    <div class="ForgetP">
        <p class="title">修改支付密码</p>
        <form autocomplete="off">
            <div class="inp-box">
                <label>手 机 号</label>
                <input type="tel" :value="phone" placeholder="请输入手机号"  autocomplete="off" disabled>
            </div>
            <div class="inp-box">
                <label>验 证 码</label>
                <input type="text" placeholder="请输入验证码" v-model="code"  autocomplete="off">
                <span @click="sendSmsCode">发送验证码</span>
            </div>
            <div class="inp-box">
                <label>身份证号</label>
                <input type="password" v-model="id_num" placeholder="请输入身份证" autocomplete="off">
            </div>
            <div class="inp-box">
                <label>新 密 码</label>
                <input type="password" v-model="ResetCode" placeholder="请输入新密码" autocomplete="off" >
            </div>
            <div class="inp-box">
                <label>确认密码</label>
                <input type="password" v-model="AgainCode" placeholder="请输入确认密码" autocomplete="off">
            </div>
            <el-button type="primary" @click="fnPayOk" >确认修改</el-button>
        </form>
    </div>
</template>

<script>
    import { idl18nReg } from "@/util";
    import {mapState} from "vuex";
    export default {
        name: "ForgetP",
        data() {
            return {
                code: [],
                AgainCode:[],//确认密码
                ResetCode:[],//密码
                loading: true,
                countdown:0,
                is_forget_psw:true,
                is_idNum:false,
                id_num:'',//身份证
                is_remeber:false,
                is_again:false,
                send_again:false,
            };
        },
        computed:{
            ...mapState({
                USER_INFO: state => state.CURRENTUSER
            }),
            User_Id(){
                return this.USER_INFO.user_identity;
            },
            phone(){
                return this.USER_INFO.phone;
            }

        },
        methods:{
            countDown() {
                const t = setInterval(() => {
                    if(--this.countdown <= 0) {
                        this.countdown = 0;
                        clearInterval(t);
                    }
                }, 1000);
            },
            handleCode(){
                if(this.code.length === 6) {
                    let params = {
                        verifiable_code: this.code,
                    };
                    this.$http.get("/verifycodes/check", {params,validate: state => state === 200})
                    .then(response => {
                        if(response.data.status){
                            this.$message('验证码正确！')
                        }else{
                            this.$message('验证码不正确！')
                            return
                        }
                        this.loading = false;
                    })
                    .catch(error => {
                        this.loading = false;
                        this.$toast('输入验证不密码正确');
                        return
                    });
                }
            },
            fnPayOk(){
                if(this.id_num == ''){
                    this.$message('请输入身份证！');
                    return;
                }
                if(this.code.length != 6){
                    this.$message('请输入六位数验证码！');
                    return;
                }else {
                    let params = {
                        verifiable_code: this.code,
                    };
                    this.$http.get("/verifycodes/check", {params,validate: state => state === 200})
                    .then(response => {
                        if(response.data.status){
                            this.$message('验证码正确！')
                        }else{
                            this.$message('验证码不正确！')
                            return
                        }
                        this.loading = false;
                    })
                    .catch(error => {
                        this.loading = false;
                        this.$toast('输入验证不密码正确');
                        return
                    });
                }
                if(idl18nReg.test(this.id_num)) {
                    this.loading = true;
                    this.$http.get('user/check-identity',{
                        params:{
                            user_identity:this.id_num
                        },
                        validate: state => state === 200
                    }).then(response => {
                        this.loading = false;
                        if(response.data.status){
                        }else{
                            this.$message('身份证验证失败！');
                            this.is_idNum = ''
                            return
                        }
                    }).catch(error => {
                        this.loading = false;
                    })
                }

                if(this.AgainCode.length === 6) {
                    if (this.ResetCode === this.AgainCode) {
                        this.loading = true;
                        this.$http.post('safe/set-zhi',{
                                newPassword:this.AgainCode,
                                verifiable_code:this.code,
                                type:'phone'
                            },
                            {validate: state => state === 204
                            }).then(response =>{
                            this.loading = false;
                            this.$message('修改成功');

                        }).catch(error => {
                            this.$message('修改失败');
                            this.loading = false;
                        })
                    }else {
                        this.$message("确认密码和新密码要一致")
                    }
                }else {
                    this.$message("请输入确认密码")
                    return
                }
            },
            //发送验证码
            sendSmsCode(){
                if(this.loading) return;
                let params = {
                    phone:this.phone,
                    type:'phone'
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
                .catch(error =>{
                    this.loading = false;
                    let message = error.response.data.message ? error.response.data.message:'发送失败！';
                    this.$toast(message)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .ForgetP {
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
            top:0px;
            cursor: pointer;
        }
    }
    input:focus { outline: none;background: none }
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
        -webkit-text-fill-color: #333;
    }
</style>