<template>
    <div class="RemeberP">
        <p class="title">修改支付密码</p>
        <form>
            <div class="inp-box">
                <label>旧 密 码</label>
                <input type="password" placeholder="请输入旧密码" v-model="code"  @input="handleOldPassword">
            </div>
            <div class="inp-box">
                <label>新 密 码</label>
                <input type="password" placeholder="请输入新密码" v-model="AgainCode" >
            </div>
            <div class="inp-box">
                <label>确认密码</label>
                <input type="password" placeholder="请输入确认密码" v-model="ResetCode">
            </div>
            <el-button type="primary" @click="handlePayPasswordOk" :disabled="!loading">确认修改</el-button>
        </form>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        name: "RemeberP",
        data() {
            return {
                code:[],
                is_remeber:false,
                is_again:false,
                loading:false,
                AgainCode:[],
                ResetCode:[]
            };
        },
        computed:{
            ...mapState({
                USER_INFO: state => state.CURRENTUSER
            }),
            phone(){
                return this.USER_INFO.phone;
            }
        },
        methods: {
            handleOldPassword(){
                if(this.code.length === 6){
                    this.loading = true;
                    this.$http.get('safe/check-zhi',{
                        params:{password:this.code},
                        validate: state => state === 200
                    }).then(response =>{
                        this.loading = false;
                        if(response.data.verifyStatus){
                            this.$message('输入密码正确');
                        }else{
                            this.$message('输入密码不正确，请重新输入');
                            this.code = []
                            return
                        }
                    }).catch(error => {
                        this.loading = false;
                    })
                }
            },
            handlePayPasswordOk(){
                if(this.AgainCode.length === 6) {
                    if (this.ResetCode === this.AgainCode) {
                        this.loading = true;
                        this.$http.post('safe/set-zhi',{
                                newPassword:this.AgainCode,
                                oldPassword:this.code,
                                type:'password'
                            },
                            {validate: state => state === 200
                            }).then(response =>{
                            this.loading = false;
                            this.$message('修改成功');
                            this.goBack();
                        }).catch(error => {
                            this.loading = false;
                        })
                    }else {
                        this.$messagebox.confirm("确认密码和再次输入密码不一致,确认返回重新输入新密码吗?").then(action => {
                            if(action === 'confirm'){
                                this.ResetCode = ""
                                this.AgainCode = ""
                            }
                        }).catch(err => {
                            this.AgainCode = ""
                        });
                    }
                }
            },

        }
    }
</script>

<style lang="scss" scoped>
    .RemeberP {
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
        }
    }
    input:focus { outline: none; }
</style>