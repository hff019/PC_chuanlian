<template>
    <div class="BusinessFollow">
        <div class="title">
            <span>厂家收藏</span>
            <span @click="closedBusinessBox()">关闭</span>
        </div>
        <div class="follow-list">
            <router-link to="">
                <img src="../../../images/index/img3.jpg" class="img">
            </router-link>
            <router-link to="">
                <p class="title-p">哈尔滨制药有限公司</p>
            </router-link>
            <span class="del">删除</span>
        </div>
        <div class="follow-list">
            <router-link to="">
                <img src="../../../images/index/img3.jpg" class="img">
            </router-link>
            <router-link to="">
                <p class="title-p">哈尔滨制药有限公司</p>
            </router-link>
            <span class="del" >删除</span>
        </div>
        <p class="total">已收藏<span>4</span>个厂家</p>
    </div>
</template>

<script>
    export default {
        name: "BusinessFollow",
        props:["closedBusinessBox"]
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
            width: 160px;
            color: #333;
            font-size: 12px;
            line-height: 20px;
            height: 40px;
            overflow: hidden;
            padding-left: 5px;
            padding-right: 5px;
        }
        .del {
            color: #2da2ff;
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