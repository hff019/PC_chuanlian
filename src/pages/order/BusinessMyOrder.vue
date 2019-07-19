<template>
    <div >
        <div class="container">
            <el-tabs >
                <el-tab-pane label="全部订单">
                    <div>
                        <OrderClxld  :key='index' :data="order" v-for="(order,index) in orders" :sureOrder="sureOrder" :delectOrder="delectOrder"/>
                        <!--分页-->
                        <el-pagination
                                background
                                layout="prev, pager, next"
                                :total="100" class="page">
                        </el-pagination>
                    </div>

                </el-tab-pane>
                <el-tab-pane label="待付款">待付款</el-tab-pane>
                <el-tab-pane label="待收货">待收货</el-tab-pane>
                <el-tab-pane label="已收货">已收货</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import OrderClxld from "@/components/modules/MyOrderCard"
    export default {
        name: "BusinessMyOrder",
        components:{
            OrderClxld
        },
        data(){
            return{
                orders:[
                    {
                        logo:'',
                        supplier_name:"华夏药业",
                        order_status_display:"2019.04.23 13:45:20",
                        entities:[
                            {
                                name:"维生素",
                                sale_price:"12",
                                total_price:"12",
                                total_num:2,
                                cover:''
                            }
                        ],
                        id:1,
                        total_num:10,
                        total_price:"23.98",
                        order_time:"2019.03.24 12:12:23",
                        order_sn:"23458567463563",
                        pay_status:1,
                        shipping_status:1,
                        buyer_info:{
                            name:"张无忌",
                            tel:"17739383726",
                            address:"河南省郑州市金水区经三路"
                        }
                    },
                ]
            }
        },
        methods:{
            sureOrder(){
                this.$alert('确定收到货物了吗?', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            },
            delectOrder(){
                this.$alert('确定删除这订单吗？', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        background: #fff;
        padding: 20px;
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
            border:1px solid #e6e6e6;
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