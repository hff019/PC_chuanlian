<template>
    <router-link to="" class="customized-cart-list">
        <img src="../../images/index/img3.jpg" alt="维生素" class="img">
        <h3 class="title">维生素</h3>
        <p class="info">10mg*100片/瓶 100瓶一件</p>
        <p class="info">华北制药有限公司</p>
        <p class="price">制定价10元/瓶<span>零售价 5元/瓶</span></p>
        <div class="animation-box">
            <!--进度条-->
            <div class="order">
                <div class="process">
                    <span class="pro-img" style="width: 70%"></span>
                    <div class="pro-text">
                        <span>100件</span>
                        <span>200件</span>
                        <span>300件</span>
                    </div>
                    <div class="pro-price">
                        <span>2.00</span>
                        <span>2.00</span>
                        <span>2.00</span>
                    </div>
                </div>
                <div class="info-detail">
                    <span>100件起订</span>
                    <span>已订200件</span>
                </div>
            </div>
        </div>
        <div class="time">12天12时12分23秒</div>
    </router-link>
</template>

<script>
    export default {
        name: "CustomizedCart"
    }
</script>

<style lang="scss" scoped>
    .customized-cart-list {
        width: 226px;
        height: 308px;
        background: #fff;
        display: inline-block;
        color: #333333;
        text-align: center;
        position: relative;
        overflow: hidden;
        margin-bottom: 15px;
        .img {
            width: 136px;
            height: 136px;
            display: block;
            margin: 32px auto;
        }
        .title {
            // @include overEill;
            font-size: 14px;
            color: #333;
            margin-bottom: 7px;
        }
        .info {
            color: #b0b0b0;
            font-size: 12px;
            margin-top: 3px;
        }
        .price {
            // color: $blue-color;
            font-size: 13px;
            margin-top: 15px;
            color: #2da2ff;
            span {
                color: #999999;
                padding-left: 5px;
            }
        }
        .animation-box {
            position: absolute;
            width: 100%;
            background: #2da2ff;
            color: #fff;
            left: 0px;
            bottom: -76px;
            height: 76px;
            transition: .2s;
        }
    }
    .customized-cart-list:hover .animation-box {
        bottom: 0px;
    }
    .customized-cart-list:hover {
        box-shadow: 0px 0px 7px #ccc;
    }
    .order {
        height: 50px;
        padding: 0 5px;
        position: relative;
        .info-detail {
            color: #fff;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            padding-top: 10px;
        }
    }
    .process {
        margin-top: 24px;
        width: 100%;
        height: 12px;
        background: #2da2ff;
        border: 1px solid #fff;
        border-radius: 10px;
        position: relative;
        .pro-img {
            position: absolute;
            z-index: 2;
            height: 12px;
            border-radius: 10px;
            background: #fff;
            display: inline-block;
            left: 0px;
        }
        .pro-text {
            position: absolute;
            display: flex;
            justify-content: flex-start;
            z-index: 4;
            width: 100%;
            span {
                font-size: 10px;
                line-height: 12px;
                color: #2da2ff;
                display: inline-block;
                width: 30%;
                text-align: center;
                transform: scale(.85);
            }
        }
        .pro-price {
            position: absolute;
            width: 100%;
            height: 10px;
            z-index: 9;
            font-size: 10px;
            margin-top: -17px;
            left: -90px;
            span {
                background: #F56723;
                color: #fff;
                padding: 0 3px;
                border-radius: 3px;
                position: absolute;
                &:after {
                    content: "";
                    position: absolute;
                    top: 12px;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 3px;
                    border-color: #F56723 transparent transparent transparent;
                    margin-left: -14px;
                }
                &:nth-child(1) {
                    margin-left: 12%;
                }
                &:nth-child(2) {
                    margin-left: 43%;
                }
                &:nth-child(3) {
                    margin-left: 73%;
                }
            }
        }
    }
    .time {
        position: absolute;
        width: 120px;
        height: 20px;
        left: 50%;
        margin-left: -60px;
        line-height: 20px;
        background: #83c44e;
        color: #fff;
        font-size: 10px;
        top:0px
    }
    //媒体查询
    @media screen and (max-width:1180px) {
        .customized-cart-list {
            width: 180px;
            margin-right: 10px;
            margin-bottom: 10px;
            height: 238.5px;
            img {
                margin: 10px auto !important;
            }
            .price {
                margin-top: 10px;
                font-size: 12px;
            }
            .animation-box {
                height: 63px;
            }
        }

    }
</style>