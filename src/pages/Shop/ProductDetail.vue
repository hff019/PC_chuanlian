<template>
    <div  v-bind:style="styleObject">
        <Header></Header>
        <div class="width-container" style="padding-top: 20px">
            <el-row  :gutter="20">
                <el-col :span="11">
                    <div class="swiper-top">
                        <img src="../../images/index/img3.jpg">
                    </div>
                    <ul class="swiper-list">
                        <li><img src="../../images/index/img3.jpg"></li>
                        <li><img src="../../images/index/img3.jpg"></li>
                        <li><img src="../../images/index/img3.jpg"></li>
                        <li><img src="../../images/index/img3.jpg"></li>
                    </ul>
                </el-col>
                <el-col :span="13">
                    <h3 class="title">维生素</h3>
                    <div class="detail-box1">
                        <p class="left">￥<span>258</span>/件</p>
                        <p class="right">采购价<span>200</span>/盒 &nbsp;&nbsp; 零售价<span>200</span>/盒</p>
                    </div>
                    <div class="detail-box2">
                        <div class="left">
                            <svg class="icon">
                                <use xlink:href="#icon-product-follow-0"></use>
                            </svg>
                            <span>收藏产品</span>
                        </div>
                        <div class="right">
                            <span>毛利润：<small style="color: #ff3b30">3%</small></span>
                            <span>销售量：<small style="color: #ff3b30">234</small></span>
                        </div>
                    </div>
                    <ul class="detail-list">
                        <li>产品参数</li>
                        <li>产品规格：<span>10mg*10片*2板</span><span>10盒/件</span></li>
                        <li>生产厂商：<span>华夏药业</span></li>
                        <li>有效期至：<span>2022.12.25</span></li>
                    </ul>
                    <div class="detail-box3">
                        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                        <el-button type="primary">加入购物车</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!--尾部开始-->
        <Footer></Footer>
        <RightLayout></RightLayout>
    </div>
</template>

<script>
    import Header from "@/components/common/HeaderCompany"
    import Footer from "@/components/common/Footer"
    import RightLayout from "@/components/common/RightLayout"//右侧导航
    export default {
        name: "ProductDetail",
        components:{
            Footer,
            Header,
            RightLayout,
        },
        data(){
            return {
                styleObject: {
                    minHeight: document.documentElement.clientHeight+'px',
                    background: '#fff'
                },
                num:1
            }
        },
        methods:{
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .swiper-top {
        border: 1px solid #f1f1f1;
        img {
            width: 100%;
            max-height: 500px;
        }
    }
    .swiper-list {
        text-align: center;
        padding-top: 20px;
        li {
            display: inline-block;
            border:1px solid #f1f1f1;
            padding: 2px;
            margin-right: 6px;

            img {
                width: 60px;
                height: 60px;
            }
        }
    }
    .title {
        font-size: 16px;
        line-height: 23px;
        padding-top: 10px;
        margin-bottom: 15px;
    }
    .detail-box1 {
        background: #fafafa;
        padding: 20px;
        height: 50px;
        .left  {
            font-size: 20px;
            color: #ff3b30;
            float: left;
            span {
                font-size: 48px;
            }
        }
        .right {
            float: right;
            font-size: 12px;
            color: #999;
            margin-top: 30px;
            span {
                font-size: 14px;
                color: #333;
                padding: 0 2px;
            }
        }
    }
    .detail-box2 {
        padding: 30px 0;
        display: flex;
        justify-content: space-between;
        .left {
            cursor: pointer;
            padding-top: 10px;
            span {
                margin-left: 5px;
                color: #2da2ff;
            }
        }
        .right {
            border: 1px solid #f1f1f1;
            border-left: 0px;
            border-right: 0px;
            padding: 10px 0;
            width: 380px;
            text-align: center;
            span {
                display: inline-block;
                width: 48%;
                text-align: center;
                border-right: 1px solid #f1f1f1;
                &:nth-child(2) {
                    border: 0px;
                }
            }
        }
    }
    .detail-list {
        background: #fafafa;
        padding: 20px;
        font-size: 16px;
        margin-bottom: 50px;
        li {
            line-height: 50px;
            span {
                color: #999999;
            }
        }
    }
    .detail-box3 {
        .el-button {
            margin-left: 20px;
        }
    }
    @media screen and (max-width:1180px) {
        .detail-list {
            margin-bottom: 30px;
            padding: 15px;
            li{
                line-height: 40px;
            }
        }
    }
</style>