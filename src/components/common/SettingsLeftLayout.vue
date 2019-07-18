<template>
    <ul class="list">
        <li><b>我的订单</b> </li>
        <li v-bind:class="{ active:1 == current }"  v-on:click="addClass(1)"><router-link to="/my-info">个人信息</router-link> </li>
        <li v-bind:class="{ active:2 == current }"  v-on:click="addClass(2)"><router-link to="/company-info-edit">公司信息</router-link> </li>
        <li v-bind:class="{ active:3 == current }"  v-on:click="addClass(3)"><router-link to="/address">地址管理</router-link> </li>
        <li><router-link to="">收款方式</router-link> </li>
        <li><p class="line"></p></li>
        <li><b>修改密码</b> </li>
        <li v-bind:class="{ active:5 == current}"  v-on:click="addClass(5)"><router-link to="/change-login-pass" >登陆密码</router-link> </li>
        <li v-bind:class="{ active:6 == current}"  v-on:click="addClass(6)"><router-link to="/change-pay-password">支付密码</router-link> </li>
        <li><p class="line"></p></li>
        <li><b>我要反馈</b> </li>
    </ul>
</template>

<script>
    export default {
        name: "SettingsLeftLayout",
        data(){
            return{
                current:1,
                id:this.$route.path
            }
        },
        methods:{
            addClass:function(index){
                this.current=index;
            }
        },

    }
</script>

<style lang="scss" scoped>
    .list {
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