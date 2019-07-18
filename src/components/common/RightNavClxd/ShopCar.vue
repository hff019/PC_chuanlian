<template>
    <div class="ShopCar">
        <div class="title">
            <span>购物车</span>
            <span @click="closedCarBox()">关闭</span>
        </div>
        <div class="shop-container">
            <div class="shop-list">
                <router-link to="" class="left">
                    <img src="../../../images/index/img3.jpg" class="img">
                    <div>
                        <p class="title-p">维生素</p>
                        <p class="price">￥100元/件 <span>&Chi;2</span></p>
                    </div>
                </router-link>
                <div class="right">删除</div>
            </div>
        </div>
        <div class="total">
            <div class="info">
                <p><span>6</span>件产品</p>
                <p>共计：<span>￥5212.00</span></p>
            </div>
            <div class="btn">去结算</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopCar",
        props:["closedCarBox"]
    }
</script>

<style lang="scss" scoped>
    @-webkit-keyframes mymove{
        0%{
            width: 0;
        }
        100%{
            width: 275px;
        }
    }
    .ShopCar {
        position: fixed;
        width: 275px;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        top: 0px;
        right: 30px;
        background: #fff;
        z-index: 99;
        border-left: 1px solid #f1f1f1;
        animation:mymove .35s ease-in-out alternate forwards;
        &::-webkit-scrollbar {
            width: 0px;
            background: #fff;
            height: 0px;
        }
    }
    .title {
        height: 35px;
        display: flex;
        justify-content: space-between;
        padding: 0 5px;
        line-height: 35px;
        font-size: 16px;
        margin-left: 15px;
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 10px;
        color: #333;
    }
    .shop-list {
        display: flex;
        padding: 10px;
        .left {
            width: 200px;
            display: flex;
            .img {
                width: 50px;
                height: 50px;
                border:1px solid #f1f1f1;
                border-radius: 2px;
            }
            >div{
                padding-left: 6px;
            }
            .title-p {
                font-size: 13px;
                line-height: 25px;
                white-space: nowrap;
                overflow: hidden;
                color: #333;
            }
            .price {
                color: #ff0036;
                font-size: 12px;
                margin-top: 8px;
                span {
                    color: #333;
                }
            }
        }
        .right {
            color: #2da2ff;
            padding-top: 34px;
        }
    }
    .total {
        display: flex;
        position: fixed;
        bottom: 0px;
        border-top: 1px solid #f1f1f1;
        padding: 8px 12px;
        width: 240px;
        .info {
            width: 150px;
            p {
                line-height: 18px;
                span {
                    color: #ff0036;
                }
            }
        }
        .btn {
            width: 110px;
            height: 35px;
            background: #2da2ff;
            color: #fff;
            line-height: 35px;
            text-align: center;
            font-size: 16px;
        }
    }
</style>