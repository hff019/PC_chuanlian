<template>
    <li class="order-list-li">
        <div class="td1">
            <router-link to="" class="td1-a">
                <img src="../../images/index/img3.jpg">
                <p>{{ data.good_name}}</p>
            </router-link>
        </div>
        <div class="td2">
            <p>{{data.sale_price}}</p>
        </div>
        <div class="td3">
            <p>{{data.num}}</p>
        </div>
        <div class="td4">
            <p class="red-color"><b>{{data.sale_price * data.num}}</b></p>
        </div>
    </li>
</template>

<script>
    export default {
        name: "OrderCard",
        props:["data"]
    }
</script>

<style lang="scss" scoped>
    .order-list-li {
        position: relative;
        list-style: none;
        height: 82px;
        border: 1px solid #e6e6e6;
        border-bottom: 0px;
        font-size: 12px;
        padding: 10px 15px;

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
                    border: 1px solid #f1f1f1;
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
            width: 20%;
            float: left;
            text-align: center;
            font-weight: bold;
        }
    }
</style>