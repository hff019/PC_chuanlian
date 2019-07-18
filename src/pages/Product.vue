<template>
    <div id="Product" style="padding-top: 20px">
        <div class="width-container">
            <div class="item">
                <ProductClxd></ProductClxd>
            </div>
            <div class="item">
                <ProductClxd></ProductClxd>
            </div>
            <div class="item">
                <ProductClxd></ProductClxd>
            </div>
            <div class="item">
                <ProductClxd></ProductClxd>
            </div>
            <div class="item">
                <ProductClxd></ProductClxd>
            </div>
            <div class="item">
                <ProductClxd></ProductClxd>
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