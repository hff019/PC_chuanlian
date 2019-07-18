<template>
    <div class="productFollow">
        <div class="title">
            <span>商品收藏</span>
            <span @click="closedProductBox()">关闭</span>
        </div>
        <div class="product-container">
            <div class="product-list">
                <router-link to="">
                    <img src="../../../images/index/img3.jpg" class="img">
                    <p class="title-p">维生素</p>
                    <p class="price">100元/瓶</p>
                </router-link>
            </div>
            <div class="product-list">
                <router-link to="">
                    <img src="../../../images/index/img3.jpg" class="img">
                    <p class="title-p">维生素</p>
                    <p class="price">100元/瓶</p>
                </router-link>
            </div>
        </div>
        <p class="total">已收藏<span>4</span>个产品</p>
    </div>
</template>

<script>
    export default {
        name: "productFollow",
        props:["closedProductBox"]
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
    .productFollow {
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
    }
    .product-container {
        padding: 7px;
    }
    .product-list {
        display: inline-block;
        border:1px solid #f1f1f1;
        width: 115px;
        text-align: center;
        margin-right: 6px;
        height: 170px;
        &:nth-child(2n) {
            margin-right: 0px;
        }
        img {
            width: 115px;
            height: 115px;
        }
        .title-p {
            font-size: 13px;
            line-height: 20px;
            white-space: nowrap;
            overflow: hidden;
        }
        .price {
            color: #ff0036;
            font-size: 12px;
            margin-top: 5px;
        }
    }
    .total {
        position: absolute;
        bottom: 0px;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        font-size: 14px;
        border-top: 1px solid #f1f1f1;
        width: 100%;
        span {
            color: #ff0036;
        }
    }
</style>