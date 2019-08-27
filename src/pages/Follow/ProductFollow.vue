<template>
    <div>
        <TopClxsd/>
        <div class="container">
            <div class="title">
                <span>商品收藏</span>
            </div>
            <div v-if="collectList.length>0">
                <div class="follow-item" v-for="(enItem,enIndex) in collectList">
                    <div class="follow-item-box1">
                        <router-link :to="`/factoty-shop/${enItem.id}`">进入厂家</router-link>
                        <span @click="deleteGoodsFn(enIndex,enItem)">取消收藏</span>
                    </div>
                    <router-link to="" class="follow-item-box2">
                        <img :src="enItem.entity.img_cover" class="img">
                        <p class="p1">{{enItem.entity.good_name}}</p>
                        <p class="p2">{{enItem.entity.price}}10元/{{enItem.entity.unit}}</p>
                    </router-link>
                    <div class="follow-item-box3"  v-if="canShow">
                        <div  @click="addToMiniCart($event,enItem.entity)" v-if="enItem.num<1">
                            <svg class="icon">
                                <use xlink:href="#icon-myEnshrine-carShopping"></use>
                            </svg>
                            <span>加入购物车</span>
                        </div>
                        <router-link to="/my-shop"  v-else>
                            <span>已加入购物车，去购买</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <Empty v-else/>
        </div>
    </div>
</template>

<script>
    import TopClxsd from "@/components/common/MyTop"
    import {getCollectionList, deleteCollection} from "@/api/follow.js"
    import Empty from "@/components/Empty"
    import { mapState,mapMutations} from 'vuex'

    export default {
        name: "ProductFollow",
        components:{
            TopClxsd,
            Empty
        },
        data(){
            return {
                loading:true,
                currentPage:1,
                pagesize:20,
                collectList:[],
                factoryId:0
            }
        },
        computed:{
            ...mapState({
                canShow:state => state.CURRENTUSER.shop_supplier,
                cartList: state =>state.shop.CART_LIST
            }),
            //当前商店购物信息
            shopCart(){
                return {...this.cartList[this.factoryId]}
            },
            cartNum(){
                let num = 0;
                Object.values(this.shopCart).forEach((item,index) =>{
                    num += item.num;
                })
                return num
            },
        },
        created() {
            var params = {
                page: this.currentPage,
                type: 'follow',
                limit: this.pagesize
            }
            this.initData(params);
        },
        methods:{
            ...mapMutations([
                'ADD_CART','REMOVE_CART',
            ]),
            canOption(){
                if(!this.canShow){
                    this.$Message.error('当前用户还未审核通过');
                    return false;
                }
                return true
            },

            addToMiniCart(event,enItem){
                console.log(enItem)
                const item = {
                    shopId:enItem.supplier_id,
                    itemId:enItem.id,
                    sale_price:enItem.tran*enItem.price,
                }
                if(this.canOption()){
                    this.ADD_CART(item)
                    item.num++
                }

            },
            async initData(params) {
                getCollectionList(params)
                .then(({data = []}) => {
                    this.loading = false
                    this.collectList = data
                    this.collectList.forEach((enItem,enIndex) => {
                        console.log(enItem.entity_id)
                        enItem.num = 0
                        Object.values(this.cartList).forEach((item,index) =>{
                            Object.values(item).forEach((itemCar,index) => {
                                console.log(itemCar.id)
                                if(itemCar.id == enItem.entity_id){
                                    enItem.num = itemCar.num
                                }
                            })

                        })
                    })
                })
            },
            current_change(currentPage){  //改变当前页
                this.currentPage = currentPage
                var params = {
                    page: this.currentPage,
                    type: 'factory',
                    limit: this.pagesize
                }
                this.initData(params)
            },
            deleteGoodsFn(enIndex,enItem){
                this.$alert('确定取消收藏了吗?', {
                    confirmButtonText: '确定',
                    callback: action => {

                        if(action === 'confirm'){
                            deleteCollection(enItem.entity_id)
                            this.collectList.splice(1)
                            this.$message({
                                type: 'info',
                                message: `取消收藏成功`
                            });
                        }else{
                            this.$message({
                                type: 'info',
                                message: `action: ${ action }`
                            });
                        }


                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        padding-bottom: 20px;
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 20px;
        font-size: 14px;
    }
    .container {
        background: #fff;
        padding: 20px;
        margin-top: 20px;
    }
    .follow-item {
        width: 228px;
        border:1px solid #e6e6e6;
        position: relative;
        overflow: hidden;
        display: inline-block;
        margin-right: 10px;
        margin-left: 10px;
        transition: .4s;
        margin-bottom: 20px;
        &:hover {
            box-shadow: 0px 0px 4px #ccc;
            .follow-item-box1 {
                display:flex
            }
        }
        &-box1 {
            position: absolute;
            width: 100%;
            height: 25px;
            background: rgb(153,153,153);
            font-size: 12px;
            text-align: center;
            display: flex;
            z-index: 9;
            text-align: center;
            line-height: 25px;
            color: #fff;
            display: none;
            a {
                width: 50%;
                color: #fff;
                border-right: 1px solid #fff;
                &:hover {
                    background: #2da2ff;
                }
            }
            span {
                text-align: center;
                width: 50%;
                cursor: pointer;
                &:hover {
                    background: #ff3b30;
                }
            }
        }
        &-box2 {
            text-align: center;
            padding-bottom: 10px;
            display: block;
            img {
                width: 97%;
                height: 220px;
                position: relative;
                margin: 10px auto;
            }
            .p1 {
                font-size: 14px;
                margin-top: 2px;
                color: #333;
                overflow: hidden;
                white-space: nowrap;
            }
            .p2 {
                font-size: 12px;
                color: #ff3b30;
                margin-top: 10px;
            }
        }
        &-box3 {
            margin-top: 10px;
            width: 100%;
            height: 34px;
            background: rgb(245,245,245);
            line-height: 34px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            a {
                color: #333;
            }
            &:hover {
                background: #2da2ff;
                color: #fff;
                font-weight: bold;
                svg {
                    display: none;
                }
                a {
                    color: #fff;
                }
            }
            svg {
                width: 20px;
                height: 20px;
                margin-right: 3px;
            }
        }
    }
    //媒体查询
    @media screen and (max-width:1180px) {
        .follow-item {
            width: 177px;
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 10px;
            img {
                height: 160px;
            }
        }
    }
</style>