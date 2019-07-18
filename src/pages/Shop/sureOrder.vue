<template>
    <div class="width-container">
        <div class="order-top">
            <div class="order-title">
                <span>收货信息</span>
                <router-link to="/edit-address">
                    <span>进入地址管理</span>
                    <svg class="icon">
                        <use xlink:href="#icon-go-next"></use>
                    </svg>
                </router-link>
            </div>
            <div class="order-address">
                <div style="display: flex">
                    <div class="order-name">
                        <svg>
                            <use xlink:href="#icon-shoppingCar-receiver"></use>
                        </svg>
                        <p>张无忌</p>
                    </div>
                    <div class="order-tel">18596878965</div>
                </div>
                <p class="address-detail">河南省郑州市</p>
            </div>
        </div>
        <div class="order-container">
            <div class="order-title">
                <div class="td1">送货清单</div>
                <div class="td2">单价</div>
                <div class="td2">数量</div>
                <div class="td2">小计</div>
            </div>
            <p class="order-company-name">黑龙江制药有限公司</p>
            <div class="order-list">
                <OrderClxld :data="data.items" v-for="(index,entity) in data"></OrderClxld>
            </div>
            <div class="order-foot">
                <div class="td1">
                    <span>没有使用优惠券</span>
                </div>
                <div class="td2">
                   <p>3</p>
                </div>
                <div class="td2">
                     <p>券后小计：<b>￥105.33</b></p>
                </div>
            </div>
        </div>
        <CartsShopFooter :onSubmit = "onSubmit" :message="'提交订单'"></CartsShopFooter>
    </div>
</template>

<script>
    import OrderClxld from "@/components/modules/OrderCard"
    import CartsShopFooter  from '@/components/shopcar/CartFooter2'
    export default {
        name: "sureOrder",
        components:{
          OrderClxld,
            CartsShopFooter
        },
        data(){
            return{
                data:{
                    items: {
                        good_name:"维生素",
                        sale_price:'234.99',
                        num:2
                    },
                }
            }
        },
        methods:{
            onSubmit(){
                this.$router.push('/pay-order')
            },
        }
    }
</script>

<style lang="scss" scoped>
    .order-top {
        border:1px solid #e6e6e6;
        .order-title {
            height: 32px;
            line-height: 32px;
            background: #f5f5f5;
            padding: 0 20px;
            a {
                float: right;
                color: #666;
                svg {
                    width: 16px;
                    height: 16px;
                    margin-left: 3px;
                }
            }
        }
        .order-address {
            padding: 20px;
            .order-name {
                width: 144px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                position: relative;
                svg {
                    width: 144px;
                    height: 30px;
                }
                p {
                    position: absolute;
                    top:0px;
                    width: 100%;
                }
            }
            .order-tel {
                font-size: 16px;
                color: #666;
                padding-left: 15px;
                line-height: 30px;
            }
            .address-detail {
                margin-top: 20px;
                font-size: 14px;
            }
        }
    }
    .order-container {
        margin-top: 30px;
        .order-title {
            height: 32px;
            line-height: 32px;
            background: #f5f5f5;
            padding: 0 20px;
            display: flex;
            font-size: 12px;
            border: 1px solid #e6e6e6;
            .td1 {
                width: 40%;
            }
            .td2 {
                width: 20%;
                text-align: center;
            }
        }
        .order-company-name {
            line-height: 25px;
            padding-top: 3px;
            padding-left: 20px;
        }
        .order-foot {
            height: 55px;
            line-height: 55px;
            padding: 0 15px;
            display: flex;
            border:1px solid #e6e6e6;
            border-top: 1px solid #f1f1f1;
            .td1 {
                width: 60%;
            }
            .td2 {
                width: 20%;
                text-align: center;
                display: flex;
                p {
                    text-align: center;
                    width: 100%;
                    b {
                        color: #ff3b30;
                    }
                }

            }
        }
    }
</style>