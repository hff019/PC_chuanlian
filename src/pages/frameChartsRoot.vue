<template>
    <div style="background: #f1f1f1">
        <el-row :gutter="15">
            <el-col :span="6">
                <div class="info">
                    <img src="../images/default_company_logo.png" width="100" height="100">
                    <p class="name">上海制药有限公司</p>
                    <p class="fans">粉丝量 300</p>
                    <div class="Bbox">
                        <div>
                            <p>上次登录时间</p>
                            <p>2019.05.23 13：45：32</p>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="today-data">
                    <div class="title">今日数据</div>
                    <el-row>
                        <el-col :span="6">
                            <div class="Bbox">
                                <p></p>
                                <p>0.00</p>
                                <p>联贝余额（贝）</p>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="Bbox">
                                <p>今日联贝收入量（贝）</p>
                                <p>0</p>
                                <p>较前一日 -100</p>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="Bbox">
                                <p>今日联贝支出量（贝）</p>
                                <p>0</p>
                                <p>较前一日 -100</p>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="Bbox">
                                <p>今日联贝收入与支出差（贝）</p>
                                <p>0</p>
                                <p>较前一日 -100</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <!-- 产品数据开始 -->
        <el-row :gutter="15">
            <el-col :span="17">
                <div class="product">
                    <div class="title">工业客户数据</div>
                    <div class="product-box">
                            <div class="Bbox">
                                <p>0</p>
                                <p>今日注册</p>
                            </div>
                            <div class="Bbox">
                                <p>0</p>
                                <p>已注册</p>
                            </div>
                            <div class="Bbox">
                                <p>0</p>
                                <p>待审核</p>
                            </div>
                            <div class="Bbox">
                                <p>0</p>
                                <p>审核通过</p>
                            </div>
                            <div class="Bbox">
                                <p>0</p>
                                <p>总人数</p>
                            </div>
                    </div>
                </div>
                <div class="product">
                    <div class="title">商业客户数据</div>
                    <div class="product-box">
                        <div class="Bbox">
                            <p>0</p>
                            <p>今日注册</p>
                        </div>
                        <div class="Bbox">
                            <p>0</p>
                            <p>已注册</p>
                        </div>
                        <div class="Bbox">
                            <p>0</p>
                            <p>待审核</p>
                        </div>
                        <div class="Bbox">
                            <p>0</p>
                            <p>审核通过</p>
                        </div>
                        <div class="Bbox">
                            <p>0</p>
                            <p>总人数</p>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="notice">
                    <div class="title">官方通知</div>
                    <div class="scroll-wrap">
                        <ul class="scroll-content" ref="con1" :class="{anim:animate==true}">
                            <li v-for="(item,index) in prizeList">
                                <span>{{item.name}}</span>
                                <small>{{item.time}}</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="product">
            <div class="title">采购客户数据</div>
            <el-row>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>今日注册</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>已注册</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>待审核</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>医院</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>连锁</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>单体</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>诊所</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>总人数</p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="product">
            <div class="title">合作客户数据</div>
            <el-row>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>今日注册</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>已注册</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>待审核</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>医院</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>连锁</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>单体</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>诊所</p>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="Bbox">
                        <p>0</p>
                        <p>总人数</p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-row class="margin15">
            <el-col :span="24">
                <div class="title">联贝价值曲线图</div>
            </el-col>
            <el-col :span="24">
                <div class="sale-tab">
                    <span v-bind:class="{ active:1 == current}" v-on:click="addClass(1)">近30天</span>
                    <span v-bind:class="{ active:2 == current}" v-on:click="addClass(2)">近12月</span>
                </div>
            </el-col>
        </el-row>
        <el-row class="margin15">
            <el-col :span="24">
                <div class="title">联贝支入与支出曲线图</div>
            </el-col>
            <el-col :span="24">
                <div class="sale-tab">
                    <span v-bind:class="{ active:1 == currentR}" v-on:click="currentR = 1">近30天</span>
                    <span v-bind:class="{ active:2 == currentR}" v-on:click="currentR = 2">近12月</span>
                </div>
            </el-col>
        </el-row>
        <!-- 采购状况开始 -->
        <el-row class="margin15">
            <el-col :span="24">
                <div class="title">客户状况
                    <div class="data-right">
                        <div class="sale-tab sale-tab2">
                            <span v-bind:class="{ active:1 == currentCostomer}" v-on:click="currentCostomer = 1">全部客户</span>
                            <span v-bind:class="{ active:2 == currentCostomer}" v-on:click="currentCostomer = 2">非正常客户</span>
                            <span v-bind:class="{ active:3 == currentCostomer}" v-on:click="currentCostomer = 3">正常客户</span>
                        </div>
                        <el-select v-model="province" placeholder="选择省份" @change="selectCity(province)" style="width: 140px">
                            <el-option :label="item.name" :value="item.name" v-for="(item,index) in areaAddress"></el-option>
                        </el-select>&nbsp;
                        <el-select v-model="city" placeholder="选择城市" style="width: 140px">
                            <el-option :label="item.name" :value="item.name" v-for="(item,index) in cityArray"></el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import regionAddress from "@/plugins/json/pca-code.json"
    export default {
        name: "frame_charts",
        data() {
            return {
                areaAddress: regionAddress,
                cityArray:[],
                animate:false,
                current: 1,
                currentR:1,
                currentCostomer:1,
                prizeList: [
                    {name: '城轨采购网', time: '2019.03.21'},
                    {name: '天津地铁电子采购平台', time: '2019.03.21'},
                    {name: '南昌地铁', time: '2019.03.21'},
                    {name: '兰州地铁招标信息', time: '2019.03.21'},
                    {name: '西安公共资源交易中心', time: '2019.03.21'},
                    {name: '城轨采购网', time: '2019.03.21'},
                    {name: '天津地铁电子采购平台', time: '2019.03.21'},
                    {name: '南昌地铁', time: '2019.03.21'},
                    {name: '南昌地铁', time: '2019.03.21'},
                    {name: '兰州地铁招标信息', time: '2019.03.21'},
                    {name: '西安公共资源交易中心', time: '2019.03.21'},
                ],
                activeIndex: 0,
                intnum: 0,
                province:'北京',
                city:'市辖区'
            }
        },
        methods: {
            selectCity(province){
                this.city = null;
                this.areaAddress.forEach(item => {
                    if(item.name === province){
                        this.cityArray = item.children
                    }
                })
            },
            addClass: function (index) {
                this.current = index;
            },
            scroll(){

                let con1 = this.$refs.con1;

                con1.style.marginTop='-30px';

                this.animate=!this.animate;

                var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向

                setTimeout(function(){

                    that.prizeList.push(that.prizeList[0]);

                    that.prizeList.shift();

                    con1.style.marginTop='0px';

                    that.animate=!that.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了

                },500)

            }
        },
        created() {
            if(this.prizeList.length*32>320){
                setInterval(this.scroll,1000)
            }

        },
    }
</script>

<style lang="scss" scoped>
    .margin15 {
        background: #fff;
        margin-top: 15px;
    }

    .data-right {
        float: right;
        color: #999999;
        font-size: 12px;
        margin-right: 20px;
    }

    .title {
        height: 58px;
        border-bottom: 1px solid #e6e6e6;
        line-height: 58px;
        color: #333;
        font-size: 18px;
        padding-left: 20px;
    }

    .info {
        background: #fff;
        padding-top: 25px;
        text-align: center;
        height: 250px;

        img {
            border-radius: 100%;
        }

        .name {
            font-size: 16px;
            color: #00142a;
            margin: 16px 0 24px;
            white-space: nowrap;
            overflow: hidden;
            -ms-text-overflow: ellipsis;
            text-overflow: ellipsis;
        }

        .fans {
            color: #999;
            font-size: 14px;
        }

        .Bbox {
            height: 56px;
            background: #fafafa;
            display: flex;
            text-align: center;
            margin-top: 23px;

            > div {
                width: 100%;

                p {
                    padding-top: 8px;
                    color: #999;
                    font-size: 11px;

                    &:nth-child(2) {
                        color: #333;
                        font-size: 16px;
                    }
                }

                &:nth-child(1) {
                    border-right: 1px solid #f1f1f1;
                }
            }
        }
    }

    .today-data {
        background: #fff;
        height: 280px;

        .Bbox {
            margin-top: 20px;
            padding: 20px 30px;
            border-right: 1px solid #e6e6e6;
            height: 138px;

            p {
                font-size: 16px;
                color: #333;

                &:nth-child(2) {
                    margin-top: 30px;
                    font-size: 32px;
                }

                &:nth-child(3) {
                    font-size: 12px;
                    color: #999;
                    margin-top: 40px;
                }
            }
        }
    }

    .product {
        background: #fff;
        margin-top: 15px;
        &-box {
            display: flex;
            justify-content: space-around;
        }
        .Bbox {
            margin-top: 15px;
            margin-bottom: 15px;
            padding: 15px 0;

            p {
                font-size: 32px;
                color: #333;
                text-align: center;

                &:nth-child(2) {
                    margin-top: 16px;
                    font-size: 12px;
                    color: #999999;
                }
            }
        }
    }

    .notice {
        background: #fff;
        margin-top: 15px;
        .scroll-wrap{
            height: 325px;
            overflow: hidden;
        }
        .scroll-content {
            padding: 10px 0;
            position: relative;
            li {
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                padding: 0 20px;
                cursor: pointer;
                span {
                    display: inline-block;
                    width: 60%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                small {
                    float: right;
                    font-size: 14px;
                }
                &:hover {
                    color: #26a2ff;
                }
            }
        }
    }

    .sale-tab {
        float: right;
        padding: 10px 0;

        span {
            font-size: 12px;
            width: 68px;
            height: 24px;
            border-radius: 4px;
            color: #adadad;
            border: 1px solid #999999;
            display: inline-block;
            line-height: 24px;
            text-align: center;
            margin-right: 12px;
            cursor: pointer;
        }

        .active {
            color: #26a2ff;
            border-color: #26a2ff;
        }
    }
    .anim{
        transition: all 0.5s;
        margin-top: -30px;
    }
    .sale-tab2 {
        display: inline-block;
        float: none;
        span {
            width: 78px;
            height: 35px;
            line-height: 35px;
            border-color: #dcdfe6;
        }
    }
</style>