<template>
    <div class="Address">
        <div class="address-box">
            <p class="title">收货地址</p>
            <el-row  :gutter="20" v-if="addressList.length>0">
                <el-col :lg="8" :md="8"  v-for="(item,index) in addressList">
                    <div class="address-item">
                        <img src="../../images/settings/line2.png" width="100%" class="img1"  v-if="!item.checked">
                        <img src="../../images/settings/line1.png" width="100%" class="img2"  v-if="item.checked">
                        <span class="sp1"  @click="chooseAddress(index)">设为默认地址</span>
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
                            <router-link to="">修改</router-link>
                        </div>
                        <svg class="icons" v-if="item.checked">
                            <use xlink:href="#icon-positionMeanger-chosed"></use>
                        </svg>
                    </div>
                </el-col>
            </el-row>
            <Empty  :message="'您还没有添加收货地址, 请在下方添'" v-else/>
        </div>
        <div class="address-box">
            <p class="title">编辑收货地址</p>
            <addressClxd/>
        </div>
    </div>
</template>

<script>
    import addressClxd from "@/components/common/Address"
    import Empty from "@/components/Empty"
    export default {
        name: "Address",
        components: {
            addressClxd,
            Empty
        },
        data(){
            return{
                is_checked:false,
                addressList:[
                    {
                        consignee:"张无忌",
                        tel:"17739382930",
                        is_default:1,
                        full_address:"河南省郑州市金水区",
                        checked:true
                    },
                    {
                        consignee:"张无忌",
                        tel:"17739382930",
                        is_default:1,
                        full_address:"河南省郑州市金水区",
                        checked:false
                    }
                ]
            }
        },

        methods: {
            //删除地址
            async deleteAddressFn(index, item){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.addressList.splice(index,1)
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
        }
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
        .sp1 {
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