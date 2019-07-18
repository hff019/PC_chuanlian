<template>
    <div>
        <div class="address">
            <p class="title">新增收货地址</p>
            <el-form ref="form"  label-width="80px">
                <el-form-item label="收货人">
                    <el-input v-model="name" placeholder="请输入收货人姓名"></el-input>
                </el-form-item>
                <el-form-item label="收货地址">
                    <el-cascader
                            v-model="value"
                            :options="options"
                            :props="{ expandTrigger: 'hover' }"
                            @change="handleChange" placeholder="请选择收货地址" style="width: 100%"></el-cascader>
                    <el-input v-model="name" placeholder="请输入详细地址" style="margin-top: 20px;width: 40%"></el-input>
                </el-form-item>
                <el-form-item label="联系方式">
                    <el-input type="tel" v-model="name" placeholder="请输入收货人手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="checked">默认</el-checkbox>
                </el-form-item>
                <div>
                    <el-button type="primary" style="margin: 0 auto;display: block">保存收货地址</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditAddress",
        data() {
            return {
                name:'',
                checked:true,
                value: [],
                options: [{
                    value: 'zhinan',
                    label: '河南省',
                    children: [{
                        value: 'shejiyuanze',
                        label: '郑州市',
                        children: [{
                            value: 'yizhi',
                            label: '金水区'
                        }, {
                            value: 'fankui',
                            label: '反馈'
                        }, {
                            value: 'xiaolv',
                            label: '效率'
                        }, {
                            value: 'kekong',
                            label: '可控'
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '侧向导航'
                        }, {
                            value: 'dingbudaohang',
                            label: '顶部导航'
                        }]
                    }]
                },{
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }]
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .address {
        padding: 20px;
        width: 745px;
        border: 1px solid #e6e6e6;
        margin: 50px auto;
        .title {
            font-size: 16px;
            margin-bottom: 20px;
            line-height: 2;
        }
    }
</style>