<template>
    <div v-bind:style="styleObject">
        <Header></Header>
        <el-carousel height="510px">
            <el-carousel-item v-for="(item,index) in items2" :key="index">
                <img :src="item.imgUrl">
            </el-carousel-item>
        </el-carousel>
        <div class="width-container" style="position: relative">
            <div class="company-box2">
                <div class="company-box2-top">
                    <img src="../../images/index/logo.png" width="90" height="90" v-if="CompanyInfo.logo == null">
                    <img :src="CompanyInfo.logo" width="90" height="90" v-else>
                    <p class="title">{{CompanyInfo.name}}</p>
                </div>
                <ul>
                    <li>生产地址：{{CompanyInfo.address || "北京"}}</li>
                    <li>已售数量：{{CompanyInfo.sale_num || 0}}</li>
                    <li>生产周期：{{'35天'}}</li>
                </ul>
                <div>
                    <el-popover
                            placement="left-start"
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
                            <span class="btn1" style="color: #333">活动 </span>
                        </el-button>
                    </el-popover>
                    <span @click="FollowFactory(CompanyInfo.supplier_id)" class="btn1" :class="`${follow_info=='已关注' ? 'active' : ''}`">{{follow_info}}</span>
                </div>
            </div>
        </div>
        <div v-if="items.length>0" v-loading="loading">
            <div class="width-container" style="padding-top: 20px">
                <GoodList style="border: 1px solid #f1f1f1" v-for="(item,index) in items" :data="item" :factory-id="factoryId"/>
            </div>
        </div>
        <Empty v-else/>
        <!--尾部开始-->
        <Footer></Footer>
        <RightLayout></RightLayout>
    </div>
</template>

<script>
    import Header from "@/components/common/Header/HeaderCompany"
    import Footer from "@/components/common/Footer"
    import RightLayout from "@/components/common/RightLayout"//右侧导航
    import GoodList from "@/components/modules/ProductCart.vue";
    import Empty from "@/components/Empty";
    import {mapState} from 'vuex'
    import {supplierEntities, supplierDetails} from "@/api/supplier"
    import {getFollowList, deleteFollow, SaveFollow} from "@/api/follow.js"
    import banner from "@/images/banner/banner1.png"

    export default {
        name: "FactoryShop",
        components: {
            Footer,
            Header,
            RightLayout,
            GoodList,
            Empty
        },
        data() {
            return {
                styleObject: {
                    minHeight: document.documentElement.clientHeight + 'px',
                    background: '#fff'
                },
                factoryId: null, //工厂ID
                items: [],
                loading: true,
                factoryId: 0,
                CompanyInfo: [],
                follow_status: 0,
                follow_info: '关注',
                totle_num: 0,
                items2: [
                    {
                        imgUrl: banner
                    },
                ]
            }
        },
        created() {
            this.factoryId = parseInt(this.$route.params.id);
            this.initData()
        },
        methods: {
            //初始化时获取基本数据
            async initData() {
                const {
                    data
                } = await supplierEntities(this.factoryId)
                this.items = data
                this.loading = false
                const {
                    dataCompany
                } = await supplierDetails(this.factoryId)
                this.CompanyInfo = dataCompany
                //店铺是否关注信息
                const follow = await getFollowList()
                this.follow_list = follow.data
                //computed follow_status
                this.follow_list.forEach((item, index) => {
                    if (this.factoryId == item.supplier_id) {
                        this.follow_status = 1
                        this.follow_info = "已关注"
                        return
                    }
                })
                FollowFactory(id)
                {
                    const params = {
                        supplier_id: this.factoryId,
                    }
                    if (this.follow_status == 1) {//followed

                        this.$alert('确定取消关注吗?', {
                            confirmButtonText: '确定',
                            callback: action => {
                                if (action === 'confirm') {
                                    deleteFollow(this.factoryId)
                                    this.follow_status = 0
                                    this.follow_info = '关注'
                                    this.$message({
                                        type: 'info',
                                        message: `取消成功`
                                    });
                                }
                            }
                        });
                    } else {
                        SaveFollow(params)
                        this.follow_info = '已关注'
                    }
                    this.follow_status = !this.follow_status
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn-factory {
        position: absolute;
        width: 75px;
        height: 34px;
        margin-left: 5px;
        background: #333;
    }

    .company-box2 {
        float: right;
        width: 280px;
        height: 410px;
        margin-top: -455px;
        z-index: 99;
        position: relative;
        background: #fff;

        &-top {
            background: url("../../images/bg1.jpg") no-repeat center;
            display: flex;
            font-size: 18px;
            color: #fff;
            padding: 24px;

            img {
                border-radius: 3px;
            }

            p {
                padding-left: 14px;
                padding-top: 10px;
                line-height: 1.8;
                font-weight: bold;
            }
        }

        ul {
            border-bottom: 1px dashed #e6e6e6;
            line-height: 2.5;
            font-size: 16px;
            padding: 20px 34px;
            margin-bottom: 20px;
        }

        .btn1 {
            width: 106px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            display: inline-block;
            background: #e6e6e6;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 3px;
            cursor: pointer;
        }

        .active {
            background: #ff3b30;
            color: #fff;
            border-color: #ff3b30;
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

    .shopcar {
        small {
            width: 20px;
            height: 20px;
            border-radius: 20px;
            background: #2da2ff;
            color: #fff;
            font-size: 10px;
            display: inline-block;
            text-align: center;
            line-height: 20px;
            transform: scale(.8);
            top: -6px;
            position: relative;
            left: -2px;
        }
    }

    .btn-factory {
        position: absolute;
    }
</style>