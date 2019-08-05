<template>
    <div class="width-container">
        <div class="step">
            <div class="stepnum">
                <span>1</span>
                <p>查看购物车</p>
            </div>
            <div class="stepnum">
                <span>2</span>
                <p>填写账号订单</p>
            </div>
            <div class="stepnum">
                <span>3</span>
                <p>成功提交订单</p>
            </div>
        </div>
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
                        <p>{{choosedAddress.consignee}}</p>
                    </div>
                    <div class="order-tel">{{choosedAddress.tel}}</div>
                </div>
                <p class="address-detail">{{choosedAddress.full_address}}</p>
            </div>
        </div>
        <div class="order-container">
            <div class="order-title">
                <div class="td1">送货清单</div>
                <div class="td2">单价</div>
                <div class="td2">数量</div>
                <div class="td2">小计</div>
            </div>
            <div :key="index" v-for="(shop,index) in　shopData">
                <p class="order-company-name">{{shop.display_name || shop.name}}</p>
                <div class="order-list">
                    <OrderClxld :data="entity" :key="`${index}:${enIndex}`" v-for="(entity,enIndex) in shop.entities"></OrderClxld>
                </div>
                <div class="order-foot">
                    <div class="td1">
                        <span>没有使用优惠券</span>
                    </div>
                    <div class="td2">
                        <p>{{shop.cnum}}</p>
                    </div>
                    <div class="td2">
                        <p>券后小计：<b>￥{{shop.cprice | display_price}}</b></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="CartFooter2">
            <div class="right">

                <p>总计：<span>{{totalNum}}件</span></p>
                <p>实际支付：<span>{{totalPrice| display_price}}</span></p>
                <button class="btn"   @click="onSubmit">确认订单</button>
            </div>
        </div>
    </div>
</template>

<script>
    import OrderClxld from "@/components/modules/OrderCard"
    import CartsShopFooter from '@/components/shopcar/CartFooter2'
    import {mapState, mapMutations} from 'vuex'
    import {getAddressList} from '@/api/address'

    export default {
        name: "sureOrder",
        components: {
            OrderClxld,
            CartsShopFooter
        },
        data() {
            return {
                shopData: [],
                is_success: false,
                orderType: 1,
                data: {
                    items: {
                        good_name: "维生素",
                        sale_price: '234.99',
                        num: 2
                    },
                }
            }
        },
        computed: {
            ...mapState({
                confirmOrderData: state => state.shop.CONFIRM_ORDER_DATA,
                choosedAddress: state => state.shop.CHOOSED_ADDRESS
            }),
            totalPrice() {
                let price = 0
                const shopData = this.shopData
                shopData.forEach((shop, i) => {
                    price += shop.real_price

                })
                return price
            },
            totalNum(){
                let num = 0
                const shopData = this.shopData
                shopData.forEach((shop, i) => {
                    num += shop.cnum

                })
                return num
            }
        },
        created() {
            this.initData()
        },
        methods: {
            ...mapMutations(['CHOOSE_ADDRESS']),
            //初始化数据
            initData() {
                if (!this.confirmOrderData) {
                    this.goBack()
                }
                const confirmOrderData = this.confirmOrderData
                this.orderType = confirmOrderData.type
                switch (confirmOrderData.type) {
                    case 'factory':
                        this.initFactoryData(confirmOrderData.checkedItems)
                        break
                    case 'business':
                        console.log(confirmOrderData.checkedItems)
                        this.initBusinessData(confirmOrderData)
                        break
                }

                this.initAddress()
            },
            //获取地址信息，第一个地址为默认选择地址
            async initAddress() {
                if (!this.choosedAddress) {
                    const {data} = await getAddressList()
                    if (data instanceof Array && data.length) {
                        let defaultAddress = data[0]
                        if (!defaultAddress.is_default) {
                            data.forEach(address => {
                                if (address.is_default) {
                                    defaultAddress = address
                                }
                            })
                        }

                        this.CHOOSE_ADDRESS({address: defaultAddress})
                    }
                }
            },
            async initFactoryData(checkedItems) {
                const params = {
                    type: 'factory',
                    items: checkedItems
                }

                const {data} = await this.$http.post('hippo-shop/confirm-order', params)
                data.forEach((shop, i) => {
                    let cnum = 0
                    let cprice = 0
                    Object.values(shop.entities).forEach((entity, ix) => {
                        entity['show_unit'] = entity.big_unit
                        entity['sale_price'] = entity.price * entity.tran
                        checkedItems.forEach(item => {
                            if (item.id === entity.id) {
                                cnum += item.num
                                entity['num'] = item.num
                                cprice += entity['sale_price'] * entity['num']
                            }
                        })
                    })
                    shop.cnum = cnum
                    shop.cprice = cprice
                    shop.real_price = cprice
                })
                this.shopData = data
            },
            async initBusinessData(confirmData) {
                const params = {
                    type: 'business',
                    shopId: confirmData.shopId,
                    items: confirmData.checkedItems
                }
                let {data} = await this.$http.post('hippo-shop/confirm-order', params)
                data.forEach((shop, i) => {
                    let cnum = 0
                    let cprice = 0
                    Object.values(shop.entities).forEach((entity, ix) => {
                        entity['sale_price'] = entity.price
                        entity['show_unit'] = entity.unit
                        confirmData.checkedItems.forEach(item => {
                            if (item.id === entity.id) {
                                cnum += item.num
                                entity['num'] = item.num
                                cprice += entity['sale_price'] * entity['num']
                            }
                        })
                    })
                    shop.cnum = cnum
                    shop.cprice = cprice
                    shop.real_price = cprice
                })
                this.shopData = data
            },
            onSubmit() {
                if (!this.choosedAddress) {
                    this.$messagebox.alert('请添加收货地址！')
                    return
                }

                const params = {
                    address: this.choosedAddress,
                    confirmOrderData: this.confirmOrderData
                }

                this.$http.post('/hippo-shop/to-order', params)
                .then(response => {
                    this.$router.push({path: '/pay-order', query: {}})
                    this.is_success = true
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                })

            }
        }
    }
</script>

<style lang="scss" scoped>
    .stepnum:nth-child(3) p {
        color: rgb(153, 153, 153);
    }

    .stepnum:nth-child(1) {
        background-image: url(../../images/shop/nextStep2@2x.png);
    }

    .stepnum:nth-child(3) span {
        background: #fff;
        color: rgb(153, 153, 153);
        border: 1px solid rgb(153, 153, 153);
        width: 21px;
        height: 21px;
        line-height: 21px;
    }

    .order-top {
        border: 1px solid #e6e6e6;

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
                    top: 0px;
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
            border: 1px solid #e6e6e6;
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
    .CartFooter2 {
        position: relative;
        height: 50px;
        border: 1px solid #e5e5e5;
        line-height: 50px;
        margin-top: 20px;
        padding-left: 30px;
        .right {
            display: flex;
            float: right;
            p {
                font-size: 12px;
                color: #666;
                margin-right: 50px;
                span {
                    color: #ff3b30;
                    font-size: 14px;
                    font-weight: bold;
                }
            }
            .btn {
                width: 120px;
                height: 50px;
                background: #26a2ff;
                color: #fff;
                font-size: 14px;
                border: 0px;
                cursor: pointer;

            }
        }
    }
</style>