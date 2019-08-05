<template>
    <div>
        <TopClxsd/>
        <div class="container">
            <div class="title">
                <span>厂家收藏</span>
            </div>
            <div v-if="collectList.length>0">
                <div class="follow-items" v-for="(item,index) in collectList">
                    <div class="follow-items-title">
                        <router-link :to="`/factoty-shop/${item.supplier.id}`">
                            <img :src="item.supplier.logo" class="logo">
                        </router-link>
                        <div>
                            <p>{{item.supplier.name}}</p>
                            <div>
                                <el-popover
                                        placement="bottom"
                                        width="340"
                                        trigger="hover"
                                >
                                    <div>
                                        <ul class="coupon-list">
                                            <li>
                                                <div class="coupon-title">代金券</div>
                                                <div class="coupon-detail">
                                                    <p>满1000减100</p>
                                                    <p>2019.03.19-2019.10.10</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="coupon-title">优惠券</div>
                                                <div class="coupon-detail">
                                                    <p>满1000减100</p>
                                                    <p>2019.03.19-2019.10.10</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <el-button slot="reference" style="border: 0px;width: 48px;padding: 0">
                                        <svg class="icons">
                                            <use xlink:href="#icon-shoppingCar-activity"></use>
                                        </svg>
                                    </el-button>
                                </el-popover>
                                <svg class="icon" @click="deleteGoodsFn(item.supplier.id)">
                                    <use xlink:href="#icon-myEnshrine-batch-delete-0"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <ul class="follow-items-list">
                        <li class="follow-item" v-for="(enItem,enIndex) in item.entities">
                            <router-link to="" class="follow-item-box">
                                <img src="../../images/index/img3.jpg" class="img">
                                <p class="p1">{{enItem.good_name}}</p>
                                <p class="p2">{{enItem.price}}元/{{enItem.unit}}</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <Empty v-else style="padding-top: 30px"/>
        </div>
    </div>
</template>

<script>
    import TopClxsd from "@/components/common/MyTop"
    import {getFollowList, deleteFollow} from "@/api/follow.js"
    import Empty from "@/components/Empty"

    export default {
        name: "BusinessFollow",
        components: {
            TopClxsd,
            Empty
        },
        data() {
            return {
                loading: true,
                currentPage: 1,
                pagesize: 20,
                collectList: [],
            }
        },
        created() {
            var params = {
                page: this.currentPage,
                type: 'follow',
                limit: this.pagesize
            }
            this.initData(params)
        },
        methods: {
            async initData(params) {
                getFollowList(params)
                .then(({data = []}) => {
                    this.loading = false
                    this.collectList = data
                })
            },
            current_change(currentPage) {  //改变当前页
                this.currentPage = currentPage
                var params = {
                    page: this.currentPage,
                    type: 'follow',
                    limit: this.pagesize
                }
                this.initData(params)
            },
            deleteGoodsFn(id) {
                this.$alert('确定取消收藏了吗?', {
                    confirmButtonText: '确定',
                    callback: action => {

                        if (action === 'confirm') {
                            deleteFollow(id)
                            this.collectList.splice(1)
                            this.$message({
                                type: 'info',
                                message: `取消成功`
                            });
                        } else {
                            this.$message({
                                type: 'info',
                                message: `action: ${action}`
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
        width: 225px;
        height: 300px;
        border: 1px solid #e6e6e6;
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
                display: flex
            }
        }

        &-box {
            text-align: center;

            img {
                width: 100%;
                height: 220px;
                position: relative;
            }

            .p1 {
                font-size: 14px;
                margin-top: 10px;
                color: #333;
            }

            .p2 {
                font-size: 12px;
                color: #ff3b30;
                margin-top: 20px;
            }
        }
    }

    .follow-items {
        border-bottom: 1px solid #e6e6e6;
        display: flex;

        .follow-items-list {
            width: 75%;
        }
    }

    .follow-items-title {
        width: 25%;
        font-size: 16px;
        align-items: center;
        margin-bottom: 10px;
        padding: 4px 0;

        .logo {
            width: 50px;
            height: 50px;
            border-radius: 100%;
            margin-right: 10px;
            float: left;
        }

        .icons {
            width: 68px;
            height: 25px;
            margin-top: 10px;
        }

        .icon {
            float: right;
            margin-right: 10px;
            margin-top: 14px;
        }
    }

    .coupon-list {
        padding-left: 10px;

        li {
            display: flex;
            padding: 8px 0;

            .coupon-title {
                width: 79px;
                height: 30px;
                border: 1px solid #e5e5e5;
                text-align: center;
                line-height: 30px;
            }

            .coupon-detail {
                padding-left: 10px;

                p {
                    width: 265px;

                    &:nth-child(1) {
                        font-size: 12px;
                        color: #666;
                    }

                    &:nth-child(2) {
                        font-size: 12px;
                        color: #999;
                    }
                }
            }
        }

    }

    el-button:focus, .el-button:hover {
        background: none;
    }
</style>