<template>
    <div class="width-container">
        <div v-if="!is_pay">
            <div class="info">
                <svg>
                    <use xlink:href="#icon-shoppingCar-buySuccess"></use>
                </svg>
                <span>订单提交成功，还差一步就获得产品啦，快去支付吧</span>
            </div>
            <el-tabs v-model="activeName" type="card" id="tab-card">
                <el-tab-pane name="first">
                <span slot="label" class="tab-sp1" name="first">
                    <svg class="icons">
                        <use xlink:href="#icon-pay-scanningCode"></use>
                    </svg>
                    <b>二维码支付</b>
                </span>
                    <div class="wx-box">
                        <div class="left">
                            <div>
                                <svg>
                                    <use xlink:href="#icon-pay-scanningCode"></use>
                                </svg>
                                <p>请用创联工厂“扫一扫”<br>扫描二维码支付</p>
                            </div>
                            <p>￥525.00</p>
                        </div>
                        <div class="right">
                            <img src="" v-if="countdown">
                            <p class="right-info" v-if="countdown">距离二维码失效还剩<span>{{countdown}}</span>秒，失效后请刷新重试</p>
                            <div class="over-pay" v-if="!countdown">
                                <p>二维码已经失效</p>
                                <button @click="initData">刷新</button>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="sec">
                <span slot="label" class="tab-sp1">
                    <svg class="icons">
                        <use xlink:href="#icon-pay-scanningCode"></use>
                    </svg>
                    <b>密码支付</b>
                </span>
                    <div class="wx-box password-box">
                        <div class="left">
                            <div>
                                <svg>
                                    <use xlink:href="#icon-pay-cashWarning"></use>
                                </svg>
                                <p>请确认周围环境的安全<br>安全后再支付</p>
                            </div>
                            <p>￥525.00</p>
                        </div>
                        <div class="right">
                            <div class="codeNum">
                                <span><small v-if="payPassword[0]"></small></span>
                                <span><small v-if="payPassword[1]"></small></span>
                                <span><small v-if="payPassword[2]"></small></span>
                                <span><small v-if="payPassword[3]"></small></span>
                                <span><small v-if="payPassword[4]"></small></span>
                                <span><small v-if="payPassword[5]"></small></span>
                                <input type="number" maxlength="6" v-model="payPassword" @input="handlePayPassword">
                            </div>
                            <p class="right-info" v-if="!is_error">请输入六位支付密码</p>
                            <p class="red-info" v-else>
                                <svg class="icon">
                                    <use xlink:href="#icon-pay-passwordError"></use>
                                </svg>
                                <span> 输入密码错误还可以再试2次</span>
                            </p>
                            <button>确认支付</button>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <!--支付成功-->
        <div class="pay-success" v-else>
            <div class="left">
                <svg>
                    <use xlink:href="#icon-shoppingCar-buySuccess"></use>
                </svg>
            </div>
            <div class="right">
                <p>购买成功</p>
                <p>快去看看其他产品</p>
                <div>
                    <router-link to="">去首页</router-link>
                    <router-link to="">查看订单</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "payOrder",
        data() {
            return {
                activeName: 'first',
                payPassword: [],
                is_error:false,
                is_pay:false,
                countdown:0,
            };
        },
        methods: {
            handlePayPassword() {
                console.log(this.payPassword)
            },
            countDown() {
                const t = setInterval(() => {
                    if(--this.countdown <= 0) {
                        this.countdown = 0;
                        clearInterval(t);
                    }
                }, 1000);
            },
            initData(){
                this.countdown = 60;
                this.countDown();
            },
        },
        created() {
            this.initData()
        }
    }
</script>

<style lang="scss" scoped>
    .info {
        display: flex;
        text-align: center;
        padding: 100px 0;
        font-size: 20px;
        color: #333;
        justify-content: center;
        height: 35px;
        line-height: 35px;

        svg {
            width: 32px;
            height: 32px;
            margin-right: 10px;
        }
    }

    .tab-sp1 {
        height: 52px;
        line-height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;

        .icons {
            width: 32px;
            height: 32px;
        }

        b {
            padding-left: 8px;
            font-size: 20px;
        }
    }

    .wx-box {
        padding-top: 30px;
        display: flex;
        align-items: center;
        padding-left: 60px;

        .left {
            > div {
                margin-right: 150px;
                width: 260px;
                height: 88px;
                border-radius: 4px;
                border: 1px solid #2da2ff;
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                    width: 49px;
                    height: 49px;
                }

                p {
                    font-size: 16px;
                    color: #2da2ff;
                    margin-left: 10px;
                }
            }

            p {
                font-size: 48px;
                color: #ff3b30;
                margin-top: 10px;
            }
        }

        .right {
            width: 245px;
            height: 270px;
            position: relative;

            img {
                width: 245px;
                height: 245px;
            }

            .right-info {
                font-size: 14px;
                line-height: 2;
                color: #333;

                span {
                    color: #ff3b30;
                }
            }

            .over-pay {
                position: absolute;
                width: 245px;
                height: 245px;
                background: #333;
                top: 0px;
                opacity: .9;
                text-align: center;

                p {
                    color: #fff;
                    font-size: 21px;
                    padding-top: 60px;
                }

                button {
                    background: #ff3b30;
                    color: #fff;
                    width: 120px;
                    height: 46px;
                    border: 0px;
                    margin-top: 30px;
                    font-size: 20px;
                    cursor: pointer;
                }
            }
        }
    }


    .password-box {
        .right {
            width: 290px;
            height: 160px;

            .right-info {
                color: #666;
                margin-top: 15px;
            }
            .red-info {
                color: #ff3b30;
            }
            button {
                width: 150px;
                height: 50px;
                border-radius: 2px;
                background: #ff3b30;
                color: #fff;
                font-size: 14px;
                border: 0px;
                margin-top: 20px;
                cursor: pointer;
            }
        }
    }

    .codeNum {
        height: 50px;
        width: 280px;
        margin: 0 auto;
        position: relative;
        text-align: left;
        border: 1px solid #ccc;

        > span {
            border-right: 1px solid #ccc;
            display: inline-block;
            width: 16%;
            height: 50px;
            text-align: center;
            vertical-align: middle;

            small {
                width: 10px;
                height: 10px;
                background: #333;
                border-radius: 100%;
                display: inline-block;
                margin-top: 20px;
            }

            &:first-child {
                margin-left: 0;
            }

            &:nth-child(6) {
                border: 0px
            }
        }

        > input {
            position: absolute;
            width: 278px;
            letter-spacing: 50px;
            color: #fff;
            opacity: 0;
            left: 0;
            height: 50px;
            font-size: 20px;
            z-index: 99;
        }
    }
    .pay-success {
        padding: 80px 0;
        display: flex;
        justify-content: center;
        .left {
            svg {
                width: 115px;
                height: 115px;
            }
        }
        .right {
            width: 240px;
            margin-left: 40px;
            p {
                font-size: 18px;
                line-height: 2;
                &:nth-child(2) {
                    font-size: 14px;
                }
            }
            >div {
                margin-top: 15px;
                a {
                    display: inline-block;
                    text-align: center;
                    height: 32px;
                    width: 100px;
                    line-height: 32px;
                    border: 1px solid #e6e6e6;
                    margin-right: 10px;
                    color: #333;
                    &:hover {
                        background: #2da2ff;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>
<style>
    #tab-card .el-tabs__item {
        min-height: 52px !important;
    }
</style>