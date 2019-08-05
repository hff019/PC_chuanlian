<template>
    <div>
        <HeaderTop/>
        <div style="background: #fff;border-bottom:2px solid #2da2ff ">
            <div class="header-middle">
                <div style="width: 200px">
                    <router-link to="/home"><img src="../../../images/logo.png"></router-link>
                </div>
                <div class="header-middle-form" style="width: 60%">
                    <ul>
                        <li>
                            <router-link to="/home">首页</router-link>
                        </li>
                        <li>
                            <router-link to="/my-info">账户设置</router-link>
                        </li>
                        <li>
                            <router-link to="">消息</router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <router-link to="/my-shop">
                        <span class="shopcar">我的购物车<small class="small-tag">1</small></span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTop from "./HeaderTop"
    export default {
        name: "Header2",
        components:{
            HeaderTop
        }
    }
</script>

<style lang="scss" scoped>
    .el-menu--popup {
        padding: 0px;
    }
    .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
        background-color: #712933;
        color: #fff;
        opacity: .9;
    }
    .nav-list {
        padding: 20px;
        width: 900px;
        height: 500px;
        top:0px;
        position: absolute;
        background: #fff;
        ul {
            li {
                list-style: none;

            }
        }
    }
        .small-tag {
            width: 20px;
            height: 20px;
            border-radius: 20px;
            background: #2da2ff;
            color: #fff;
            font-size: 10px;
            display: inline-block;
            text-align: center;
            line-height: 20px;
            transform: scale(.8);
            top: -6px;
            position: relative;
            left: -2px;
        }
    .header-middle-form {
        ul {
            float: left;
            padding-top: 10px;
            li {
                list-style: none;
                display: inline-block;
                padding: 0 20px;
                font-size: 14px;
                a {
                    color: #333;
                    &:hover {
                        color: #2da2ff;
                    }
                }
            }
        }
    }
</style>