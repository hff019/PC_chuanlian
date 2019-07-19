<template>
    <router-link to="/business-product-detail" class="product-item">
        <img src="../../images/index/img3.jpg">
        <p class="title">{{data.good_name}}</p>
        <p class="info"><span>￥{{data.price}}</span><span>￥{{data.market_price}}</span></p>
    </router-link>
</template>

<script>
    export default {
        name: "BusinessProductCard",
        props:[ "data"]
    }
</script>

<style lang="scss" scoped>
    .product-item {
        display: block;
        text-align: center;
        height: 428px;
        img {
            width: 195px;
            height: 195px;
            display: block;
            margin: 0 auto;
            top: 40px;
            position: relative;
            margin-bottom: 60px;
        }
        .title {
            font-size: 16px;
            color: #333;
        }
        .info {
            padding-top: 40px;
            span {
                font-size: 14px;
                &:nth-child(1) {
                    color: #ff3b30;
                    margin-right: 10px;
                }
                &:nth-child(2) {
                    color: #999999;
                    text-decoration-line: line-through;
                }
            }
        }
    }
    @media screen and (max-width:1180px) {
        .product-item {
            height: 332px;
            img {
                top:30px;
                margin-bottom: 30px;
            }
            .info {
                padding-top: 30px;
            }
        }
    }
</style>