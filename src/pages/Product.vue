<template>
    <div id="Product" style="padding-top: 20px">
        <div class="width-container">
            <div class="item" v-for="(item,index) in product_items">
                <ProductClxd  :data="item" :factory-id="factoryId"></ProductClxd>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductClxd from "@/components/modules/ProductCart"
    export default {
        name: "Product",
        components:{
            ProductClxd,
        },
        data() {
            return {
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
    }
</script>

<style lang="scss" scoped>

    .item {
        margin-right: 11px;
        border:1px solid #f1f1f1;
        display: inline-block;
        margin-bottom: 13px;
        &:nth-child(5n) {
            margin-right: 0px;
        }
        .product-cart-list {
            margin-bottom: 0px;
            margin-right: 0px;
        }
    }
    @media screen and (max-width:1180px) {
        .item {
            margin-right: 8px;
        }
    }
</style>