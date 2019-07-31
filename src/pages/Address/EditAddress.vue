<template>
    <div style="background: #fff">
        <div class="address">
            <p class="title">修改收货地址</p>
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
                    <el-select v-model="city" style="width:167px;margin-right: 25px;"  @change="getdistrictData(city)">
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
                    <el-checkbox v-model="switch_checked" @change="turn">默认</el-checkbox>
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
    import { getAddress,updateAddress } from '@/api/address.js'
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
                districtData:[],
                id:0
            };
        },
        methods: {
            async _initData(){
                if(this.addressId){
                    const { data } = await getAddress(this.addressId)
                    //console.log(data)
                    this.consignee =data.consignee
                    this.tel = data.tel
                    this.region = data.full_address
                    this.province = data.province
                    this.city = data.city
                    this.district = data.district
                    this.address = data.address
                    this.is_default = data.is_default
                    if(data.is_default){
                        this.switch_checked = true
                    }else {
                        this.switch_checked = false
                    }
                }
            },
            getCityData(val){
                this.city = ''
                this.district = ''
                AddressArea.forEach(city => {
                    if(city.name == val){
                        this.cityData = city.children
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
                let id = this.addressId
                updateAddress(id,params).then(response => {
                    this.$router.push("/address")
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                })
                .catch(res => {
                    Toast('出现异常，请重试');
                })

            },
        },
        created() {
            this.addressId = this.$route.params.addressId;
            this._initData();
        },
    }
</script>

<style lang="scss" scoped>
    .address {
        .title {
            font-size: 16px;
            margin-bottom: 20px;
            line-height: 3;
            border-bottom: 1px solid #f1f1f1;
        }
    }
</style>