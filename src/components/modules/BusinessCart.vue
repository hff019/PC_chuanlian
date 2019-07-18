<template>
    <div>
        <router-link to="/business-home" class="business-cart-list">
            <img src="../../images/index/logo.png" alt="维生素" class="img">
            <h3 class="title">河南省新乡市某某有限公司</h3>
            <p class="price">0371-52548789</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "BusinessCart"
    }
</script>

<style lang="scss" scoped>
    .business-cart-list {
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
            line-height: 20px;
            height: 40px;
            overflow: hidden;
            color: #333;
        }

        .price {
            // color: $blue-color;
            font-size: 13px;
            margin-top: 10px;
            color: #ff0036;
        }
    }
    .business-cart-list:hover {
        box-shadow: 0px 0px 7px #ccc;
    }
    //媒体查询
    @media screen and (max-width:1180px) {
        .business-cart-list {
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