<template>
    <div  v-bind:style="styleObject">
        <div class="top">
            <img src="../../images/login/sentence.png" />
        </div>
        <div class="login-bg" v-bind:style="bodyObject">
            <div class="width-container" style="position: relative;height: 100%">
                <div class="login" style="position: absolute;top:50%;margin-top: -205px">
                    <div class="login-top">
                        <div class="float-left">
                            <p class="login-title">密码登陆</p>
                        </div>
                        <div class="float-right">
                            <div class="scan-login active" @click="is_scan = !is_scan">
                                <span>扫码登陆更安全</span>
                                <img src="../../images/login/code_change.png" class="scan-login-img" v-if="!is_scan" />
                                <img src="../../images/login/pc_change.png" class="scan-login-img" v-if="is_scan" />
                            </div>
                        </div>
                        <div class="clearfloat"></div>
                    </div>
                    <div class="pw-form" v-if="!is_scan">
                        <div class="total-info">手机号或密码错误</div>
                        <form method="" id="">
                            <div>
                                <input type="text" placeholder="请输入手机号" id="telNumber" name=""/>
                                <img src="images/icon/no2.png" class="pw-icon1 hidden">
                                <p class="prompt" id="tel-info">请输入电话号码</p>
                            </div>
                            <div>
                                <input type="password" placeholder="请输入登陆密码" id="pwNumber" name=""/>
                                <p class="prompt" id="pw-info">请输入登陆密码</p>
                            </div>
                            <div class="yz-code">
                                <input type="text" placeholder="请输入验证码" id="codeNumber" name="" />
                                <img src="../../images/login/yzm.jpg" width="90" height="30">
                            </div>
                            <div class="remeber-pw">
                                <el-checkbox v-model="checked">记住我</el-checkbox>
                            </div>
                            <input type="submit" value="登陆" class="pw-submit" />
                        </form>
                        <div class="regiter">
                            <a href="#" title="忘记密码">忘记密码</a>
                            <a href="#" class="float-right" title="立即注册">立即注册</a>
                            <div class="clearfloat"></div>
                        </div>
                        <p class="pw-info">输入账号时，请注意周围环境</p>
                    </div>
                    <div class="scan-login-child" v-else>
                        <div class="ewm">
                            <img src="../../images/ewm.jpg" width="130" height="130">
                            <div class="scan-fade">
                                <p>二维码已失效</p>
                                <div>刷新</div>
                            </div>
                        </div>
                        <p>打开<span>手机创联工厂 </span> 扫一扫登陆</p>
                        <a href="" title="立即注册">立即注册</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>

    </div>
</template>

<script>
    import Footer from "@/components/common/FooterSmall"
    export default {
        name: "Signin",
        components:{
            Footer
        },
        data(){
            return {
                checked: false,
                is_scan:false,
                styleObject: {
                    minHeight: document.documentElement.clientHeight+'px',
                    background: '#fff'
                },
                bodyObject:{
                    maxHeight:(document.documentElement.clientHeight-150)+'px'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-bg {
        height: 820px;
        width: 100%;
        background: url("../../images/login/bg.jpg") #15499a no-repeat center bottom;
        background-size:auto 100% ;
        position: relative;
    }
    .login {
        width: 340px;
        height: 412px;
        background: #fff;
        margin-top: 10%;
        padding: 10px;
        position: absolute;
        right: 0px;
    }
    .login-top {
        .float-left {
            font-size: 20px;
            font-weight: bold;
            padding-top: 30px;
            line-height: 100%;
            padding-left: 10px;
        }
    }
    .scan-login {
        position: relative;
        width: 150px;
        height: 50px;
        cursor: pointer;
        span {
            display: inline-block;
            background: url("../../images/login/bg_border.png") no-repeat center;
            width: 125px;
            height: 30px;
            color: rgb(223,156,31);
            font-size: 12px;
            text-align: center;
            line-height: 30px;
        }
        .scan-login-img {
            position: absolute;
            right: 0px;
            top: 0px;
        }
    }
    .pw-form {
        margin-top: 10px;
        padding: 10px;
        input {
            display: block;
            height: 35px;
            margin-bottom: 20px;
            padding: 0 16px;
            width: 285px;
            border: 1px solid #e6e6e6;
        }
        div {
            position: relative;
            .pw-icon1 {
                position: absolute;
                right: 10px;
                top:13px;
                cursor: pointer;
            }
            .prompt {
                position: absolute;
                right: 10px;
                color: #ff3b30;
                font-size: 12px;
                z-index: 99;
                top:0px;
                line-height: 37px;
                display: none;
            }
        }
        .pw-submit {
            width: 100%;
            height: 52px;
            color: #fff;
            background: #ff3b30;
            font-size: 20px;
            border-radius: 2px;
            margin-top: 20px;
            border:0px
        }
        .regiter {
            margin-top: 20px;
            font-size: 12px;
            padding: 0 5px 15px;
            a {
                color: #666;
                line-height: 150%;
            }
        }
        .pw-info {
            color: #ff3b30;
            font-size: 14px;
            margin-top: 5px;
            text-align: center;
        }
        .total-info {
            position: absolute;
            width: 278px;
            height: 22px;
            line-height: 24px;
            background: rgb(255,235,235);
            border: 1px solid #ff3b30;
            color: #ff3b30;
            font-size: 12px;
            padding: 0 10px;
            margin-top: -15px;
            background: url("../../images/login/no.png") rgb(255,235,235) no-repeat left;
            padding-left:28px;
            background-position:10px;
            display: none;

        }
        form {
            margin-top: 10px;
        }
        .remeber-pw {
            padding: 13px 0px 0px;
            input {
                width: 13px;
                height: 13px;
                float: left;
            }
        }
    }
    .yz-code {
        position: relative;
        width: 100%;
        height: 35px;
        img {
            position: absolute;
            right: 5px;
            top: 4px;
        }
    }

    .scan-login-child {
        .ewm {
            width: 130px;
            height: 130px;
            border:1px solid #f1f1f1;
            padding: 17px;
            margin: 0 auto;
            margin-top: 45px;
            position: relative;
            .scan-fade {
                position: absolute;
                width: 100%;
                height: 100%;
                background: #333;
                top:0px;
                left: 0px;
                color: #fff;
                font-size: 14px;
                margin-bottom: 24px;
                opacity: .8;
                display: none;
                p {
                    color: #fff;
                    margin-bottom: 20px;
                }
                div {
                    width: 80px;
                    height: 30px;
                    background: #ff3b30;
                    color: #fff;
                    text-align: center;
                    line-height: 30px;
                    margin: 0 auto;
                }
            }
        }
        p {
            font-size: 14px;
            color: #999999;
            margin-top: 55px;
            line-height: 100%;
            text-align: center;
            span {
                color: #ff3b30;
            }
        }
        a {
            display: block;
            height: 50px;
            line-height: 50px;
            background: url("../../images/login/go.png") no-repeat right;
            background-position-x: 330px;
            text-align: right;
            font-size: 16px;
            padding-right: 35px;
            border-top: 1px solid #f1f1f1;
            margin:40px -10px 0 -10px;
            color: #ff3b30;
        }
    }

</style>