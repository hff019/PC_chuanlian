<template>
    <div>
        <HeaderTop/>
        <div style="background: #fff;">
            <div class="header-middle">
                <div>
                    <router-link to="/home"><img src="../../../images/logo.png"></router-link>
                </div>
                <div class="header-middle-form">
                    <form>
                        <input type="search" placeholder="请输入要搜索的关键字">
                        <button type="submit">搜索</button>
                    </form>
                </div>
                <div>
                    <router-link to="/my-shop">
                        <span class="shopcar">我的购物车<small>1</small></span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="company-box">
            <div class="width-container">
                <div class="company-info">
                    <img src="../../../images/index/logo.png" width="90" height="90" v-if="CompanyInfo.logo == null">
                    <img :src="CompanyInfo.logo" width="90" height="90" v-else>
                    <div class="right">
                        <h1 class="title">{{CompanyInfo.name}}<span  @click="FollowFactory(CompanyInfo.supplier_id)">{{follow_info}}</span></h1>
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
    </div>


</template>

<script>
    import HeaderTop from "./HeaderTop"
    import {mapState} from 'vuex'
    import {supplierDetails} from "@/api/supplier"
    import {getFollowList, deleteFollow, SaveFollow} from "@/api/follow.js"
    export default {
        name: "HeaderCompany",
        components: {
            HeaderTop
        },
        data(){
            return{
                factoryId:0,
                CompanyInfo:[],
                follow_status: 0,
                follow_info: '关注',
            }

        },
        created() {
            this.factoryId = parseInt(this.$route.params.id);
            this.initData()
        },
        methods:{
            async initData() {
                //获取商铺信息
                const {
                    data
                } = await supplierDetails(this.factoryId)
                this.CompanyInfo = data
                //店铺是否关注信息
                const follow = await getFollowList()
                this.follow_list = follow.data
                //computed follow_status
                this.follow_list.forEach((item, index) => {
                    console.log("收藏"+item.supplier_id)
                    console.log("本店id"+this.factoryId)
                    if (this.factoryId == item.supplier_id) {
                        this.follow_status = 1
                        this.follow_info = "已关注"
                        return
                    }
                })
            },
            FollowFactory(id) {
                const params = {
                    supplier_id: this.factoryId,
                }
                if (this.follow_status == 1) {//followed

                    this.$alert('确定取消关注吗?', {
                        confirmButtonText: '确定',
                        callback: action => {
                            if(action === 'confirm'){
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
</script>

<style lang="scss" scoped>
    .company-box {
        background: url("../../../images/index/small_top.png") no-repeat center;
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
</style>