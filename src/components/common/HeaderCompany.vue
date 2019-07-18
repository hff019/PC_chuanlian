<template>
    <div>
        <HeaderTop/>
        <div style="background: #fff;">
            <div class="header-middle">
                <div>
                    <router-link to="/home"><img src="../../images/logo.png"></router-link>
                </div>
                <div class="header-middle-form">
                    <form>
                        <input type="search" placeholder="请输入要搜索的关键字">
                        <button type="submit">搜索</button>
                    </form>
                </div>
                <div>
                    <router-link to="/my-shop">
                        <span class="shopcar">我的购物车<small>1</small></span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="company-box">
            <div class="width-container">
                <div class="company-info">
                    <img src="../../images/index/logo.png" width="90" height="90">
                    <div class="right">
                        <h1 class="title">哈尔滨药业<span>收藏</span></h1>
                        <div class="company-info-box">
                            <ul>
                                <li>中国·黑龙江</li>
                                <li>调配时间35天</li>
                                <li>已售760件</li>
                            </ul>
                            <div>
                                <el-popover
                                        placement="bottom-start"
                                        width="400"
                                        trigger="hover"
                                >
                                    <div>
                                        <ul class="coupon-list">
                                            <li>
                                                <div class="coupon-title">减</div>
                                                <div class="coupon-detail">
                                                    <p>满1000减100</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="coupon-title">减</div>
                                                <div class="coupon-detail">
                                                    <p>满1000减100</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <el-button slot="reference" style="border: 0px;background: none;color: #fff;padding-top: 5px">
                                        优惠活动
                                    </el-button>
                                </el-popover>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import HeaderTop from "./HeaderTop"

    export default {
        name: "HeaderCompany",
        components: {
            HeaderTop
        },

    }
</script>

<style lang="scss" scoped>
    .company-box {
        background: url("../../images/index/small_top.png") no-repeat center;
        width: 100%;
        height: 150px;
        .company-info {
            padding-top: 25px;
            display: flex;
            color: #fff;
            .right {
                padding-left: 15px;
                .title {
                    padding-top: 6px;
                    font-size: 24px;
                    span {
                        font-size: 12px;
                        background: #ff3b30;
                        padding: 4px 8px;
                        border-radius: 3px;
                        margin-left: 8px;
                        font-weight: 100;
                    }
                }
                .company-info-box {
                    margin-top: 20px;
                    display: flex;
                    ul {
                        li {
                            display: inline-block;
                            border: 1px solid #fff;
                            border-radius: 3px;
                            padding: 4px 8px;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
    .coupon-list {
        li {
            display: flex;
            padding: 8px 0;
            .coupon-title {
                width: 20px;
                height: 20px;
                background: #ff3b30;
                color: #fff;
                text-align: center;
                line-height: 20px;
            }

            .coupon-detail {
                padding-left: 10px;
                p {
                    &:nth-child(1) {
                        font-size: 12px;
                        color: #666;
                    }
                }
            }
        }

    }
</style>