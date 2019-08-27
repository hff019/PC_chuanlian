<template>
    <div>
        <HeaderTop></HeaderTop>
        <div style="background: #fff;border-bottom:2px solid #2da2ff ">
            <div class="header-middle">
                <div style="width: 320px">
                    <router-link to="/home" style="position: absolute"><img src="../../../images/logo2.png" class="header-img"></router-link>
                </div>
                <div class="header-middle-form">
                    <form>
                        <input type="search" placeholder="请输入要搜索的关键字">
                        <button type="submit">搜索</button>
                    </form>
                </div>
                <div>
                    <router-link to="/my-shop">
                        <span class="shopcar">我的购物车<small>{{totle_num}}</small></span>
                    </router-link>
                </div>
            </div>

            <!--导航开始-->
            <div class="header-nav">
                <ul class="big-nav-list" style="width: 63.5%;float: right">
                    <li v-bind:class="{ active:1 == current}"  v-on:click="addClass(1)">
                        <router-link to="/home">首页</router-link>
                    </li>
                    <li v-bind:class="{ active:2 == current}"  v-on:click="addClass(2)">
                        <router-link to="/product">产品</router-link>
                    </li>
                    <li v-bind:class="{ active:3 == current}"  v-on:click="addClass(3)">
                        <router-link to="/customized">订制</router-link>
                    </li>
                    <li v-bind:class="{ active:4 == current}"  v-on:click="addClass(4)">
                        <router-link to="/collect">集采</router-link>
                    </li>
                    <li><span>|</span></li>
                    <li v-bind:class="{ active:5 == current}"  v-on:click="addClass(5)">
                        <router-link to="/factory">云工厂</router-link>
                    </li>
                    <li v-bind:class="{ active:6 == current}"  v-on:click="addClass(6)">
                        <router-link to="/business">全球仓</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTop from "./HeaderTop"
    import { mapState,mapMutations} from 'vuex'
    import { supplierFactoryEntities } from '@/api/supplier'


    export default {
        name: "Header",
        components: {
            HeaderTop
        },
        data(){
          return {
              current:1,
              totle_num:0,
              data:{
                  shops:[],
              },
          }
        },
        computed:{
            ...mapState({
                cartList: state =>state.shop.CART_LIST
            }),
        },
        mounted(){
            this.initData()
        },
        methods:{
            addClass:function(index){
                this.current=index;
            },
            async initData(){
                let ids = []
                let idMapQ = {}
                let cartData =  this.cartList
                if(cartData){
                    if(this.shopId){
                        Object.values(cartData).forEach(item => {
                            ids.push(item.id)
                            idMapQ[item.id] = item.num
                        })
                    }else{
                        Object.values(cartData).forEach(item => {
                            Object.values(item).forEach(_item =>{
                                ids.push(_item.id)
                                idMapQ[_item.id] = _item.num
                            })

                        })
                    }
                }
                if(ids.length){
                    const { data } = await supplierFactoryEntities(ids.join(','))
                    this.data.shops = this._handleData(data,idMapQ)
                }
            },
            _handleData(data,map){
                let shops = {}
                data.forEach((item,index) =>{
                    item.num = map[item.id]
                    this.totle_num+=item.num
                })
                return Object.values(shops)
            },
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

    .el-menu--popup {
        padding: 0 !important;
    }

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
    .active {
        a {
            color: #26a2ff;
        }
    }
</style>