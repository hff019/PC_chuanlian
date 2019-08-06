<template>
    <div class="AptitudesEdit">
        <div v-if="!is_onsubmit">
        <p class="title">基本信息</p>
        <el-form ref="form"  label-width="80px">
            <div v-if="userType === 3">
                <el-form-item label="公司类型">
                    <el-select v-model="companyType" placeholder="公司类型" style="width: 300px" @change="choiceComType(value)">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </div>
            <el-form-item label="公司名称">
                <el-input style="width: 300px" v-model="companyName" placeholder="请输入公司名称"></el-input>
            </el-form-item>
            <p class="title">公司资质<span>请认真上传，一经上传不可修改</span></p>
            <div class="is-three">
                <span>是否三证合一</span>
                <svg class="icon" @click="is_three = ! is_three">
                    <use :xlink:href="`#icon-companyMes-${is_three ? 'is' : 'not' }`"></use>
                </svg>
            </div>
            <ul class="input-list">
                <li v-if="is_three">
                    <FormImageItem
                            v-model="aptitudeData.business_license"
                            label="营业执照"
                            type="id"
                    />
                </li>
                <li v-if="!is_three">
                    <FormImageItem
                            v-model="aptitudeData.oscc"
                            label="组织结构代码证"
                            type="id"
                    />
                </li>
                <li v-if="!is_three">
                    <FormImageItem
                            v-model="aptitudeData.trcg"
                            label="税务登记证（国税）"
                            type="id"
                    />
                </li>
                <li v-if="!is_three">
                    <FormImageItem
                            v-model="aptitudeData.trc"
                            label="税务登记证（地税）"
                            type="id"
                    />
                </li>
                <li  v-if="userType !==1 && userType !== 4">
                    <FormImageItem
                            v-model="aptitudeData.hyg_l"
                            label="卫生许可证"
                            type="id"
                    />
                </li>
                <li  v-if="userType !==1 && userType !== 4">
                    <FormImageItem
                            v-model="aptitudeData.health_c"
                            label="健康证"
                            type="id"
                    />
                </li>
                <li  v-if="userType ===1 && userType !== 4">
                    <FormImageItem
                            v-model="aptitudeData.pblg"
                            :label="'药品生产许可证'"
                            type="id"
                    />
                </li>
                <li >
                    <FormImageItem
                            v-model="aptitudeData.pbl"
                            :label="'药品经营许可证'"
                            type="id"
                    />
                </li>
                <li v-if="userType ===1">
                    <FormImageItem
                            v-model="aptitudeData.gmp"
                            :label="'药品生产质量管理规范认证证书(GMP)'"
                            type="id"
                    />
                </li>
                <li>
                    <FormImageItem
                            v-model="aptitudeData.gsp"
                            :label="'药品经营质量管理规范认证证书(GSP)'"
                            type="id"
                    />
                </li>
            </ul>
            <div style="text-align: center;margin-bottom: 20px">
                <el-button type="primary" @click="onSubmit()" style="width: 180px">确认提交</el-button>
            </div>

        </el-form>
    </div>
        <!--提交成功-->
        <div v-else class="success">
            <img src="../../images/settings/img2.png">
            <p class="message">提交成功，正在审核请耐心等待</p>
        </div>
    </div>
</template>

<script>
    import FormImageItem from "@/components/form/FormImageItem";
    import ImagePoster from '@/components/ImagePoster.vue'

    export default {
        name: "AptitudesEdit",
        components: {
            FormImageItem,
            ImagePoster
        },
        props:["userType"],
        data() {
            return {
                is_three:false,
                companyType:'',
                companyName:'',
                is_onsubmit:false,
                aptitudeData:{
                    gsp:null,//药品经营质量管理规范认证证书(GSP)
                    gmp:null,//药品生产质量管理规范认证证书(GMP)
                    business_license:null,//营业执照
                    oscc:null,//组织结构代码证,
                    pbl:null,//药品经营许可证
                    health_c:null,//健康证
                    hyg_l:null,//卫生许可证,
                    pblg: null,//药品生产许可证
                    trcg:null,//税务登记证（国税）
                    trc:null,//税务登记证（地税）
                },
                options: [{
                    value: '1',
                    label: '商业'
                }, {
                    value: '2',
                    label: '工业'
                }, {
                    value: '3',
                    label: '连锁店'
                }, {
                    value: '4',
                    label: '个体'
                }],
                value: ''
            }
        },
        methods: {
            choiceComType(value){
                console.log(value)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .AptitudesEdit {
        background: #fff;
        border-radius: 5px;
    }
    .title {
        padding: 20px 0;
        font-size: 14px;
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 20px;
        span {
            padding-left: 20px;
            color: #ff3b30;
            font-size: 12px;
        }
    }
    .is-three {
        background: #fafafa;
        height: 37px;
        line-height: 37px;
        padding: 0 30px;

        svg {
            width: 24px;
            height: 24px;
            float: right;
            margin-top: 5px;
            cursor: pointer;
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
            background: #f9f9f9;
            text-align: center;
            position: relative;
            svg {
                width: 120px;
                height: 120px;
                margin-top: 50px;
            }

            p {
                margin-top: 15px;
                font-size: 14px;
            }
        }
    }
    .success {
        text-align: center;
        padding-top: 60px;
        .message {
            text-align: center;
            font-size: 14px;
            margin-top: 45px;
        }
    }

</style>