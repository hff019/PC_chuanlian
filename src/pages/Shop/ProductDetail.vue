<template>
    <div v-bind:style="styleObject">
        <Header></Header>
        <div class="company-box">
            <div class="width-container">
                <div class="company-info">
                    <img src="../../images/index/logo.png" width="90" height="90" v-if="CompanyInfo.logo == null">
                    <img :src="CompanyInfo.logo" width="90" height="90" v-else>
                    <div class="right">
                        <h1 class="title">{{CompanyInfo.name}}<span @click="FollowFactory(CompanyInfo.supplier_id)">{{top_follow_info}}</span></h1>
                        <div class="company-info-box">
                            <ul>
                                <li v-if="CompanyInfo.address!=null">{{CompanyInfo.address}}</li>
                                <li>调配时间35天</li>
                                <li>已售{{CompanyInfo.sale_num}}件</li>
                            </ul>
                            <div>
                                <el-popover
                                        placement="bottom-start"
                                        width="400"
                                        trigger="hover"
                                >
                                    <div>
                                        <ul class="coupon-list">
                                            <li>
                                                <div class="coupon-title">减</div>
                                                <div class="coupon-detail">
                                                    <p>满1000减100</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="coupon-title">减</div>
                                                <div class="coupon-detail">
                                                    <p>满1000减100</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <el-button slot="reference" style="border: 0px;background: none;color: #fff;padding-top: 5px">
                                        <span>优惠活动 </span>
                                        <svg class="icon" style="width: 13px">
                                            <use xlink:href="#icon-activity-down"></use>
                                        </svg>
                                    </el-button>
                                </el-popover>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="width-container" style="padding-top: 20px">
            <el-row :gutter="20">
                <el-col :span="11">
                    <div class="swiper-top">
                        <img :src="data.img_cover">
                    </div>
                    <ul class="swiper-list">
                        <li><img :src="data.img_cover" :data-src="data.img_cover"></li>
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
                        <div class="left" @click="CollectionFn()">
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
                            <em class="lose" @click="removeToMiniCart()" v-if="nums>0">-</em>
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
        <div class="width-container detail-box4">
            <div class="title">其他类似产品</div>
            <div class="swiper-container" style="height: 219px" ref="mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in hot_product" :key="index">
                        <router-link to="" class="swiper-box">
                            <img :src="item.img_cover">
                            <p>{{item.good_name}}</p>
                            <p>￥{{item.price}}</p>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="" class="swiper-box">
                            <img src="../../images/index/img3.jpg">
                            <p>维生素</p>
                            <p>￥258</p>
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="" class="swiper-box">
                            <img src="../../images/index/img3.jpg">
                            <p>维生素</p>
                            <p>￥258</p>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="left-btn" @click="prevSwiper()">
                <svg>
                    <use xlink:href="#icon-details-leftButton-0"></use>
                </svg>
            </div>
            <div class="right-btn" @click="nextSwiper()">
                <svg>
                    <use xlink:href="#icon-details-rightButton-0"></use>
                </svg>
            </div>
        </div>
        <div class="width-container detail-box4" style="margin-top: 20px">
            <div class="title" style="padding: 0px">
                <ul>
                    <li @click="is_active = 1" :class="{ active:is_active==1}">产品介绍</li>
                    <li @click="is_active = 2" :class="{ active:is_active==2}">说明书</li>
                </ul>
            </div>
            <div class="edit-box" v-if="is_active == 1">
                产品介绍
            </div>
            <div class="edit-box" v-if="is_active == 2">
                说明书
            </div>
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
    import {mapState, mapMutations} from 'vuex'
    import {getCollectionList, deleteCollection, SaveCollection} from "@/api/follow.js"
    import {getFollowList, deleteFollow, SaveFollow} from "@/api/follow.js"
    import {supplierDetails} from "@/api/supplier"
    import Swiper from 'swiper';


    export default {
        name: "ProductDetail",
        components: {
            Footer,
            Header,
            RightLayout,
        },
        data() {
            return {
                styleObject: {
                    minHeight: document.documentElement.clientHeight + 'px',
                    background: '#fff'
                },
                nums: null,
                factoryId: 0,
                id: this.$route.query.id,
                data: [],
                follow_status: 0,
                follow_info: '收藏',
                top_follow_status: 0,
                top_follow_info: '关注',
                CompanyInfo: [],
                is_active:1,
                hot_product:[
                    {
                        img_cover:require('../../images/index/img3.jpg'),
                        good_name:"维生素",
                        price:"5",
                    }
                ]
            }
        },
        created() {
            this.factoryId = parseInt(this.$route.params.shopId);
            this.id = parseInt(this.$route.params.id);
            this._initData();
        },
        mounted() {
           var mySwiper = new Swiper('.swiper-container', {
                loop: true,
                // 如果需要前进后退按钮
                slidesPerView: 5,
                slidesPerGroup: 1,
            })
        },
        computed: {
            ...mapState({
                //用户是否有权限看价格
                canShow: state => state.CURRENTUSER.shop_supplier,

                cartList: state => state.shop.CART_LIST
            }),
            shopCart() {
                return {...this.cartList[this.factoryId]}
            },
            cartNum() {
                let num = 0;
                Object.values(this.shopCart).forEach((data, index) => {
                    num += data.num;
                })
                return num
            },
            totalPrice() {
                let total_price = 0.00
                Object.values(this.shopCart).forEach((data, index) => {
                    total_price += data.num * data.sale_price;
                })
                return total_price.toFixed(2)
            }
        },

        methods: {
            ...mapMutations([
                'ADD_CART', 'REMOVE_CART',
            ]),
            handleChange(value) {
                console.log(value);
            },
            async _initData() {
                //店铺信息
                this.CompanyInfo = await supplierDetails(this.factoryId)
                this.CompanyInfo = this.CompanyInfo.data
                //店铺是否关注信息
                const top_follow = await getFollowList()
                this.top_follow_list = top_follow.data
                //computed follow_status
                this.top_follow_list.forEach((item, index) => {
                    if (this.factoryId == item.supplier_id) {
                        this.top_follow_status = 1
                        this.top_follow_info = "已关注"
                        return
                    }
                })
                //商品信息
                let params = {
                    id: this.id, supplierId: this.factoryId
                }
                let {
                    data
                } = await this.$http.get(`hippo-shop/factory/entities/detail`, {params})
                this.data = this._handleData(data)
                const collect = await getCollectionList()
                this.collect_list = collect.data
                //computed follow_status
                this.collect_list.forEach((item, index) => {
                    if (this.id == item.entity_id) {
                        this.follow_status = 1
                        this.follow_info = "已收藏"
                        return
                    }
                })
            },
            canOption() {
                if (!this.canShow) {
                    this.$message('当前用户还未审核通过');
                    return false;
                }
                return true
            },
            _handleData(data) {
                Object.values(this.shopCart).forEach((cartItem, cartindex) => {
                    console.log(cartItem)
                    if (this.id === cartItem.id) {
                        this.nums = cartItem.num
                    }
                })
                return data
            },
            addToMiniCart() {
                const item = {
                    shopId: this.factoryId,
                    itemId: this.id,
                    sale_price: this.data.tran * this.data.price
                }
                if (this.canOption()) {
                    this.ADD_CART(item)
                    this.nums++
                }

            },
            removeToMiniCart() {
                const item = {
                    shopId: this.factoryId,
                    itemId: this.id,
                    sale_price: this.data.tran * this.data.price
                }
                if (this.canOption()) {
                    this.REMOVE_CART(item)
                    this.nums--

                }
            },
            FollowFactory(id) {
                const params = {
                    supplier_id: this.factoryId,
                }
                if (this.top_follow_status == 1) {//followed

                    this.$alert('确定取消关注吗?', {
                        confirmButtonText: '确定',
                        callback: action => {
                            if (action === 'confirm') {
                                deleteFollow(this.factoryId)
                                this.top_follow_status = 0
                                this.top_follow_info = '关注'
                                this.$message({
                                    type: 'info',
                                    message: `取消成功`
                                });
                            }
                        }
                    });
                } else {
                    SaveFollow(params)
                    this.top_follow_info = '已关注'
                }
                this.top_follow_status = !this.top_follow_status
            },
            CollectionFn() {
                const params = {
                    entity_id: this.id
                }
                console.log(params)
                if (this.follow_status) {//followed
                    this.$alert('确定取消收藏吗?', {
                        confirmButtonText: '确定',
                        callback: action => {
                            if (action === 'confirm') {
                                deleteCollection(this.id)
                                this.follow_info = '收藏'
                                this.$message({
                                    type: 'info',
                                    message: `取消成功`
                                });
                            }
                        }
                    });
                } else {
                    SaveCollection(params)
                    this.follow_info = '已收藏'
                }
                this.follow_status = !this.follow_status
            },

            //下一页上一页
            nextSwiper() {
                new Swiper('.swiper-container', {
                    loop: true,
                    // 如果需要前进后退按钮
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                }).slideNext();
            },
            prevSwiper(){
                new Swiper('.swiper-container', {
                    loop: true,
                    // 如果需要前进后退按钮
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                }).slidePrev();
            }
        },

    }
</script>

<style lang="scss" scoped>
    @import '../../styles/swiper.min.css';
    .edit-box {
        padding: 10px 20px;
        img {
            max-width: 100%;
        }
    }
    .right-btn , .left-btn {
        position: absolute;
        right: 20px;
        z-index: 999;
        margin-top: -120px;
        cursor: pointer;
        svg {
            width: 13px;
            height: 18px;

        }
    }
    .left-btn {
        left: 20px;
    }
    .detail-box4 {
        border: 1px solid #e6e6e6;
        margin-top: 100px;

        .title {
            height: 34px;
            line-height: 34px;
            font-size: 12px;
            padding-left: 10px;
            background: #f6f6f6;
            ul {
                li {
                    display: inline-block;
                    width: 100px;
                    text-align: center;
                    cursor: pointer;
                }
                .active {
                    background: #fff;
                    border-top: 2px solid #2da2ff;
                }
            }
        }
    }

    .swiper-box {
        width: 155px;
        display: block;
        margin: 0 auto;

        &:hover {
            box-shadow: 0px 0px 10px #ccc;
        }

        img {
            width: 140px;
            height: 140px;
            display: block;
            margin: 0 auto;
        }

        p {
            padding-left: 10%;
            margin-top: 10px;
            font-size: 14px;
            color: #333;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;

            &:nth-child(3) {
                color: #ff3b30;
                font-size: 14px;
                line-height: 2;
                margin-top: 0px;
            }
        }
    }

    .company-box {
        background: url("../../images/index/small_top.png") no-repeat center;
        width: 100%;
        height: 150px;

        .company-info {
            padding-top: 25px;
            display: flex;
            color: #fff;

            img {
                border-radius: 4px;
            }

            .right {
                padding-left: 15px;

                .title {
                    padding-top: 6px;
                    font-size: 24px;

                    span {
                        font-size: 12px;
                        background: #ff3b30;
                        padding: 4px 8px;
                        border-radius: 3px;
                        margin-left: 8px;
                        font-weight: 100;
                        cursor: pointer;
                    }
                }

                .company-info-box {
                    margin-top: 20px;
                    display: flex;

                    ul {
                        li {
                            display: inline-block;
                            border: 1px solid #fff;
                            border-radius: 3px;
                            padding: 4px 8px;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }

    .coupon-list {
        li {
            display: flex;
            padding: 8px 0;

            .coupon-title {
                width: 20px;
                height: 20px;
                background: #ff3b30;
                color: #fff;
                text-align: center;
                line-height: 20px;
            }

            .coupon-detail {
                padding-left: 10px;

                p {
                    &:nth-child(1) {
                        font-size: 12px;
                        color: #666;
                    }
                }
            }
        }

    }


    .swiper-top {
        border: 1px solid #f1f1f1;

        img {
            width: 100%;
            max-height: 500px;
        }
    }

    .swiper-list {
        padding-top: 20px;

        li {
            display: inline-block;
            border: 1px solid #f1f1f1;
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

        .left {
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
        border: 1px solid #f1f1f1;
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

    @media screen and (max-width: 1180px) {
        .detail-list {
            margin-bottom: 30px;
            padding: 15px;

            li {
                line-height: 40px;
            }
        }
    }
</style>