<template>
    <div class="productFollow">
        <div class="title">
            <span>商品收藏</span>
            <span @click="closedProductBox()">关闭</span>
        </div>
        <div class="product-container">
            <div v-if="collectList.length>0">
                <div class="product-list" v-for="(enItem,enIndex) in collectList">
                    <router-link :to="`/factoty-shop/${enItem.id}`">
                        <img :src="enItem.entity.img_cover" class="img">
                        <p class="title-p">{{enItem.entity.good_name}}</p>
                        <p class="price">{{enItem.entity.price}}10元/{{enItem.entity.unit}}</p>
                    </router-link>
                </div>
            </div>
            <Empty v-else></Empty>
        </div>
        <p class="total">已收藏<span>{{collectList.length}}</span>个产品</p>
    </div>
</template>

<script>
    import {getCollectionList, deleteCollection} from "@/api/follow.js"
    import Empty from "@/components/Empty"

    export default {
        name: "productFollow",
        props:["closedProductBox"],
        components:{
          Empty
        },
        data() {
            return {
                collectList: [],
            }
        },
        created() {
            this.initData()
        },
        methods:{
            async initData() {
                getCollectionList()
                .then(({data = []}) => {
                    this.collectList = data
                })
            },
            deleteGoodsFn(id) {
                this.$alert('确定取消收藏了吗?', {
                    confirmButtonText: '确定',
                    callback: action => {
                        if (action === 'confirm') {
                            deleteCollection(id)
                            this.collectList.splice(1)
                            this.$message({
                                type: 'info',
                                message: `取消成功`
                            });
                        }
                    }
                });
            }
        }

    }
</script>

<style lang="scss" scoped>
    @-webkit-keyframes mymove{
        0%{
            width: 0;
        }
        100%{
            width: 275px;
        }
    }
    .productFollow {
        position: fixed;
        width: 275px;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        top: 0px;
        right: 30px;
        background: #fff;
        z-index: 99;
        border-left: 1px solid #f1f1f1;
        animation:mymove .35s ease-in-out alternate forwards;
        &::-webkit-scrollbar {
            width: 0px;
            background: #fff;
            height: 0px;
        }
    }
    .title {
        height: 35px;
        display: flex;
        justify-content: space-between;
        padding: 0 5px;
        line-height: 35px;
        font-size: 16px;
        margin-left: 15px;
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 10px;
    }
    .product-container {
        padding: 7px;
    }
    .product-list {
        display: inline-block;
        border:1px solid #f1f1f1;
        width: 115px;
        text-align: center;
        margin-right: 6px;
        height: 170px;
        &:nth-child(2n) {
            margin-right: 0px;
        }
        img {
            width: 115px;
            height: 115px;
        }
        .title-p {
            font-size: 13px;
            line-height: 20px;
            white-space: nowrap;
            overflow: hidden;
        }
        .price {
            color: #ff0036;
            font-size: 12px;
            margin-top: 5px;
        }
    }
    .total {
        position: absolute;
        bottom: 0px;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        font-size: 14px;
        border-top: 1px solid #f1f1f1;
        width: 100%;
        span {
            color: #ff0036;
        }
    }
</style>