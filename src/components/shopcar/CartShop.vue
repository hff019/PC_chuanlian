<template>
    <div class="shop-items">
        <div class="shop-items-title">
            <div>
                <svg class="icon" @click="shopChecked(sid)">
                    <use :xlink:href="`#icon-check-${data.checked ? '1' : '0' }`"></use>
                </svg>
            </div>
            <span>{{data.shopName}}</span>
        </div>
        <ul>
            <clxsd-carts-entry :minGoods="minGoods"
                               :addGoods="addGoods"
                               :productCheckchange="productCheckchange"
                               :pid="index" :sid="sid"
                               :key="index" v-for="(value,index) in data.items"
                               :data="value"></clxsd-carts-entry>
        </ul>
        <div class="shop-items-foot">
            <div class="td1">
                <el-popover
                        placement="top-start"
                        width="440"
                        trigger="hover"
                >
                    <div>
                        <ul class="coupon-list">
                            <li>
                                <div class="coupon-title">代金券</div>
                                <div class="coupon-detail">
                                    <p>满1000减100</p>
                                    <p>2019.03.19-2019.10.10</p>
                                </div>
                                <div class="coupon-use">使用</div>
                            </li>
                            <li>
                                <div class="coupon-title">优惠券</div>
                                <div class="coupon-detail">
                                    <p>满1000减100</p>
                                    <p>2019.03.19-2019.10.10</p>
                                </div>
                                <div class="coupon-use">使用</div>
                            </li>
                        </ul>
                    </div>
                    <el-button slot="reference" style="border: 0px">
                        <svg>
                            <use xlink:href="#iconshoppingCar-activity"></use>
                        </svg>
                    </el-button>
                </el-popover>

                <span>暂无活动可用券</span>
            </div>
            <div class="td2">
                <span>1</span>
            </div>
            <div class="td3">
                <p>原价小计：<b>￥125.33</b></p>
            </div>
            <div class="td4">
                <p>券后小计：<b>￥105.33</b></p>
            </div>
        </div>
    </div>
</template>

<script>
    import ClxsdCartsEntry from "./CartEntry"
    export default {
        name: "CartShop",
        props: ["data", "sid", "productCheckchange", "addGoods", "minGoods"],
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