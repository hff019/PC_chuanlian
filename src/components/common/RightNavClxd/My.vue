<template>
    <div class="My">
        <img src="../../../images/default.png" width="68" height="68">
        <p @click="landOut()">退出账号</p>
        <router-link to="">我的订单</router-link>
    </div>
</template>

<script>
    export default {
        name: "My",
        props:['landOut']
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
    .My {
        position: fixed;
        width: 275px;
        height: 284px;
        overflow-x: hidden;
        overflow-y: scroll;
        top: 15%;
        right: 30px;
        background: #fff;
        z-index: 99;
        border: 1px solid #f1f1f1;
        text-align: center;
        animation:mymove .35s ease-in-out alternate forwards;
        &::-webkit-scrollbar {
            width: 0px;
            background: #fff;
            height: 0px;
        }
        img {
            margin-top: 30px;
            position: relative;
        }
        p {
            margin-top: 24px;
            color: #2da2ff;
            font-size: 12px;
        }
        a {
            width: 190px;
            height: 34px;
            line-height: 34px;
            display: inline-block;
            border:1px solid #f1f1f1;
            color: #2da2ff;
            margin-top: 54px;
        }
    }
</style>