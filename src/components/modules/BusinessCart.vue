<template>
    <div>
        <span class="business-cart-list" @click="entryBusinessShop(data)">
            <img :src="data.logo" alt="维生素" class="img">
            <h3 class="title">{{data.name}}</h3>
            <p class="price">{{data.tel}}</p>
        </span>
    </div>
</template>

<script>
    export default {
        name: "BusinessCart",
        props:["data","entryBusinessShop"]
    }
</script>

<style lang="scss" scoped>
    .business-cart-list {
        width: 223px;
        height: 300px;
        background: #fff;
        display: inline-block;
        color: #333333;
        text-align: center;
        position: relative;
        overflow: hidden;
        margin-right: 15px;
        margin-bottom: 15px;
        cursor: pointer;
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
            width: 174px;
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