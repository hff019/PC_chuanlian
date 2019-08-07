<template>
    <div class="shop-items">
        <ul>
            <clxsd-carts-entry
                               :pid="index" :sid="sid"
                               :key="index" v-for="(value,index) in data.items"
                               :data="value"></clxsd-carts-entry>
        </ul>
    </div>
</template>

<script>
    import ClxsdCartsEntry from "./CartEntry"
    export default {
        name: "CartShop",
        props: ["data", "sid"],
        components: {
            ClxsdCartsEntry
        },
        methods: {
            shopChecked(i) {
                this.$emit('shopChecked', i)
            }
        },
        filters: {
            //进行店铺价钱总计的计算的操作
            __shopCount(data) {
                let shopCount = 0;
                data.items.forEach((product, inp) => {
                    if(product.checked) {
                        shopCount += product.sale_price * product.qua;
                    }
                })
                return shopCount;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .shop-items-title {
        padding: 20px 6px 12px;
        display: flex;
        align-items: center;

        svg {
            margin-right: 4px;
            cursor: pointer;
        }
    }
    el-button:focus, .el-button:hover {
        background: none;
    }
    .shop-items-foot {
        border: 1px solid #f1f1f1;
        border-top: 0px;
        height: 25px;
        line-height: 25px;
        padding: 18px 0;
        display: flex;
        border-top: 1px solid #e6e6e6;
        .td1 {
            width: 55%;
            display: flex;
            align-items: center;

            svg {
                width: 68px;
                height: 25px;
                margin-left: 30px;
            }

            span {
                margin-left: 20px;
            }
        }

        .td2 {
            width: 15%;
            text-align: center;
        }

        .td3, .td4 {
            width: 15%;
            text-align: center;

            b {
                color: #ff3b30;
            }
        }
    }

    .coupon-list {
        li {
            display: flex;
            padding: 8px 0;

            .coupon-title {
                width: 74px;
                height: 30px;
                border: 1px solid #e5e5e5;
                text-align: center;
                line-height: 30px;
            }

            .coupon-detail {
                padding-left: 10px;

                p {
                    width: 285px;

                    &:nth-child(1) {
                        font-size: 12px;
                        color: #666;
                    }

                    &:nth-child(2) {
                        font-size: 12px;
                        color: #999;
                    }
                }
            }

            .coupon-use {
                background: #ff0036;
                width: 58px;
                height: 25px;
                color: #fff;
                text-align: center;
                font-size: 12px;
                border-radius: 4px;
                line-height: 25px;
                cursor: pointer;
            }
        }

    }
</style>