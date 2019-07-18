<template>
    <div class="my-container">
        <div class="left">
            <img src="../../images/default.png" class="img1">
            <p>张无忌<span>15258969854</span></p>
        </div>
        <div class="right">
            <div class="title">
                <span>我的资产</span>
                <svg class="icon" @click="is_look = !is_look">
                    <use :xlink:href="`#icon-inCenter-${is_look ? 'eyeOpen':'eyeClose'}`"></use>
                </svg>
            </div>
            <el-row>
                <el-col :span="6">
                    <div class="right-info">
                        <h3 v-if="is_look">1.20</h3>
                        <h1 v-else>******</h1>
                        <p>联贝价值</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="right-info">
                        <h3 v-if="is_look">1.20</h3>
                        <h1 v-else>******</h1>
                        <p>我的联贝</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="right-info">
                        <h3 v-if="is_look">1.20</h3>
                        <h1 v-else>******</h1>
                        <p>联票余额</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="yq-box">
                        <img src="" width="">
                        <p>邀请码</p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyTop",
        data(){
            return {
                is_look:true
            }
        },
    }
</script>

<style lang="scss" scoped>
.my-container {
    display: flex;
    background: #fff;
    height: 225px;
    .left {
        background: #2da2ff;
        width: 22.5%;
        text-align: center;
        .img1 {
            width: 128px;
            height: 128px;
            position: relative;
            margin-top: 22px;
            border-radius: 5px;
            border: 4px solid #96d1ff;
        }
        p {
            color: #fff;
            margin-top: 22px;
            font-size: 16px;
            span {
                font-size: 14px;
            }
        }
    }
    .right {
        width: 77.5%;
        .title {
            height: 45px;
            border-bottom: 1px solid #e6e6e6;
            padding: 0 20px;
            font-size: 16px;
            line-height: 45px;
            svg {
                width: 18px;
                height: 14px;
                float: right;
                margin-top: 15px;
                cursor: pointer;
            }
        }
    }
}
    .right-info {
        text-align: center;
        padding-top: 45px;
        h3,h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }
        h1 {
            color: #ccc;
        }
        p {
            font-size: 14px;
        }
    }
    .yq-box {
        padding-top: 15px;
        text-align: center;
        img {
            width: 90px;
            height: 90px;
            padding: 5px;
            border: 1px solid #f1f1f1;
        }
        p {
            font-size: 16px;
            margin-top: 6px;
        }
    }
</style>