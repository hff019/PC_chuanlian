<template>
    <div>
        <div class="foot">
            <div class="width-container">
                <div class="foot-box1">
                    <ul class="left-list">
                        <li>
                            <svg class="icon">
                                <use xlink:href="#icon-foot-1"></use>
                            </svg>
                            <p>值得信赖医药电商</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#icon-foot-2"></use>
                            </svg>
                            <p>品类齐全，轻松选购</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#icon-foot-3"></use>
                            </svg>
                            <p>正品行货，精致服务</p>
                        </li>
                        <li>
                            <svg class="icon">
                                <use xlink:href="#icon-foot-4"></use>
                            </svg>
                            <p>权威荣誉，用户口碑</p>
                        </li>
                    </ul>
                    <div class="right">
                        <img src="../../images/ewm.jpg">
                        <p>微信扫一扫<br>下载客户端</p>
                    </div>
                </div>
                <div class="foot-nav">
                    <router-link to="">关于我们</router-link>
                    <router-link to="">About Us</router-link>
                    <router-link to="">Investor Relations</router-link>
                    <router-link to="">媒体报道</router-link>
                    <router-link to="">隐私条款</router-link>
                    <router-link to="">创联诚聘</router-link>
                    <router-link to="">联系我们</router-link>
                </div>
            </div>
        </div>
        <SmallFooter/>
    </div>
</template>

<script>
    import SmallFooter from "./FooterSmall"

    export default {
        name: "Footer",
        components: {
            SmallFooter
        }
    }
</script>

<style lang="scss" scoped>
    .foot {
        background: #fff;
        padding: 30px 0;
        border-top: 1px solid #e5e5e5;
        margin-top: 30px;
    }

    .foot-box1 {
        display: flex;
        margin-bottom: 20px;
        justify-content: space-between;

        .left-list {
            display: flex;
            justify-content: space-between;
            width: 68%;
            text-align: center;

            li {
                list-style: none;

                svg {
                    width: 55px;
                    height: 55px;
                }

                p {
                    font-weight: bold;
                    font-size: 16px;
                    margin-top: 15px;
                }
            }

        }

        .right {
            display: flex;
            align-items: center;
            font-size: 14px;
            justify-items: right;

            img {
                width: 90px;
                width: 90px;
                padding: 3px;
                border: 1px solid #e5e5e5;
                margin-right: 10px;
            }
        }
    }

    .foot-nav {
        background: #2da2ff;
        text-align: center;
        padding: 7px;

        a {
            color: #fff;
            font-size: 14px;
            display: inline-block;
            border-right: 1px solid #fff;
            line-height: 14px;
            padding: 0 6px;

            &:nth-last-child(1) {
                border: 0px;
            }
        }
    }
</style>