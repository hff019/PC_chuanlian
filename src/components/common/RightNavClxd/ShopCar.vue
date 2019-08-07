<template>
    <div class="ShopCar">
        <div class="title">
            <span>购物车</span>
            <span @click="closedCarBox()">关闭</span>
        </div>
        <div class="shop-container">
            <CartsShoplist :data="data"/>
        </div>
        <div class="total">
            <div class="info">
                <p><span>{{totle_num}}</span>件产品</p>
                <p>共计：<span>￥{{total_price}}</span></p>
            </div>
            <router-link to="/my-shop" class="btn" target="_blank">去结算</router-link>
        </div>
    </div>
</template>

<script>
    import CartsShoplist from '@/components/shopcarSmall/CartsShopList'
    import Empty from '@/components/shopcar/EmptyCar'
    import { mapState,mapMutations} from 'vuex'
    import { supplierFactoryEntities } from '@/api/supplier'

    export default {
        name: "ShopCar",
        props:["closedCarBox"],
        components: {
            CartsShoplist,
            Empty,
        },
        data() {
            return {
                shopId:0,
                title:'购物车',
                isEmpty: true,
                data:{
                    shops:[],
                },
                totle_num:0,
                total_price:0,
            }
        },
        created(){
            this.shopId = this.$route.params.shopId ? parseInt(this.$route.params.shopId):0
            if(this.shopId){
                this.route = `/my-shop/${this.shopId}`
            }
        },
        mounted(){
            this.initData()
        },
        computed:{
            ...mapState({
                cartList: state =>state.shop.CART_LIST
            }),
        },
        methods: {
            async initData(){
                let ids = []
                let idMapQ = {}
                let cartData = this.shopId ? this.cartList[this.shopId]:this.cartList
                if(cartData){
                    if(this.shopId){
                        Object.values(cartData).forEach(item => {

                            ids.push(item.id)
                            idMapQ[item.id] = item.num
                        })
                    }else{
                        Object.values(cartData).forEach(item => {
                            Object.values(item).forEach(_item =>{
                                ids.push(_item.id)
                                idMapQ[_item.id] = _item.num
                            })

                        })
                    }
                }
                if(ids.length){
                    const { data } = await supplierFactoryEntities(ids.join(','))
                    this.data.shops = this._handleData(data,idMapQ)
                }
            },
            _handleData(data,map){
                let shops = {}
                data.forEach((item,index) =>{
                    console.log(item)
                    item.sale_price = item.price * item.tran
                    item.num = map[item.id]
                    this.totle_num+=item.num
                    this.total_price += item.price * item.tran
                    item.checked = false
                    item.shopId = item.supplier.id
                    item.show_unit = item.big_unit
                    if(shops[item.supplier.id]){
                        shops[item.supplier.id]['items'] = shops[item.supplier.id]['items'].concat([item])
                    }else{
                        shops[item.supplier.id] = {
                            shopId:item.supplier.id,
                            shopName: item.supplier.display_name || item.supplier.name,
                            logo:item.supplier.logo,
                            type:item.supplier.type,
                            checked:false,
                            items:[].concat([item])
                        }
                    }
                })
                return Object.values(shops)
            },
        }
    }
</script>

<style lang="scss" scoped>
    @-webkit-keyframes mymove{
        0%{
            width: 0;
        }
        100%{
            width: 275px;
        }
    }
    .ShopCar {
        position: fixed;
        width: 275px;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        top: 0px;
        right: 30px;
        background: #fff;
        z-index: 99;
        border-left: 1px solid #f1f1f1;
        animation:mymove .35s ease-in-out alternate forwards;
        &::-webkit-scrollbar {
            width: 0px;
            background: #fff;
            height: 0px;
        }
    }
    .title {
        height: 35px;
        display: flex;
        justify-content: space-between;
        padding: 0 5px;
        line-height: 35px;
        font-size: 16px;
        margin-left: 15px;
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 10px;
        color: #333;
    }
    .shop-list {
        display: flex;
        padding: 10px;
        .left {
            width: 200px;
            display: flex;
            .img {
                width: 50px;
                height: 50px;
                border:1px solid #f1f1f1;
                border-radius: 2px;
            }
            >div{
                padding-left: 6px;
            }
            .title-p {
                font-size: 13px;
                line-height: 25px;
                white-space: nowrap;
                overflow: hidden;
                color: #333;
            }
            .price {
                color: #ff0036;
                font-size: 12px;
                margin-top: 8px;
                span {
                    color: #333;
                }
            }
        }
        .right {
            color: #2da2ff;
            padding-top: 34px;
        }
    }
    .total {
        display: flex;
        position: fixed;
        bottom: 0px;
        border-top: 1px solid #f1f1f1;
        padding: 8px 12px;
        width: 240px;
        .info {
            width: 150px;
            p {
                line-height: 18px;
                span {
                    color: #ff0036;
                }
            }
        }
        .btn {
            width: 110px;
            height: 35px;
            background: #2da2ff;
            color: #fff;
            line-height: 35px;
            text-align: center;
            font-size: 16px;
        }
    }
</style>