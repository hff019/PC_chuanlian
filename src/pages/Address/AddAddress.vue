<template>
    <div>
        <div>
            <el-form ref="form"  label-width="80px">
                <el-form-item label="收货人">
                    <el-input  placeholder="请输入收货人姓名" v-model="consignee"></el-input>
                </el-form-item>
                <el-form-item label="收货地址">
                    <el-select v-model="province" style="width:167px;margin-right: 25px;" @change="getCityData(province)">
                        <el-option v-for="option in options" :value="option.name">
                            {{ option.name }}
                        </el-option>
                    </el-select>
                    <el-select v-model="city" style="width:167px;margin-right: 25px;"  @change="getdistrictData(city)" :disabled="city=='市辖区'">
                        <el-option v-for="option in cityData" :value="option.name">
                            {{ option.name }}
                        </el-option>
                    </el-select>
                    <el-select v-model="district" style="width:167px;margin-right: 25px;">
                        <el-option v-for="option in districtData" :value="option.name">
                            {{ option.name }}
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input type="text" v-model="address" placeholder="请输入详细地址"></el-input>
                </el-form-item>
                <el-form-item label="联系方式">
                    <el-input type="tel" v-model="tel" placeholder="请输入收货人手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="switch_checked" @change="turn">设为默认地址</el-checkbox>
                </el-form-item>
                <div>
                    <el-button type="primary" style="margin: 0 auto;display: block"  @click="onSave">保存收货地址</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    import AddressArea from "@/plugins/json/pca-code.json"
    import { addAddress } from "@/api/address.js"
    export default {
        name: "EditAddress",
        data() {
            return {
                consignee: '', //货人姓名
                tel: null, //手机号
                province: null, //省
                city: null, //市
                district: null, //区
                address: null, //详细街道
                is_default: 1, //是否是默认地址1是默认,0不是
                switch_checked: true,
                region: null, //省市区
                finished: false,
                regionVisible: false,
                addressId:0,
                options:AddressArea,
                cityData:[],
                districtData:[]
            };
        },
        methods: {
            getCityData(val){
                this.city = ''
                this.district = ''
                AddressArea.forEach(city => {
                    if(city.name == val){
                        if(city.children.length == 1){
                            let cityA = city.children
                            cityA.forEach( item => {
                                this.city = "市辖区"
                                this.districtData = item.children
                            })
                        }else {
                            this.cityData = city.children
                        }

                    }
                })
            },
            getdistrictData(val){
                this.district = ''
                AddressArea.forEach(city => {
                    let cityD = city.children
                    cityD.forEach( item => {
                        if(item.name === val) {
                            this.districtData = item.children
                        }
                    })
                })
            },
            turn: function() {
                if(this.switch_checked == true) {
                    this.is_default = 1
                } else {
                    this.is_default = 0
                }
            },
            onSave() {
                //1. get data

                const {
                    consignee,
                    tel,
                    province,
                    city,
                    district,
                    address,
                    is_default,
                    region
                } = this.$data

                //2. validate
                if(consignee == '') {
                    this.$message({
                        message: '姓名不能为空',
                        type: 'warning'
                    });
                    return
                }
                if(tel == '') {
                    this.$message({
                        message: '请填写手机号',
                        type: 'warning'
                    });
                    return
                } else {
                    var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                    if(!reg.test(this.tel)) {
                        this.$message({
                            message: '请填写正确的手机号',
                            type: 'warning'
                        });
                        return
                    }
                }
                if(region == '') {
                    this.$message({
                        message: '请填写收货地址',
                        type: 'warning'
                    });
                    return
                }
                if(address == '') {
                    this.$message({
                        message: '请填写收货地址',
                        type: 'warning'
                    });
                    return
                }
                //3. contruct data post
                const params = {
                    consignee,
                    tel,
                    province,
                    city,
                    district,
                    address,
                    is_default,
                }
                //put
                //4. send http request
                addAddress(params).then(response => {
                    this.$router.go(0)
                    this.$message({
                        message: '添加成功',
                        type: 'success'
                    });
                })
                .catch(res => {
                    Toast('出现异常，请重试');
                })

            },
        },
        created() {

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