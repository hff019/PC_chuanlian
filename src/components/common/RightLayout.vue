<template>
    <div>
        <div class="right-fixed">
            <ul>
                <li @mouseenter="my_frame = !my_frame" @mouseleave="my_frame = !my_frame">
                    <router-link to="/my-info" class="my">
                        <svg class="icon" aria-hidden="true" style="margin-bottom: 3px">
                            <use xlink:href="#icon-pc-home-inCenter"></use>
                        </svg>
                        <span>账号</span>
                    </router-link>
                    <My v-show="my_frame" :landOut="landOut"></My>
                </li>
                <li style="margin-bottom: 5px">
                    <div @mouseenter="shop_frame = !shop_frame" @mouseleave="shop_frame = !shop_frame">
                        <router-link to="/my-shop" class="shopcar">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-pc-home-shoppingCar"></use>
                            </svg>
                            <span>购物车</span>
                            <small>{{totle_num}}</small>
                        </router-link>
                        <div v-show="shop_frame">
                            <ShopFollow :closedCarBox="closedCarBox"></ShopFollow>
                        </div>
                    </div>
                </li>
                <li @mouseenter="business_frame = !business_frame" @mouseleave="business_frame = !business_frame">
                    <router-link to="/business-follow">
                        <svg class="icon" aria-hidden="true"  @click="business_frame = !business_frame">
                            <use xlink:href="#icon-pc-home-fectoryCollection"></use>
                        </svg>
                    </router-link>
                    <div v-if="business_frame">
                        <BusinessFollow :closedBusinessBox="closedBusinessBox"></BusinessFollow>
                    </div>
                </li>
                <li @mouseenter="product_frame = !product_frame" @mouseleave="product_frame = !product_frame">
                    <router-link to="/product-follow">
                        <svg class="icon" aria-hidden="true"  @click="product_frame = !product_frame">
                            <use xlink:href="#icon-pc-home-productCollection"></use>
                        </svg>
                    </router-link>

                    <div v-if="product_frame">
                        <ProductFollow :closedProductBox="closedProductBox"></ProductFollow>
                    </div>
                </li>
            </ul>
        </div>
        <!--退出登陆弹框-->
        <el-dialog
                title="信息"
                :visible.sync="dialogVisible"
                width="30%"
               >
            <span>确定要退出登陆吗？</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="sureOut">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    import BusinessFollow from "./RightNavClxd/BusinessFollow"
    import ProductFollow from "./RightNavClxd/productFollow"
    import ShopFollow from "./RightNavClxd/ShopCar"
    import My from "./RightNavClxd/My"
    import { mapState,mapMutations} from 'vuex'
    import { supplierFactoryEntities } from '@/api/supplier'

    export default {
        name: "RightLayout",
        components:{
            BusinessFollow,
            ProductFollow,
            ShopFollow,
            My
        },
        data(){
          return {
              current:"",
              index:"",
              is_Frame:false,
              business_frame:false,
              product_frame:false,
              shop_frame:false,
              my_frame:false,
              dialogVisible: false,
              totle_num:0,
              data:{
                  shops:[],
              },
          }
        },
        computed:{
            ...mapState({
                cartList: state =>state.shop.CART_LIST
            }),
        },
        methods: {
            closedBusinessBox() {
                this.business_frame = !this.business_frame
            },
            closedProductBox() {
                this.product_frame = !this.product_frame
            },
            closedCarBox() {
                this.shop_frame = !this.shop_frame
            },
            landOut() {
                console.log("11")
                this.dialogVisible = true
            },
            sureOut(){
                console.log("确定退出")
                this.dialogVisible = false
            },
            async initData(){
                let ids = []
                let idMapQ = {}
                let cartData =  this.cartList
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
                    item.num = map[item.id]
                    this.totle_num+=item.num
                })
                return Object.values(shops)
            },
        },
        mounted(){
            this.initData()
        },
        }
</script>

<style lang="scss" scoped>
    .right-fixed {
        text-align: center;
        position: fixed;
        width: 30px;
        height: 100%;
        background: #333;
        right: 0px;
        top:0px;
        z-index: 9999;
        padding-top: 15%;
        li {
            list-style: none;
            cursor: pointer;
            padding: 10px 0;
            svg {
                width: 20px;
                height: 20px;
            }
            &:hover {
                background: #2da2ff;
            }
        }
        .my {
            font-size: 12px;
            color: #fff;
        }
        .shopcar {
            font-size: 14px;
            letter-spacing: 3px;
            line-height: 21px;
            color: #fff;
            small {
                background: #fff;
                width: 19px;
                height: 19px;
                display: inline-block;
                line-height: 20px;
                color: #2da2ff;
                font-size: 12px;
                letter-spacing: 0;
                border-radius: 19px;
                margin-top: 4px;
            }
        }
        .bgColors {
            background: #2da2ff;
        }
    }
    .openBox {
        position: fixed;
        height: 100%;
        width: 275px;
        top:0;
        right: 30px;
        z-index: 999;
    }
</style>