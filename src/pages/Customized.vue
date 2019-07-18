<template>
    <div style="padding-top: 20px">
        <div class="width-container">
            <div class="item">
                <CustomizedClxd></CustomizedClxd>
            </div>
            <div class="item">
                <CustomizedClxd></CustomizedClxd>
            </div>
            <div class="item">
                <CustomizedClxd></CustomizedClxd>
            </div>
            <div class="item">
                <CustomizedClxd></CustomizedClxd>
            </div>
            <div class="item">
                <CustomizedClxd></CustomizedClxd>
            </div>
            <div class="item">
                <CustomizedClxd></CustomizedClxd>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomizedClxd from "@/components/modules/CustomizedCart"
    export default {
        name: "Customized",
        components:{
            CustomizedClxd
        }
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
        .customized-cart-list {
            margin-bottom: 0px;
            margin-right: 0px;
        }
    }
    @media screen and (max-width:1180px) {
        .item {
            margin-right: 7px;
            .customized-cart-list {
                margin-right: 0px;
                width: 176px;
            }
        }
    }
</style>