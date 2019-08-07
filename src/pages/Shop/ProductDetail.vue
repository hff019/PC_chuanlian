<template>
    <div  v-bind:style="styleObject">
        <Header></Header>
        <div class="width-container" style="padding-top: 20px">
            <el-row  :gutter="20">
                <el-col :span="11">
                    <div class="swiper-top">
                        <img :src="data.img_cover">
                    </div>
                    <ul class="swiper-list">
                        <li><img :src="data.img_cover" :data-src="data.img_cover"></li>
                        <li><img src="../../images/index/img3.jpg"></li>
                        <li><img src="../../images/index/img3.jpg"></li>
                        <li><img src="../../images/index/img3.jpg"></li>
                    </ul>
                </el-col>
                <el-col :span="13">
                    <h3 class="title">{{data.good_name}}</h3>
                    <div class="detail-box1">
                        <p class="left">￥<span>{{data.price*data.tran}}</span>/{{data.big_unit}}</p>
                        <p class="right">采购价:￥<span>{{data.price}}</span>/{{data.unit}} &nbsp;&nbsp;
                            零售价:￥<span>{{data.market_price}}</span>/{{data.unit}}</p>
                    </div>
                    <div class="detail-box2">
                        <div class="left"  @click="CollectionFn()">
                            <svg class="icon">
                                <use xlink:href="#icon-product-follow-0"></use>
                            </svg>
                            <span>{{follow_info}}产品</span>
                        </div>
                        <div class="right">
                            <span>毛利润：<small style="color: #ff3b30">3%</small></span>
                            <span>销售量：<small style="color: #ff3b30">{{data.sale_num}}</small></span>
                        </div>
                    </div>
                    <ul class="detail-list">
                        <li>产品参数：</li>
                        <li>产品规格：<span>{{data.spec}} </span> <span> {{data.tran}}{{data.unit}}/{{data.big_unit}}</span></li>
                        <li>生产厂商：<span>华夏药业</span></li>
                        <li>有效期至：<span>2022.12.25</span></li>
                    </ul>
                    <div class="detail-box3" v-if="canShow">
                        <div class="gw_num" style="float: left">
                            <em class="lose"  @click="removeToMiniCart()" v-if="nums>0">-</em>
                            <em class="lose" style="color: #ccc" v-else>-</em>
                            <div class="num">
                                <span class="amount">{{nums||0}}</span>
                            </div>
                            <em class="add" @click="addToMiniCart()">+</em>
                        </div>
                        <el-button type="primary" style="float: left;height: 45px">加入购物车</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!--尾部开始-->
        <Footer></Footer>
        <RightLayout></RightLayout>
    </div>
</template>

<script>
    import Header from "@/components/common/Header/HeaderCompany"
    import Footer from "@/components/common/Footer"
    import RightLayout from "@/components/common/RightLayout"//右侧导航
    import { mapState,mapMutations} from 'vuex'
    import { getCollectionList, deleteCollection, SaveCollection } from "@/api/follow.js"

    export default {
        name: "ProductDetail",
        components:{
            Footer,
            Header,
            RightLayout,
        },
        data(){
            return {
                styleObject: {
                    minHeight: document.documentElement.clientHeight+'px',
                    background: '#fff'
                },
                nums:null,
                factoryId:0,
                id: this.$route.query.id,
                data:[],
                follow_status: 0,
                follow_info: '收藏',
            }
        },
        created(){
            this.factoryId = parseInt(this.$route.params.shopId);
            this.id = parseInt(this.$route.params.id);
            this._initData();
        },
        computed:{
            ...mapState({
                //用户是否有权限看价格
                canShow:state => state.CURRENTUSER.shop_supplier,

                cartList: state =>state.shop.CART_LIST
            }),
            shopCart() {
                return { ...this.cartList[this.factoryId] }
            },
            cartNum(){
                let num = 0;
                Object.values(this.shopCart).forEach((data,index) =>{
                    num += data.num;
                })
                return num
            },
            totalPrice(){
                let total_price = 0.00
                Object.values(this.shopCart).forEach((data,index) =>{
                    total_price += data.num * data.sale_price;
                })
                return total_price.toFixed(2)
            }
        },

        methods:{
            ...mapMutations([
                'ADD_CART','REMOVE_CART',
            ]),
            handleChange(value) {
                console.log(value);
            },
            async _initData() {
                let params = {
                    id:this.id,supplierId:this.factoryId
                }
                const {
                    data
                } = await this.$http.get(`hippo-shop/factory/entities/detail`,{params})
                this.data = this._handleData(data)
                const collect = await getCollectionList()
                this.collect_list = collect.data
                //computed follow_status
                this.collect_list.forEach((item,index)=>{
                    if(this.id == item.entity_id) {
                        this.follow_status = 1
                        this.follow_info = "已收藏"
                        return
                    }
                })
            },
            canOption(){
                if(!this.canShow){
                    this.$message('当前用户还未审核通过');
                    return false;
                }
                return true
            },
            _handleData(data) {
                Object.values(this.shopCart).forEach((cartItem,cartindex) =>{
                    console.log(cartItem)
                    if(this.id === cartItem.id){
                        this.nums = cartItem.num
                    }
                })
                return data
            },
            addToMiniCart(){
                const item = {
                    shopId:this.factoryId,
                    itemId:this.id,
                    sale_price:this.data.tran*this.data.price
                }
                if(this.canOption()){
                    this.ADD_CART(item)
                    this.nums++
                }

            },
            removeToMiniCart(){
                const item = {
                    shopId:this.factoryId,
                    itemId:this.id,
                    sale_price:this.data.tran*this.data.price
                }
                if(this.canOption()){
                    this.REMOVE_CART(item)
                    this.nums--

                }
            },
            CollectionFn(){
                const params = {
                    entity_id:this.id
                }
                console.log(params)
                if(this.follow_status){//followed
                    this.$alert('确定取消收藏吗?', {
                        confirmButtonText: '确定',
                        callback: action => {
                            if(action === 'confirm'){
                                deleteCollection(this.id)
                                this.follow_info = '收藏'
                                this.$message({
                                    type: 'info',
                                    message: `取消成功`
                                });
                            }
                        }
                    });
                }else{
                    SaveCollection(params)
                    this.follow_info = '已收藏'
                }
                this.follow_status = !this.follow_status
            }
        },

    }
</script>

<style lang="scss" scoped>
    .swiper-top {
        border: 1px solid #f1f1f1;
        img {
            width: 100%;
            max-height: 500px;
        }
    }
    .swiper-list {
        text-align: center;
        padding-top: 20px;
        li {
            display: inline-block;
            border:1px solid #f1f1f1;
            padding: 2px;
            margin-right: 6px;

            img {
                width: 60px;
                height: 60px;
            }
        }
    }
    .title {
        font-size: 16px;
        line-height: 23px;
        padding-top: 10px;
        margin-bottom: 15px;
    }
    .detail-box1 {
        background: #fafafa;
        padding: 20px;
        height: 50px;
        .left  {
            font-size: 20px;
            color: #ff3b30;
            float: left;
            span {
                font-size: 48px;
            }
        }
        .right {
            float: right;
            font-size: 12px;
            color: #999;
            margin-top: 30px;
            span {
                font-size: 14px;
                color: #333;
                padding: 0 2px;
            }
        }
    }
    .detail-box2 {
        padding: 30px 0;
        display: flex;
        justify-content: space-between;
        .left {
            cursor: pointer;
            padding-top: 10px;
            span {
                margin-left: 5px;
                color: #2da2ff;
            }
        }
        .right {
            border: 1px solid #f1f1f1;
            border-left: 0px;
            border-right: 0px;
            padding: 10px 0;
            width: 380px;
            text-align: center;
            span {
                display: inline-block;
                width: 48%;
                text-align: center;
                border-right: 1px solid #f1f1f1;
                &:nth-child(2) {
                    border: 0px;
                }
            }
        }
    }
    .detail-list {
        background: #fafafa;
        padding: 20px;
        font-size: 16px;
        margin-bottom: 50px;
        li {
            line-height: 50px;
            span {
                color: #999999;
            }
        }
    }
    .detail-box3 {
        .el-button {
            margin-left: 20px;
        }
    }
    /*加减*/
    .gw_num {
        border:1px solid #f1f1f1;
        width: 170px;
        height: 44px;
        background: #fff;
        display: flex;
        align-items: center;
        text-align: center;
    }

    .gw_num em {
        color: #333;
        font-weight: bold;
        cursor: pointer;
        font-size: 32px;
        flex: 1;
        line-height: 44px;
        font-weight: 100;
        font-style: normal;
        background: #ededed;
    }

    .shop_num em {
        color: rgb(45, 162, 255);
    }

    .gw_num .num {
        font-style: normal;
        font-size: 24px;
        flex: 1;
        display: flex;
        color: #333;
        text-align: center;
        width: 56px;
        display: inline-block;
    }

    .gw_num .num p {
        font-size: 12px;
        color: rgb(153, 153, 153);
    }

    .gw_num .num input {
        width: 50%;
        text-align: center;
    }
    @media screen and (max-width:1180px) {
        .detail-list {
            margin-bottom: 30px;
            padding: 15px;
            li{
                line-height: 40px;
            }
        }
    }
</style>