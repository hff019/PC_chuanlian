<template>
    <div class="Aptitudes">
        <p class="title">基本信息</p>
        <ul class="info-list">
            <li>
                <span>公司类型：</span>
                <small>商业公司</small>
            </li>
            <li>
                <span>公司名称：</span>
                <small>哈尔滨药业</small>
            </li>
        </ul>
        <p class="title">公司资质</p>
        <ul class="input-list">
            <li>
                <div>
                    <img :src="aptitudeData.business_license" @click="FnImage(aptitudeData.business_license)">
                </div>
                <p>营业执照</p>
            </li>
            <li>
                <div>
                    <img src="../../images/img.png">
                </div>
                <p>组织结构代码证</p>
            </li>
            <li>
                <div>
                    <img src="../../images/img.png">
                </div>
                <p>税务登记证（国税）</p>
            </li>
            <li>
                <div>
                    <img src="../../images/img.png">
                </div>
                <p>税务登记证（地税）</p>
            </li>
            <li>
                <div>
                    <img src="../../images/img.png">
                </div>
                <p>卫生许可证</p>
            </li>
            <li>
                <div>
                    <img src="../../images/img.png">
                </div>
                <p>健康证</p>
            </li>
            <li>
                <div>
                    <img src="../../images/img.png">
                </div>
                <p>药品生产许可证</p>
            </li>
            <li>
                <div>
                    <img src="../../images/img.png">
                </div>
                <p>药品经营许可证</p>
            </li>
            <li>
                <div>
                    <img src="../../images/img.png">
                </div>
                <p>药品生产质量管理规范认证证书(GMP)</p>
            </li>
            <li>
                <div>
                    <img src="../../images/img.png">
                </div>
                <p>药品经营质量管理规范认证证书(GSP)</p>
            </li>
        </ul>
        <div v-if="is_show">
            <div class="bg-fixed" @click="is_show = false"></div>
            <img :src="big_url" class="fixed-img">
        </div>

    </div>
</template>

<script>
    export default {
        name: "Aptitudes",
        data(){
            return{
                big_url:require("../../images/img.png"),
                is_show:false,
                aptitudeData:{
                    gsp:null,//药品经营质量管理规范认证证书(GSP)
                    gmp:null,//药品生产质量管理规范认证证书(GMP)
                    business_license:require("../../images/img.png"),//营业执照
                    oscc:null,//组织结构代码证,
                    pbl:null,//药品经营许可证
                    health_c:null,//健康证
                    hyg_l:null,//卫生许可证,
                    pblg: null,//药品生产许可证
                    trcg:null,//税务登记证（国税）
                    trc:null,//税务登记证（地税）
                },
            }
        },
        methods: {
            FnImage(url){
                console.log(url)
                this.is_show = true;
                this.big_url = url
            }
        }
    }
</script>

<style scoped lang="scss">
    .title {
        padding: 20px 0;
        font-size: 14px;
        border-bottom: 1px solid #e6e6e6;
    }
    .Aptitudes {
        background: #fff;
        border-radius: 5px;
    }
    .info-list {
        padding-top: 30px;
        li {
            color: #666;
            list-style: none;
            margin-bottom: 30px;
            font-size: 12px;
            span {
                display: inline-block;
                width: 70px;
                text-align: right;
            }
        }
    }
    .input-list {
        padding-top: 20px;
        li {
            display: inline-block;
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 40px;
            width: 42%;
            height: 238px;

            text-align: center;
            position: relative;
            >div{
                background: #f9f9f9;
                img {
                    height: 100%;
                    width: auto;
                    max-width: 100%;
                }
            }
            p {
                margin-top: 15px;
                font-size: 14px;
            }
        }
    }
    .bg-fixed {
        position: fixed;
        z-index: 99;
        width: 100%;
        height: 100%;
        background: #333;
        opacity: .8;
        left: 0px;
        top:0px;

    }
    .fixed-img {
        width: 750px;
        position: fixed;
        left: 50%;
        margin-left: -375px;
        z-index: 100;
        height: 58%;
        top:20%
    }
</style>