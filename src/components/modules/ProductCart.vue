<template>
    <router-link :to="`/product-detail/${factoryId}/${data.id}`" class="product-cart-list">
        <img :src="data.img_cover" alt="维生素" class="img">
        <h3 class="title">{{data.good_name}}</h3>
        <p class="info">{{data.spec}} {{data.tran}}{{data.unit}}/{{data.big_unit}}</p>
        <p class="price"><span style="color:#ff3b30">{{data.price}}</span><small> 元/{{data.unit}}</small></p>
        <div class="animation-box">
            <p>毛利润 3% / 销售量 {{data.sale_num}}件</p>
            <p>建议零售价 {{data.price}}元/{{data.unit}}</p>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "ProductCart",
        props:["data","factoryId"]
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
        margin-right: 10px;
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
            margin-right: 7px;
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