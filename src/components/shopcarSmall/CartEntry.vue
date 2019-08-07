<template>
    <li class="shop-items-list-li">
        <div class="td1">
            <router-link to="" class="td1-a">
                <img src="../../images/index/img3.jpg">
            </router-link>
        </div>
        <div class="td2">
            <p class="title">{{data.good_name}}</p>
            <p><b style="color: #ff3b30">{{data.sale_price}}/{{data.big_unit}}</b><span> x{{data.num}}</span></p>
        </div>
    </li>
</template>

<script>
    export default {
        name: "CartEntry",
        props: [
            "data", "pid", "sid",
        ],
    }
</script>

<style lang="scss" scoped>
    .shop-items-list-li {
        position: relative;
        list-style: none;
        height: 52px;
        font-size: 12px;
        padding: 10px 15px;
        display: flex;
        &:hover {
            background: #f2f9ff;
        }

        .red-color {
            color: #ff3b30;
        }

        .td1 {
            text-align: left;
            .td1-a {
                display: flex;
                img {
                    width: 50px;
                    height: 50px;
                    border:1px solid #f1f1f1;
                    border-radius: 2px;
                }
            }

        }

        .td2 {
            width: 55%;
            float: left;
            text-align: left;
            padding-left: 10px;
            .title {
                width: 160px;
                height: 36px;
                line-height: 18px;
                font-size: 12px;
                overflow: hidden;
                color: #333;
                margin-left: 5px;
            }
        }
    }
    .shop-arithmetic {
        width: 76px;
        height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        border: 1px solid #f1f1f1;
        margin: 0 auto;

        a {
            color: #26A2FF;
            font-size: 19px;
            flex: 1;
            line-height: 20px;
            font-style: normal;
            font-weight: bold;
            color: rgb(45, 162, 255);
            cursor: pointer;
        }

        .num {
            font-style: normal;
            font-size: 14px;
            color: #333;
            border-left: 1px solid #f1f1f1;
            border-right: 1px solid #f1f1f1;
            width: 30px;
            text-align: center;
            display: inline-block;
        }
    }
</style>