<template>
    <div class="Address">
        <div class="address-box">
            <p class="title">收货地址</p>
            <el-row  :gutter="20" v-if="addressList.length>0">
                <el-col :lg="8" :md="8"  v-for="(item,index) in addressList">
                    <div class="address-item">
                        <img src="../../images/settings/line2.png" width="100%" class="img1"  v-if="item.is_default ==0">
                        <img src="../../images/settings/line1.png" width="100%" class="img2"  v-if="item.is_default ==1">
                        <span class="sp1"  @click="chooseAddress(index)" v-if="item.is_default != 1">设为默认地址</span>
                        <span class="sp2" v-if="item.is_default == 1">默认地址</span>
                        <ul class="address-item-list">
                            <li>
                                <svg class="icon">
                                    <use xlink:href="#icon-positionMeanger-name"></use>
                                </svg>
                                <span>{{item.consignee}}</span>
                            </li>
                            <li>
                                <svg class="icon">
                                    <use xlink:href="#icon-positionMeanger-position"></use>
                                </svg>
                                <span>{{item.full_address}}</span>
                            </li>
                            <li>
                                <svg class="icon">
                                    <use xlink:href="#icon-positionMeanger-phine"></use>
                                </svg>
                                <span>{{item.tel}}</span>
                            </li>
                        </ul>
                        <div class="address-item-box1">
                            <span  @click="deleteAddressFn(index,item)">删除</span>
                            <router-link :to="`/address-edit/${item.id}`">修改</router-link>
                        </div>
                        <svg class="icons" v-if="item.is_default == 1">
                            <use xlink:href="#icon-positionMeanger-chosed"></use>
                        </svg>
                    </div>
                </el-col>
            </el-row>
            <Empty :message="'您还没有添加收货地址, 请在下方添'" v-else style="padding-top: 30px"/>
        </div>
        <div class="address-box">
            <p class="title">新增收货地址</p>
            <addressClxd/>
        </div>
    </div>
</template>

<script>
    import addressClxd from "./AddAddress"
    import Empty from "@/components/Empty"
    import {mapState, mapMutations} from 'vuex'
    import {getAddressList, deleteAddress} from "@/api/address.js"
    export default {
        name: "Address",
        components: {
            addressClxd,
            Empty
        },
        data(){
            return{
                is_checked:false,
                addressList:[]
            }
        },

        methods: {
            ...mapMutations(['CHOOSE_ADDRESS']),
            async _initData() {
                let {data} = await getAddressList()
                console.log(data)
                if (data instanceof Array && data.length) {
                    if (this.choose) {
                        data.forEach((item, i) => {
                            data[i].checked = false
                        })
                    }
                    this.addressList = data
                }
            },
            //删除地址
            async deleteAddressFn(index, item){
                this.$confirm('此操作将永久删除地址, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.addressList.splice(index,1)
                    deleteAddress(item.id)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
            chooseAddress(i){
                this.addressList.forEach((address,index) => {
                    if(i === index ){
                        this.addressList[index].checked = true
                       // this.CHOOSE_ADDRESS({address})
                    }else{
                        this.addressList[index].checked = false
                    }
                })
            }
        },
        created() {
            if (!!this.$route.query.choose) {
                this.choose = true
            }
            this._initData();
        },
    }
</script>

<style lang="scss" scoped>
    .Address {

    }
    .address-box {
        background: #fff;
        border-radius: 5px;
        margin-bottom: 20px;
        padding: 0 20px;
        padding-bottom: 20px;
    }
    .title {
        padding: 20px 0;
        font-size: 14px;
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 20px;
    }
    .address-item {
        width: 100%;
        height: 145px;
        border:1px solid #e6e6e6;
        border-top: 0px;
        position: relative;
        margin-bottom: 15px;
        &:hover {
            .sp1 {
                display: inline-block;
            }
            .address-item-box1 {
                display: block;
            }
        }
        .img1,.img2 {
            position: absolute;
            top:0px;
        }
        .sp1,.sp2 {
            position: absolute;
            padding: 0 10px;
            background: #2da2ff;
            color: #fff;
            font-size: 10px;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            top:2px;
            line-height: 17px;
            right: 15px;
            opacity: .8;
            cursor: pointer;
            display: none;
            &:hover {
                opacity: 1;
            }
        }
        .sp2 {
            display: block;
            opacity: 1;
        }
        &-list {
            padding: 10px;
            li {
                list-style: none;
                border-bottom: 1px dashed #f1f1f1;
                padding: 10px 0;
                font-size: 12px;
                display: flex;
                svg {
                    width: 6%;
                }
                span {
                    padding-left: 5px;
                    width: 90%;
                }
            }
        }
        .icons {
            position: absolute;
            width: 30px;
            height: 30px;
            right: 0px;
            bottom: 0px;
        }
        &-box1 {
            position: absolute;
            bottom: 10px;
            right: 40px;
            background:#fff;
            display: none;
            a,span {
                border: 1px solid #e6e6e6;
                padding: 3px 8px;
                margin-left: 10px;
                cursor: pointer;
                color: #999999;
                &:hover {
                    background: #2da2ff;
                    color: #fff;
                }
            }
        }
    }
</style>