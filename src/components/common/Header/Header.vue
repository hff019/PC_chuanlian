<template>
    <div>
        <HeaderTop></HeaderTop>
        <div style="background: #fff;border-bottom:2px solid #2da2ff ">
            <div class="header-middle">
                <div>
                    <router-link to="/home"><img src="../../../images/logo.png"></router-link>
                </div>
                <div class="header-middle-form">
                    <form>
                        <input type="search" placeholder="请输入要搜索的关键字">
                        <button type="submit">搜索</button>
                    </form>
                </div>
                <div>
                    <router-link to="/my-shop">
                        <span class="shopcar">我的购物车<small>1</small></span>
                    </router-link>
                </div>
            </div>

            <!--导航开始-->
            <div class="header-nav">
                <div class="top-nav">
                    <el-menu class="el-menu-demo" mode="horizontal">
                        <el-submenu index="1">
                            <template slot="title" class="top-nav-title">产品分类</template>
                        </el-submenu>
                    </el-menu>
                </div>
                <ul class="big-nav-list">
                    <li>
                        <router-link to="/home">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/product">产品</router-link>
                    </li>
                    <li>
                        <router-link to="/customized">订制</router-link>
                    </li>
                    <li>
                        <router-link to="/collect">联采</router-link>
                    </li>
                    <li><span>|</span></li>
                    <li>
                        <router-link to="/factory">生产厂家</router-link>
                    </li>
                    <li>
                        <router-link to="/business">商业公司</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTop from "./HeaderTop"

    export default {
        name: "Header",
        components: {
            HeaderTop
        },


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

    .el-menu--popup {
        padding: 0 !important;
    }

    /*
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

     */
    .shopcar {
        small {
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
    }
</style>