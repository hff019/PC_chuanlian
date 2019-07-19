<template>
    <div>
        <ul class="list-my">
            <li>
                <img src="../../images/default.png" width="50" height="50">
                <p>张无忌</p>
            </li>
            <li style="margin-top: 10px"><p class="line"></p></li>
            <li v-bind:class="{ active:1 == current}"  v-on:click="addClass(1)"><router-link to="/business-my-order">我的订单</router-link> </li>
            <li><router-link to="">产品收藏</router-link> </li>
            <li><router-link to="">我的活动券</router-link> </li>
            <li><router-link to="">发布订单</router-link> </li>
            <li><p class="line"></p></li>
            <li><router-link to="">地址管理</router-link> </li>
            <li><router-link to="">我的信息</router-link> </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BusinessLeft",
        data(){
            return{
                current:1
            }
        },
        methods:{
            addClass:function(index){
                this.current=index;
            }
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    .list-my {
        text-align: center;
        padding: 20px 10px;
        width: 109px;
        background: #fff;
        border-radius: 5px;
        font-size: 14px;
        list-style: none;
        li {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            list-style: none;
            img {
                border-radius: 100%;
                margin-bottom: 3px;
            }
            b {
                font-size: 14px;
                margin-bottom: 16px;
                display: block;
            }
            a {
                color: #333;
                font-size: 12px;
                margin-bottom: 14px;
                display: block;
                &:hover {
                    color: #2da2ff;
                }
            }
            .line {
                height: 1px;
                border-bottom: 1px dashed #f1f1f1;
                margin-bottom: 13px;
            }
        }
    }
    .active {
        a{
            color: #2da2ff !important;
        }
    }
    //媒体查询
    @media screen and (max-width:1180px) {
        .list {
            width: 90px;
            padding: 20px 5px;
        }
    }
</style>