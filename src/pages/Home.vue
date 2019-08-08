<template>
    <div>
        <div style="background: #fff;padding-bottom: 30px">
            <div class="block width-container">
                <el-carousel height="450px">
                    <el-carousel-item v-for="item in items" :key="item">
                        <img src="../images/index/banner.png">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!--广告位一-->
            <div class="add-contianer width-container">
                <el-row :gutter="20">
                    <el-col :span="8"><img src="../images/index/add.png" width="100%"></el-col>
                    <el-col :span="8"><img src="../images/index/add4.png" width="100%"></el-col>
                    <el-col :span="8"><img src="../images/index/add5.png" width="100%"></el-col>
                </el-row>
            </div>
            <div class="width-container">
                <img src="../images/index/add3.png" style="width: 100%">
            </div>
        </div>
        <!--产品-->
        <div class="gray-bg">
            <!--产品-->
            <TitleCell :title="'产品'" :url="'/product'"></TitleCell>
            <div class="product width-container">
                <div class="add">
                    <img src="../images/index/add2.png" width="100%">
                </div>
                <div class="product-list">
                    <div class="home-list">
                        <ProductClxd v-for="(item,index) in product_items" :data="item" :factory-id="factoryId"></ProductClxd>
                    </div>
                </div>
            </div>
            <div class="width-container">
                <img src="../images/index/add3.png" style="width: 100%">
            </div>
            <!--订制-->
            <TitleCell :title="'订制'" :url="'/customized'"></TitleCell>
            <div class="customized width-container">
                <div class="add">
                    <div>
                        <img src="../images/index/add1.png" width="100%">
                    </div>
                    <div>
                        <img src="../images/index/add1.png" width="100%">
                    </div>
                </div>
                <div class="list">
                    <div class="home-list">
                        <CustomizedClxd></CustomizedClxd>
                    </div>
                </div>
            </div>
            <div class="width-container">
                <img src="../images/index/add3.png" style="width: 100%">
            </div>
            <!--集采-->
            <TitleCell :title="'集采'" :url="'/collect'"></TitleCell>
            <div class="width-container customized ">
                <div class="add">
                    <div>
                        <img src="../images/index/add1.png" width="100%">
                    </div>
                    <div>
                        <img src="../images/index/add1.png" width="100%">
                    </div>
                </div>
                <div class="list">
                    <div class="home-list">
                        <CollectClxd></CollectClxd>
                    </div>
                    <div class="home-list">
                        <CollectClxd></CollectClxd>
                    </div>
                    <div class="home-list">
                        <CollectClxd></CollectClxd>
                    </div>
                    <div class="home-list">
                        <CollectClxd></CollectClxd>
                    </div>
                    <div class="home-list">
                        <CollectClxd></CollectClxd>
                    </div>
                </div>
            </div>
            <div class="width-container">
                <img src="../images/index/add3.png" style="width: 100%">
            </div>
            <!--生产厂商-->
            <TitleCell :title="'生产厂商'" :url="'/factory'"></TitleCell>
            <div class="width-container" style="margin-bottom: 25px">
                <FactoryClxd v-for="(item,index) in suppliers" :data="item"
                :key="`factory_${index}`" style="display: inline-block"></FactoryClxd>
            </div>
            <div class="width-container">
                <img src="../images/index/add3.png" style="width: 100%">
            </div>
            <!--商业公司-->
            <TitleCell :title="'商业公司'" :url="'/business'"></TitleCell>
            <div class="width-container">
                <business-clxd v-for="(item,index) in business" :data="item" class="item" :entryBusinessShop = "entryBusinessShop" style="display: inline-block"></business-clxd>
            </div>
        </div>
    </div>
</template>

<script>

    import ProductClxd from "@/components/modules/ProductCart"
    import CustomizedClxd from "@/components/modules/CustomizedCart"
    import CollectClxd from "@/components/modules/CollectCart"
    import FactoryClxd from "@/components/modules/FactoryCart"
    import BusinessClxd from "@/components/modules/BusinessCart"

    import TitleCell from "@/components/modules/IndexTitle"

    import {mapState} from "vuex";
    import {findNearBySuppliers} from '@/api/supplier.js';
    import {adList} from "@/api/ad";

    export default {
        name: "Home",
        components: {
            ProductClxd,
            CustomizedClxd,
            CollectClxd,
            FactoryClxd,
            BusinessClxd,
            TitleCell,
        },
        data() {
            return {
                suppliers: {}, //生产厂商
                business:[], //商业公司
                items: [
                    '../images/index/banner.png'
                ],
                swipers:[],
                factoryId:0,
                product_items:[
                    {
                        id:1,
                        img_cover:'../images/index/banner.png',
                        good_name:"维生素",
                        spec:"100盒/件",
                        tran:"100",
                        unit:"盒",
                        big_unit:"件",
                        price:"5",
                        sale_num:1,
                    }
                ]
            }
        },
        methods: {
            async initData(params) {
                const {
                    data
                } = await findNearBySuppliers(params)
                this.business = data.items
            },
            async initData2(params2) {
                const {dataAdd} = await adList({channel: 'app', space: 'home-business'})
                this.swipers = dataAdd
                console.log(dataAdd)
                findNearBySuppliers(params2)
                .then(({data = []}) => {
                    this.suppliers = data.items
                    console.log(this.suppliers)
                })
            },
            entryBusinessShop(item) {
                this.$store.commit('SAVE_CURRENT_BUSINESS_SHOP', item.id)
                this.$store.commit('SAVE_CURRENT_BUSINESS_SHOP_DATA', item)
                this.$router.push('/business-home')
            },
        },
        created() {
            var params = {
                page: 1,
                type: 'business',
                limit: 10,
            }
            this.initData(params)

            var params2 = {
                page: 1,
                type: 'factory',
                limit: 10
            }
            this.initData2(params2)
        },
    }
</script>

<style lang="scss" scoped>
    .gray-bg {
        // background: $gray-color;
        background: #f5f5f5;
    }

    .product {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;

        .add {
            width: 226px;
        }

        .product-list {
            width: 950px;

        }
    }

    .customized {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;

        .add {
            width: 226px;

            > div {
                margin-bottom: 12px;
            }
        }

        .list {
            width: 950px;
        }
    }

    .el-carousel {
        overflow-x: inherit;
    }

    .add-contianer {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    //媒体查询 宽度920px
    @media screen and (max-width: 1180px) {
        .product {
            .add {
                width: 175px;
            }

            .product-list {
                width: 735px;
            }
        }
        .customized {
            .add {
                width: 175px;

                > div {
                    margin-bottom: 10px;
                }
            }

            .list {
                width: 735px;
            }
        }

    }

    .home-list {
        margin-right: 15px;
        display: inline-block;

        &:nth-child(4n) {
            margin-right: 0px;
        }
    }
</style>