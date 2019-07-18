<template>
    <div>
        <div class="items">
            <div class="items-body">
                <div class="items-title">
                    <span v-if="data.pay_status == 0">待付款</span>
                    <span v-if="data.pay_status == 1">已经付款</span>
                    <span v-if="data.pay_status == 2">已经收货</span>
                    <span>订单编号：{{data.order_sn}}</span>
                    <span>{{data.order_time}}</span>
                </div>
                <p class="order-company-name">{{data.supplier_name}}</p>
                <div class="order-list">
                    <li class="order-list-li" v-for="(entity,skey) in data.entities">
                        <div class="td1">
                            <router-link to="" class="td1-a">
                                <img  :src="entity.cover" :alt="entity.name">
                                <p>{{entity.name}}</p>
                            </router-link>
                        </div>
                        <div class="td2">
                            <p>{{entity.sale_price}}</p>
                        </div>
                        <div class="td3">
                            <p>{{entity.total_num}}</p>
                        </div>
                        <div class="td4">
                            <p class="red-color"><b>{{entity.total_price}}</b></p>
                        </div>
                    </li>
                </div>
                <div class="order-foot">
                    <div class="td1">
                        <span>没有使用优惠券</span>
                    </div>
                    <div class="td2">
                        <p>{{data.total_num}}</p>
                    </div>
                    <div class="td2">
                        <p>券后小计：<b>￥{{data.total_price}}</b></p>
                    </div>
                </div>
            </div>
            <div class="items-foot">
                <el-row v-if="data.pay_status == 0">
                    <el-col :lg="2" :md="3">
                        <el-popover
                                placement="right-start"
                                :title="data.buyer_info.name+' '+data.buyer_info.tel"
                                width="200"
                                trigger="hover"
                                :content="data.buyer_info.address">
                            <el-button slot="reference" style="border: 0px;background: #f1f1f1">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-myOrder-receiver"></use>
                                </svg>
                                <span> {{data.buyer_info.name}}</span>
                            </el-button>
                        </el-popover>
                    </el-col>
                    <el-col :lg="12" :md="8"><router-link to="" style="padding-left: 10px">查看详情</router-link> </el-col>
                    <el-col :lg="3" :md="4"><p class="items-foot-p">已选<span>6</span>件产品</p> </el-col>
                    <el-col :lg="4" :md="5"><p class="items-foot-p">小计<span>90.00</span>件产品</p> </el-col>
                    <el-col :lg="3" :md="4"><el-button type="primary" class="btn">去付款</el-button></el-col>
                </el-row>
                <el-row v-if="data.pay_status == 1">
                    <el-col :lg="2" :md="3">
                        <el-popover
                                placement="right-start"
                                :title="data.buyer_info.name+' '+data.buyer_info.tel"
                                width="200"
                                trigger="hover"
                                :content="data.buyer_info.address">
                            <el-button slot="reference" style="border: 0px;background: #f1f1f1">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-myOrder-receiver"></use>
                                </svg>
                                <span> {{data.buyer_info.name}}</span>
                            </el-button>
                        </el-popover>
                    </el-col>
                    <el-col :lg="16" :md="8"><router-link to="" style="padding-left: 10px">查看详情</router-link> </el-col>
                    <el-col :lg="6" :md="4">
                        <el-button-group  class="group-btn">
                            <el-button type="primary" v-if="data.shipping_status != 2" @click="sureOrder(data.id)">确定收货</el-button>
                            <el-button type="primary" v-else @click="delectOrder(data.id)">确定收货</el-button>
                            <el-button type="primary">再来一单</el-button>
                        </el-button-group>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: "MyOrderCard",
        props:[ "sureOrder", "data", "delectOrder"]

    }
</script>

<style lang="scss" scoped>

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
    .order-list-li {
        position: relative;
        list-style: none;
        height: 82px;
        border: 1px solid #e6e6e6;
        border-bottom: 0px;
        font-size: 12px;
        padding: 10px 15px;

        &:hover {
            background: #f2f9ff;
        }

        .red-color {
            color: #ff3b30;
        }

        .td1 {
            width: 40%;
            text-align: left;
            display: flex;

            svg {
                cursor: pointer;
                margin-right: 14px;
            }

            .td1-a {
                display: flex;
                height: 82px;

                img {
                    width: 82px;
                    height: 82px;
                    border: 1px solid #f1f1f1;
                }

                p {
                    width: 160px;
                    height: 36px;
                    line-height: 18px;
                    font-size: 12px;
                    overflow: hidden;
                    color: #333;
                    margin-left: 5px;
                }
            }

        }

        > div {
            width: 20%;
            float: left;
            text-align: center;
            font-weight: bold;
        }
    }
</style>