<template>
    <div>
        <el-carousel  height="510px">
            <el-carousel-item>
                <img src="../../images/banner/banner1.png" class="swiper-img">
            </el-carousel-item>
        </el-carousel>
        <div class="width-container bg-white">
            <el-row>
                <el-col :span="6">
                    <router-link to="">

                    </router-link>
                </el-col>
            </el-row>
        </div>
        <ul  class="left-nav" :class="{ active: isFixed }">
            <li><a href="#hot" name="hot">热卖专场</a> </li>
            <li><a href="#hot" name="hot">新品</a> </li>
            <li><a href="#hot" name="hot">普品</a> </li>
            <li><a href="#hot" name="hot">中药</a> </li>
        </ul>
        <a name="hot" id="hot"></a>
        <div class="width-container bg-white">
            <div class="title">
                <span>热卖专场</span>
                <div class="right">
                    <div @click="prev">
                        <svg class="icon icon1">
                            <use xlink:href="#icon-business-home-left-notNextPage"></use>
                        </svg>
                        <svg class="icon icon2">
                            <use xlink:href="#icon-business-home-left-hasNextPage"></use>
                        </svg>
                    </div>
                    <div @click="next">
                        <svg class="icon icon1">
                            <use xlink:href="#icon-business-home-right-notNextPage"></use>
                        </svg>
                        <svg class="icon icon2">
                            <use xlink:href="#icon-business-home-right-hasNextPage"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <el-carousel  :height="height" ref="carousel" :loop="true" :autoplay="false">
                <el-carousel-item>
                    <el-row>
                        <el-col :span="12">
                            <img src="../../images/banner/banner2.png" width="100%" class="img1">
                        </el-col>
                        <el-col :span="6"  v-for="(entity,index) in entities" class="border-col">
                            <productClxsd :key='index' :data="entity"/>
                        </el-col>
                    </el-row>
                </el-carousel-item>
                <el-carousel-item>
                    <el-row>
                        <el-col :span="12">
                            <img src="../../images/banner/banner2.png" width="100%" class="img1">
                        </el-col>
                        <el-col :span="6"  v-for="(entity,index) in entities" class="border-col">
                            <productClxsd :key='index' :data="entity"/>
                        </el-col>
                    </el-row>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!--新品-->
        <div class="width-container bg-white">
            <div class="title">
                <span>热卖专场</span>
                <div class="right">
                    <router-link to="" class="more">查看更多</router-link>
                </div>

            </div>
            <el-row>
                <el-col :span="12">
                    <img src="../../images/banner/banner2.png" width="100%" class="img1">
                </el-col>
                <el-col :span="6"  v-for="(entity,index) in entities" class="border-col">
                    <productClxsd :key='index' :data="entity"/>
                </el-col>
            </el-row>
        </div>
        <!--普药-->
        <!--中药-->
        <!--控销药-->
        <!--医用耗材-->

    </div>
</template>

<script>
    import productClxsd from "@/components/modules/BusinessProductCard"
    export default {
        name: "Home",
        data(){
            return {
                height:"860px",
                isFixed:false,
                items:[

                ],
                entities:[
                    {
                        id:1,
                        good_name:"维生素",
                        price:"234",
                        market_price:"345"
                    },
                    {
                        id:1,
                        good_name:"维生素",
                        price:"234",
                        market_price:"345"
                    },
                    {
                        id:1,
                        good_name:"维生素",
                        price:"234",
                        market_price:"345"
                    }
                ]
            }
        },
        components:{
            productClxsd
        },
        mounted() {
            window.addEventListener('scroll', this.menu)
        },
        methods:{
            prev(){
                console.log("上一张");
                this.$refs.carousel.prev()
            },
            next(){
                this.$refs.carousel.next()
            },
            initScreen(){
                var width = document.body.offsetWidth;
                if(width<1180){
                    this.height = "668px"
                }
            },
            menu(){
                var scroll = document.documentElement.scrollTop || document.body.scrollTop;
                if(scroll>500){
                    this.isFixed =true
                }else {
                    this.isFixed = false
                }
            },
        },
        created() {
            this.initScreen()
        }
    }
</script>

<style lang="scss" scoped>

    .left-nav {
        position: absolute;
        width: 110px;
        background: #fff;
        border-radius: 5px;
        left: 10%;
        margin-top: 80px;
        li {
            line-height: 46px;
            a {
                display: block;
                text-align: center;
                font-size: 15px;
                color: #333;
                &:hover {
                    background: #2da2ff;
                    color: #fff;
                }
            }
        }
    }
    .active {
        position: fixed;
        left: 10%;
        top:19%;
        z-index: 99;
    }
    .el-carousel {
        overflow: hidden !important;
    }
    .swiper-img {
        display: block;
        margin: 0 auto;
    }
    .bg-white {
        background: #fff;
        border-radius: 5px;
        margin-top: 30px;
    }
    .img1 {
        width: 100%;
        height: 428px;
    }
    .border-col {
        border: 1px solid #f1f1f1;
        &:hover {
            border-color: #2da2ff;
        }
    }
    .title {
        height: 55px;
        line-height: 55px;
        padding: 0 30px;
        font-size: 18px;
        .right {
            float: right;
            >div {
                display: inline-block;
                position: relative;
                cursor: pointer;
                padding-right: 10px;
                .icon {
                    width: 24px;
                    height: 24px;
                }
                .icon1 {
                    display: inline-block;
                }
                .icon2 {
                    display: none;
                }
                &:hover {
                    .icon1 {
                        display: none;
                    }
                    .icon2 {
                        display:inline-block;
                    }
                }

            }
            .more {
                color: #999999;
                border: 1px solid #e6e6e6;
                font-size: 14px;
                float: right;
                line-height: 35px;
                margin-top: 10px;
                padding: 0 14px;
                border-radius: 3px;
                &:hover {
                    background: #2da2ff;
                    color: #fff;
                }
            }
        }
    }
    @media screen and (max-width:1180px) {
        .img1 {
            height: 330px;
        }
    }
</style>