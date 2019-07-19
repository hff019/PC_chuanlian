<template>
    <div style="width: 100%;background: #fff;border-top:2px solid #2da2ff;padding: 20px 0 ">
        <div class="width-container">
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
                        <p class="right">
                            <svg class="icon">
                                <use xlink:href="#icon-product-follow-0"></use>
                            </svg>
                            <span>收藏产品</span>
                        </p>
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
        <div class="foot-fade"></div>
    </div>

</template>

<script>
    export default {
        name: "ProductDetail",
        data(){
            return{
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
    .foot-fade {
        background: #fff;
        height: 50px;
        position: absolute;
        width: 100%;
    }
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
        margin-bottom: 40px;
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
            cursor: pointer;
            padding-top: 20px;
            span {
                margin-left: 5px;
                color: #2da2ff;
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