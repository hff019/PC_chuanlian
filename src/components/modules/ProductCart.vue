<template>
    <router-link to="/product-detail" class="product-cart-list">
        <img src="../../images/index/img3.jpg" alt="维生素" class="img">
        <h3 class="title">维生素</h3>
        <p class="info">10mg*100片/瓶 100瓶一件</p>
        <p class="price">10元/瓶</p>
        <div class="animation-box">
            <p>毛利润 20% / 销售量 1000件</p>
            <p>建议零售价 20元/瓶</p>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "ProductCart"
    }
</script>

<style lang="scss" scoped>
    .product-cart-list {
        width: 226px;
        height: 300px;
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
            p {
                font-size: 12px;
                &:nth-child(1) {
                    padding-top: 20px;
                }
                &:nth-child(2) {
                    padding-top: 10px;
                    opacity: .7;
                }
            }
        }
    }
    .product-cart-list:hover .animation-box {
        bottom: 0px;
    }
    .product-cart-list:hover {
        box-shadow: 0px 0px 7px #ccc;
    }
    //媒体查询
    @media screen and (max-width:1180px) {
        .product-cart-list {
            width: 175px;
            margin-right: 10px;
            margin-bottom: 10px;
            height: 232px;
            img {
                margin: 10px auto !important;
            }
            .price {
                margin-top: 10px;
            }
            .animation-box {
                height: 60px;
                p {
                    font-size: 12px;
                    &:nth-child(1) {
                        padding-top: 10px;
                    }

                }
            }
        }

    }
</style>