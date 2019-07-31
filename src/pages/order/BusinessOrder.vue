<template>
    <div>
        <div class="container">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部订单" name="1">
                    <div v-if="orders.length>0">
                        <div class="title">
                            <span>产品清单</span>
                            <span>单价</span>
                            <span>数量</span>
                            <span>小计</span>
                        </div>
                        <div>
                            <OrderClxld :key='index' :data="order" v-for="(order,index) in orders" :sureOrder="sureOrder" :delectOrder="delectOrder"/>
                        </div>
                        <!--分页-->
                        <div style="text-align: center;padding: 30px 0">
                            <el-pagination
                                    layout="prev, pager, next"
                                    :page-size="pagesize"
                                    @current-change="current_change"
                                    :current-page.sync="currentPage"
                                    :pager-count="5"
                                    :total="20">
                            </el-pagination>
                        </div>
                    </div>
                    <Empty :message="'没有任何订单的数据！快去购物吧'" v-else class="empty"/>
                </el-tab-pane>
                <el-tab-pane label="待付款" name="2">
                    <div v-if="unPayOrders.length>0">
                        <div class="title">
                            <span>产品清单</span>
                            <span>单价</span>
                            <span>数量</span>
                            <span>小计</span>
                        </div>
                        <div>
                            <OrderClxld :key='index' :data="order" v-for="(order,index) in unPayOrders"/>
                        </div>
                        <!--分页-->
                        <div style="text-align: center;padding: 30px 0">
                            <el-pagination
                                    layout="prev, pager, next"
                                    :page-size="pagesize"
                                    @current-change="current_change_unPay"
                                    :current-page.sync="unPay_page"
                                    :pager-count="5"
                                    :total="20">
                            </el-pagination>
                        </div>
                    </div>
                    <Empty :message="'没有待收货的数据！'" v-else class="empty"/>
                </el-tab-pane>
                <el-tab-pane label="待收货" name="3">
                    <div v-if="unSendOrders.length>0">
                        <div class="title">
                            <span>产品清单</span>
                            <span>单价</span>
                            <span>数量</span>
                            <span>小计</span>
                        </div>
                        <div>
                            <OrderClxld :key='index' :data="order" v-for="(order,index) in unSendOrders" :sureOrder="sureOrder"/>
                        </div>
                        <!--分页-->
                        <div style="text-align: center;padding: 30px 0">
                            <el-pagination
                                    layout="prev, pager, next"
                                    :page-size="pagesize"
                                    @current-change="current_change_unSend"
                                    :current-page.sync="unSend_page"
                                    :pager-count="5"
                                    :total="20">
                            </el-pagination>
                        </div>
                    </div>
                    <Empty :message="'没有待收货的数据！'" v-else class="empty"/>
                </el-tab-pane>
                <el-tab-pane label="已收货" name="4">
                    <div v-if="recOrders.length>0">
                        <div class="title">
                            <span>产品清单</span>
                            <span>单价</span>
                            <span>数量</span>
                            <span>小计</span>
                        </div>
                        <div>
                            <OrderClxld :key='index' :data="order" v-for="(order,index) in recOrders" :delectOrder="delectOrder"/>
                        </div>
                        <!--分页-->
                        <div style="text-align: center;padding: 30px 0">
                            <el-pagination
                                    layout="prev, pager, next"
                                    :page-size="pagesize"
                                    @current-change="current_change"
                                    :current-page.sync="rec_page"
                                    :pager-count="5"
                                    :total="20">
                            </el-pagination>
                        </div>
                    </div>
                    <Empty :message="'没有已收货订单！'" v-else class="empty"/>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import OrderClxld from "@/components/modules/MyOrderCard"
    import {mapState} from "vuex";
    import {getBusinessOrderList, deleteBusinessOrder, sureBusinessOrder} from "@/api/businessOrder.js"
    import Empty from "@/components/Empty"

    export default {
        name: "BusinessMyOrder",
        components: {
            OrderClxld,
            Empty
        },
        data() {
            return {
                orders: [],//全部订单
                unPayOrders: [],//未付款
                unSendOrders: [],//未发货
                recOrders: [],//已收货
                currentPage: 1,
                pagesize: 10,
                activeName: '2',
                unPay_page: 1, //未付款订单默认页
                unSend_page: 1, //未发货订单默认页
                rec_page: 1, //已收货默认页
            }
        },
        methods: {
            _handleData(data) {
                data.forEach(order => {
                    let num = 0
                    order.total_num = 0
                    order.items.forEach(item => {
                        num = item.num
                        order.total_num = num + order.total_num
                    })
                })
                return data
            },
            sureOrder() {
                this.$alert('确定收到货物了吗?', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${action}`
                        });
                    }
                });
            },
            delectOrder() {
                this.$alert('确定删除这订单吗？', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${action}`
                        });
                    }
                });
            },
            handleClick() {
                if (this.activeName === '1') {
                    var params = {
                        page: this.currentPage,
                        type: 'orders',
                        limit: this.pagesize
                    }
                    this.initData(params)
                } else if (this.activeName === '2') {
                    var params = {
                        page: this.unPay_page,
                        type: 'orders-list-unPay',
                        limit: this.pagesize,
                        payStatus: 0
                    }
                    this.initDataUnPay(params)
                } else if (this.activeName === '3') {
                    var params = {
                        page: this.unSend_page,
                        type: 'orders-list-unSend',
                        limit: this.pagesize,
                        shipStatus: 1
                    }
                    this.initDataUnSend(params)
                } else if (this.activeName === '4') {
                    var params = {
                        page: this.recOrders,
                        type: 'orders-list-rec',
                        limit: this.pagesize,
                        shipStatus: 2
                    }
                    this.initDataRec(params)
                }
            },

            //全部订单
            current_change(currentPage) {  //改变当前页
                this.currentPage = currentPage
                var params = {
                    page: this.currentPage,
                    type: 'factory',
                    limit: this.pagesize
                }
                this.initData(params)
            },
            async initData(params) {
                getBusinessOrderList(params)
                .then(({data = []}) => {
                    this.orders = data
                    this._handleData(this.orders)
                })
            },
            //未付款订单
            current_change_unPay(unPay_page) {  //改变当前页
                this.unPay_page = unPay_page
                var params = {
                    page: this.unPay_page,
                    type: 'orders-list-unPay',
                    limit: this.pagesize,
                    payStatus: 0
                }
                this.initDataUnPay(params)
            },
            async initDataUnPay(params) {
                getBusinessOrderList(params)
                .then(({data = []}) => {
                    this.unPayOrders = data
                    this._handleData(this.unPayOrders)
                })
            },
            //待收货订单
            current_change_unSend(unSend_page) {  //改变当前页
                this.unSend_page = unSend_page
                var params = {
                    page: this.unSend_page,
                    type: 'orders-list-unSend',
                    limit: this.pagesize,
                    shipStatus: 1
                }
                this.initDataUnSend(params)
            },
            async initDataUnSend(params) {
                getBusinessOrderList(params)
                .then(({data = []}) => {
                    this.unSendOrders = data
                    this._handleData(this.unSendOrders)
                })
            },
            //已收货订单
            current_change_rec(rec_page) {  //改变当前页
                this.rec_page = rec_page
                var params = {
                    page: this.rec_page,
                    type: 'orders-list-rec',
                    limit: this.pagesize,
                    shipStatus: 2
                }
                this.initDataRec(params)
            },
            async initDataRec(params) {
                getBusinessOrderList(params)
                .then(({data = []}) => {
                    this.recOrders = data
                    this._handleData(this.recOrders)
                })
            },
        },
        created() {
            var params = {
                page: this.currentPage,
                type: 'factory',
                limit: this.pagesize
            }
            this.initData(params)
            this.handleClick()
            console.log(this.activeName);
        },
    }
</script>

<style lang="scss" scoped>
    .container {
        background: #fff;
        padding: 20px;
    }

    .title {
        height: 32px;
        line-height: 32px;
        background: #f5f5f5;
        padding: 0 20px;
        font-size: 12px;
        border: 1px solid #e6e6e6;
        margin-top: 20px;

        span {
            display: inline-block;
            width: 20%;
            text-align: center;
            font-weight: bold;

            &:nth-child(1) {
                width: 40%;
                text-align: left;
            }
        }
    }

    .empty {
        padding-top: 50px;
    }

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

    .items-body {
        .items-title {
            height: 32px;
            line-height: 32px;
            background: #f5f5f5;
            padding: 0 20px;
            font-size: 12px;
            border: 1px solid #e6e6e6;
            margin-top: 20px;

            span {
                &:nth-child(1) {
                    color: #ff3b30;
                    font-weight: bold;
                }

                &:nth-child(2) {
                    color: #666;
                    padding-left: 20px;
                }

                &:nth-child(3) {
                    float: right;
                    color: #666;
                }
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

    .items-foot {
        height: 55px;
        line-height: 55px;
        padding: 0 15px;
        background: #f5f5f5;
        border: 1px solid #e6e6e6;
        border-top: 0px;

        &-p {
            font-size: 14px;

            span {
                color: #ff3b30;
                font-weight: bold;
            }
        }

        .btn {
            width: 100%;
            height: 100%;
        }
    }

    .group-btn {
        float: right;
        margin-top: 8px;
    }

    .page {
        margin: 20px auto;
        text-align: center;
    }
</style>