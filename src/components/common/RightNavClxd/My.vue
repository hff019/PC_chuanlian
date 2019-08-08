<template>
    <div class="My">
        <img src="../../../images/default.png" width="68" height="68" v-if="logo == null">
        <img :src="logo.url" width="68" height="68" v-else />
        <p @click="landOut()">退出账号</p>
        <router-link to="/business-order" v-if="supplier !== null">我的订单</router-link>
        <router-link to="/not-company-my" v-else>我的订单</router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "My",
        computed:{
            ...mapState({
                USER_INFO: state => state.CURRENTUSER
            }),
            supplier(){
                return this.USER_INFO.shop_supplier;
            },
            logo(){
                return this.USER_INFO.avatar;
            }
        },
        methods:{
            landOut(){
                this.$confirm('此操作将退出登陆, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$store.dispatch('SIGN_OUT');
                    this.$message({
                        type: 'success',
                        message: '退出成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
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