<template>
    <div class="My">
        <img src="../../../images/default.png" width="68" height="68" v-if="logo == null">
        <img :src="logo.url" width="68" height="68" v-else />
        <p class="name">{{name}}</p>
        <p class="tel">{{tel}}</p>
        <p @click="landOut()" class="landout">
            <svg class="icon icon1">
                <use xlink:href="#icon-tuichu"></use>
            </svg>
            <svg class="icon icon2">
                <use xlink:href="#icon-tuichu1"></use>
            </svg>
            <span> 退出账号</span>
        </p>
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
            logo(){
                return this.USER_INFO.avatar;
            },
            name(){
                return this.USER_INFO.real_name;
            },
            tel(){
                return this.USER_INFO.phone;
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
            margin: 0 auto;
            margin-top: 30px;
            position: relative;
            display: block;
            border-radius: 2px;
        }
        .name {
            font-size:14px;
            color: #333;
            margin-top: 16px;
            margin-bottom: 12px;
            text-align: center;
        }
        .tel {
            color: #999;
            font-size: 12px;
            text-align: center;
        }
        .landout {
            width: 190px;
            height: 34px;
            line-height: 34px;
            display: inline-block;
            border:1px solid #f1f1f1;
            color: #2da2ff;
            margin-top: 50px;
            border-radius: 2px;
            .icon {
                width: 12px;
                height: 12px;
                margin-right: 1px;
            }
            .icon2 {
                display: none;
            }
            &:hover {
                color: #fff;
                background: #26a2ff;
                .icon2 {
                    display: inline-block;
                }
                .icon1 {
                    display: none;
                }
            }
        }
    }
</style>