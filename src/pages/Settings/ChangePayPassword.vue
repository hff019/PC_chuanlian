<template>
    <div class="ChangePassword">
        <p class="title">修改支付密码</p>
        <div class="title-container">
            <p class="p1">您是否记得账号<span>{{phone}}</span>当前使用的支付密码<small> 初次设置选择不记得</small></p>
        </div>
        <div class="state-box">
            <p><router-link to="/forget-pass" target="_blank">不记得</router-link></p>
            <p><router-link to="/remeber-pass" target="_blank" style="color: #fff">记得</router-link></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChangePassword",
        data(){
            return {
                phone:"15539383838"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ChangePassword {
        background: #fff;
        border-radius: 5px;
    }
    .title {
        padding: 20px 0;
        font-size: 14px;
        border-bottom: 1px solid #e6e6e6;
    }
    .title-container {
        background: #fff;
        text-align: center;
        padding: 30px 0;
        font-size: 14px;
        color: #666;
        line-height: 1.5;
        .p1 {
            span {
                color: #333;
                font-size: 16px;
            }
            small {
                color: #ff3b30;
                font-size: 14px;
            }
        }
    }
    .state-box {
        width: 350px;
        margin: 20px auto;
        display: flex;
        justify-content: space-around;
        p {
            width: 45%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            background: #fff;
            border-radius: 5px;
            border:1px solid #ccc;
            a {
                display: block;
                width: 100%;
                height: 100%;
            }
            &:nth-child(2) {
                background: #26a2ff;
                color: #fff;
                border-color: #26a2ff;
            }
        }
    }
    .info {
        padding: 0 20px;
        font-size: 12px;
        color: #666;
        span {
            color: #333;
            font-size: 14px;
        }
    }
</style>