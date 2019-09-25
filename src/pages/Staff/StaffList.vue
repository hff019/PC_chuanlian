<template>
    <div style="background: #f1f1f1">
        <el-row :gutter="15">
            <el-col :span="24">
                <div class="margin15">
                    <div class="title">员工账号</div>
                    <div>
                        <el-table
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column
                                    prop="num"
                                    label="序号"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="state"
                                    label="状态"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="id"
                                    label="账号"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="姓名"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="tel"
                                    label="手机号"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="login_num"
                                    label="登陆次数"
                                    width="180">
                            </el-table-column>
                            <el-table-column>
                                <el-button type="success" size="small" @click="open(id)">查看</el-button>
                                <el-button type="danger" size="small">删除</el-button>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!--员工信息-->
        <div v-if="visible">
            <div class="fade-bg" @click="visible = false"></div>
            <div class="staff-info">
                <div class="title-top">
                    <span>查看</span>
                    <i class="el-icon-close" @click="visible = false"></i>
                </div>
                <div>
                    <el-form :model="staff" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="账号" prop="name">
                            <el-input v-model="staff.name"></el-input>
                        </el-form-item>
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="staff.name"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="name">
                            <el-input v-model="staff.name"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号" prop="name">
                            <el-input v-model="staff.name"></el-input>
                        </el-form-item>
                        <el-form-item label="状态" prop="name">
                            <el-radio v-model="staff.radio" label="1">正常</el-radio>
                            <el-radio v-model="staff.radio" label="2">冻结</el-radio>
                        </el-form-item>
                        <div style="text-align: center">
                            <el-button type="primary" size="small">立即修改</el-button>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StaffList",
        data(){
            return{
                staff:{
                   name:'',
                    radio: 1
                },
                visible:false,
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                },
                tableData: [{
                    num:1,
                    state:'正常',
                    id:'201987',
                    tel:'187544778965',
                    date: '2016-05-02',
                    login_num:5
                }, {
                    num:1,
                    state:'正常',
                    id:'201987',
                    tel:'187544778965',
                    date: '2016-05-02',
                    login_num:5
                }]
            }
        },
        methods:{
            open(id){
                this.visible = true
            }
        },
    }
</script>

<style scoped lang="scss">
    .margin15 {
        background: #fff;
        margin-top: 15px;
    }
    .title {
        height: 58px;
        border-bottom: 1px solid #e6e6e6;
        line-height: 58px;
        color: #333;
        font-size: 18px;
        padding-left: 20px;
    }
    .fade-bg {
        width: 100%;
        height: 100%;
        background: #333;
        opacity: .5;
        top:0px;
        left: 0px;
        z-index: 90;
        position: fixed;
    }
    .staff-info {
        width:600px;
        height:420px;
        background:rgba(255,255,255,1);
        border-radius:2px;
        position: fixed;
        left: 50%;
        margin-left: -300px;
        top:50%;
        margin-top: -210px;
        z-index: 99;
        .title-top {
            height:40px;
            background:rgba(245,245,245,1);
            border-radius:2px 2px 0px 0px;
            font-size:14px;
            padding-left: 25px;
            line-height: 40px;
            i {
                float: right;
                margin-right: 15px;
                margin-top: 13px;
                cursor: pointer;
            }
        }
        .demo-ruleForm {
            padding: 10px 100px 5px 10px;
        }
    }
</style>