<template>
    <div style="width: 100%;background: #fff;border-top:2px solid #2da2ff;padding: 20px 0 ">
        <div class="width-container">
            <el-row  :gutter="20">
                <el-col :span="11">
                    <div class="swiper-top">
                        <img src="../../images/index/img3.jpg">
                    </div>
                    <ul class="swiper-list">
                        <li><img src="../../images/index/img3.jpg"></li>
                        <li><img src="../../images/index/img3.jpg"></li>
                        <li><img src="../../images/index/img3.jpg"></li>
                        <li><img src="../../images/index/img3.jpg"></li>
                    </ul>
                </el-col>
                <el-col :span="13">
                    <h3 class="title">{{data.good_name}}</h3>
                    <div class="detail-box1">
                        <p class="left">￥<span>{{(data.tran*data.price).toFixed(2)}}</span>/{{data.big_unit}}</p>
                        <p class="right" @click="CollectionFn()">
                            <svg class="icon">
                                <use xlink:href="#icon-product-follow-0"></use>
                            </svg>
                            <span>{{follow_info}}产品</span>
                        </p>
                    </div>
                    <ul class="detail-list">
                        <li>产品参数: <span>{{data.spec}}</span></li>
                        <li>产品规格：<span>{{data.spec}} </span><span> {{data.tran}}{{data.unit}}/{{data.big_unit}}</span></li>
                        <li>生产厂商：<span>{{goods_company}}</span></li>
                        <li>有效期至：<span>{{goods_time}}</span></li>
                    </ul>
                    <div class="detail-box3">
                        <div class="gw_num" v-if="(!data.is_multi_spec && canShow)">
                            <em class="lose"  @click="removeToMiniCart()">-</em>
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
        <div class="foot-fade"></div>
    </div>

</template>

<script>
    import { mapState,mapMutations} from 'vuex'
    import { getCollectionList, deleteCollection, SaveCollection } from "@/api/follow.js"

    export default {
        name: "ProductDetail",
        data() {
            return {
                goods_specs:'',
                goods_company:'华夏制药',
                goods_time:'三年',
                goods_price:0.00,
                goods_BigPrice:0.00,
                goods_num:0,
                id:null,
                follow_status: 0,
                follow_info: '收藏',
                businessId:0,
                data:[],
                nums:0,
            }
        },
        created() {
            this.id = parseInt(this.$route.params.id);
            this.businessId = parseInt(this.$route.params.shopId);
            console.log(this.businessId+":"+this.id)
            this._initData();
        },
        computed:{
            ...mapState({
                //用户是否有权限看价格
                canShow:state => state.CURRENTUSER.shop_supplier,

                cartList: state =>state.shop.BUSINESS_CART_LIST
            }),
            shopCart() {
                return { ...this.cartList[this.businessId] }
            },
            cartNum(){
                let num = 0;
                Object.values(this.shopCart).forEach((data,index) =>{
                    num += data.num;
                })
                return num
            },
            totalPrice(){
                let total_price = 0.00;
                Object.values(this.shopCart).forEach((data,index) =>{
                    total_price += data.num * data.price;

                })
                return total_price.toFixed(2)
            }
        },
        methods: {
            ...mapMutations([
                'BUSINESS_ADD_CART','BUSINESS_REMOVE_CART',
            ]),
            async _initData() {
                let params = {
                    id:this.id,
                    supplierId:this.businessId
                }
                const {
                    data
                } = await this.$http.get(`hippo-shop/business/entities/detail`,{params})
                this.data = this._handleData(data)
            },
            canOption(){
                if(!this.canShow){
                    this.$Message.error('当前用户还未审核通过');
                    return false;
                }
                return true
            },
            _handleData(data) {
                Object.values(this.shopCart).forEach((cartItem,cartindex) =>{
                    if(this.id === cartItem.id){
                        this.nums = cartItem.num
                    }
                })
                return data
            },
            addToMiniCart(){
                const item = {
                    shopId:this.businessId,
                    itemId:this.id,
                    price:this.data.tran*this.data.price
                }
                if(this.canOption()){
                    this.BUSINESS_ADD_CART(item)
                    this.nums++
                }

            },
            removeToMiniCart(){
                const item = {
                    shopId:this.businessId,
                    itemId:this.id,
                    price:this.data.tran*this.data.price
                }
                if(this.canOption()){
                    this.BUSINESS_REMOVE_CART(item)
                    this.nums--

                }
            },
            CollectionFn(){
                const params = {
                    entity_id:this.id
                }
                console.log(params)
                if(this.follow_status){//followed
                    this.$messagebox.confirm("确定要取消收藏吗?").then(action => {
                        if(action === 'confirm'){
                            deleteCollection(this.id)
                            this.follow_info = '收藏'
                        }
                    });
                }else{
                    SaveCollection(params)
                    this.follow_info = '已收藏'
                }
                this.follow_status = !this.follow_status
            }
        }
    }
</script>

<style lang="scss" scoped>
    /*加减*/
    .gw_num {
        border:1px solid #f1f1f1;
        width: 170px;
        height: 44px;
        background: #fff;
        display: flex;
        align-items: center;
        text-align: center;
        float: left;
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
    .foot-fade {
        background: #fff;
        height: 50px;
        position: absolute;
        width: 100%;
    }
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
        margin-bottom: 40px;
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
            cursor: pointer;
            padding-top: 20px;
            span {
                margin-left: 5px;
                color: #2da2ff;
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