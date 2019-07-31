<template>
    <li class="shop-items-list-li">
        <div class="td1">
            <div>
                <svg class="icon" @click="productCheckchange(sid,pid)">
                    <use :xlink:href="`#icon-check-${data.checked ? '1' : '0' }`"></use>
                </svg>
            </div>
            <router-link to="" class="td1-a">
                <img src="../../images/index/img3.jpg">
                <p>{{ data.good_name}}</p>
            </router-link>
        </div>
        <div class="td2">
            <p><b>{{data.sale_price}}</b></p>
        </div>
        <div class="td3">
            <div class="shop-arithmetic">
                <a class="minus" @click.prevent.stop="minGoods(sid,pid)">-</a>
                <span class="num">{{data.num}}</span>
                <a class="plus" @click.prevent.stop="addGoods(sid,pid)">+</a>
            </div>
        </div>
        <div class="td4">
            <p class="red-color"><b>￥{{data.num*data.sale_price}}</b></p>
        </div>
        <div class="td5">
            <p>删除</p>
        </div>
    </li>
</template>

<script>
    export default {
        name: "CartEntry",
        props: [
            "data", "pid", "productCheckchange", "sid", "addGoods", "minGoods"
        ],
    }
</script>

<style lang="scss" scoped>
    .shop-items-list-li {
        position: relative;
        list-style: none;
        height: 82px;
        border: 1px solid #e6e6e6;
        border-bottom: 0px;
        font-size: 12px;
        padding: 10px 5px;
        &:hover {
            background: #f2f9ff;
        }

        .red-color {
            color: #ff3b30;
        }

        .td1 {
            width: 40%;
            text-align: left;
            display: flex;
            svg {
                cursor: pointer;
                margin-right: 14px;
            }
            .td1-a {
                display: flex;
                height: 82px;

                img {
                    width: 82px;
                    height: 82px;
                }

                p {
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

        > div {
            width: 15%;
            float: left;
            text-align: center;
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