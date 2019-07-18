<template>
    <div>
        <router-link to="/factoty-shop" class="factory-cart-list">
            <img src="../../images/index/logo.png" alt="维生素" class="img">
            <h3 class="title">上海制药厂</h3>
            <p class="info">中国上海/配送时间：30天/已售555件</p>
            <p class="price">4个活动</p>
        </router-link>
    </div>
</template>

<script>

    export default {
        name: "FactoryCart"
    }
</script>

<style lang="scss" scoped>
    .factory-cart-list {
        width: 226px;
        height: 300px;
        background: #fff;
        display: inline-block;
        color: #333333;
        text-align: center;
        position: relative;
        overflow: hidden;
        margin-right: 15px;
        margin-bottom: 15px;
        &:nth-child(5n) {
            margin-right: 0px;
        }
        .img {
            width: 136px;
            height: 136px;
            display: block;
            margin: 32px auto;
            transition:all .4s;
            &:hover {
                transform: scale(1.2);
            }
        }
        .title {
            // @include overEill;
            font-size: 14px;
            color: #333;
        }
        .info {
            color: #b0b0b0;
            font-size: 12px;
            margin-top: 10px;
        }
        .price {
            // color: $blue-color;
            font-size: 13px;
            margin-top: 15px;
            color: #ff0036;
        }
    }
    .factory-cart-list:hover {
        box-shadow: 0px 0px 7px #ccc;
    }
    //媒体查询
    @media screen and (max-width:1180px) {
        .factory-cart-list {
            width: 176px;
            margin-right: 10px;
            margin-bottom: 10px;
            height: 240px;
            img {
                margin: 10px auto !important;
            }
            .price {
                margin-top: 10px;
            }
        }

    }
</style>