<template>
    <div class="header-top">
        <div class="container">
            <div class="lf">
                <svg class="icon">
                    <use xlink:href="#icon-pc-home-location"></use>
                </svg>
                <span> 郑州</span>
            </div>
            <div class="rt">
                <div class="header-top-nav">
                    <el-dropdown>
                        <el-button>
                            我的订单<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <div v-if="supplier!=null">
                                <el-dropdown-item><router-link to="/business-order" class="header-top-a">产品订单</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="" class="header-top-a">订制订单</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="" class="header-top-a">联采订单</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="" class="header-top-a">我的发布</router-link></el-dropdown-item>
                            </div>
                            <div v-else>
                                <el-dropdown-item><router-link to="/not-company" class="header-top-a">产品订单</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/not-company" class="header-top-a">订制订单</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/not-company" class="header-top-a">联采订单</router-link></el-dropdown-item>
                                <el-dropdown-item><router-link to="/not-company" class="header-top-a">我的发布</router-link></el-dropdown-item>
                            </div>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <router-link to="/business-follow" class="header-top-a1">厂家收藏</router-link>
                    <router-link to="/product-follow" class="header-top-a1">产品收藏</router-link>
                    <el-dropdown>
                        <el-button>
                            客户服务<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item><router-link to="" class="header-top-a">联系客服</router-link></el-dropdown-item>
                            <el-dropdown-item><router-link to="" class="header-top-a">帮助中心</router-link></el-dropdown-item>
                            <el-dropdown-item><router-link to="" class="header-top-a">服务中心</router-link></el-dropdown-item>
                            <el-dropdown-item><router-link to="" class="header-top-a">知识产权投诉</router-link></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-dropdown>
                        <el-button>
                            升级版<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <p>微信扫一扫下载客户端</p>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "HeaderTop",
        computed:{
            ...mapState({
                USER_INFO: state => state.CURRENTUSER
            }),
            supplier(){
                return this.USER_INFO.shop_supplier;
            },
        }
    }
</script>

<style scoped>
    .header-top-a {
        color: #666;
    }
</style>