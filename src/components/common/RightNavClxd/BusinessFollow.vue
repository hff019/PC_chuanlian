<template>
    <div class="BusinessFollow">
        <div class="title">
            <span>厂家收藏</span>
            <span @click="closedBusinessBox()">关闭</span>
        </div>
        <div v-if="collectList.length>0">
            <div class="follow-list"  v-for="(item,index) in collectList">
                <router-link :to="`/factoty-shop/${item.supplier.id}`">
                    <img :src="item.supplier.logo" class="img">
                </router-link>
                <router-link :to="`/factoty-shop/${item.supplier.id}`">
                    <p class="title-p">{{item.supplier.name}}</p>
                </router-link>
                <span class="del" @click="deleteGoodsFn(item.supplier.id)">删除</span>
            </div>
        </div>
        <Empty v-else/>
        <p class="total">已收藏<span>4</span>个厂家</p>
    </div>
</template>

<script>
    import {getFollowList, deleteFollow} from "@/api/follow.js"
    import Empty from "@/components/Empty"
    export default {
        name: "BusinessFollow",
        props:["closedBusinessBox"],
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
                getFollowList()
                .then(({data = []}) => {
                    this.collectList = data
                })
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
    .BusinessFollow {
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
            height: 0px;
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
    .follow-list {
        height: 52px;
        padding: 10px;
        display: flex;
        align-items: center;
        .img {
            width: 52px;
            height: 52px;
            border: 1px solid #f1f1f1;
        }
        .title-p {
            width: 100px;
            color: #333;
            font-size: 12px;
            line-height: 20px;
            height: 40px;
            overflow: hidden;
            padding-left: 5px;
            padding-right: 5px;
            text-align: left;
        }
        .del {
            color: #2da2ff;
            width: 90px;
            text-align: right;
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