<template>
    <div style="padding-top: 20px">
        <div class="width-container">
            <div class="item">
                <CollectClxd></CollectClxd>
            </div>
            <div class="item">
                <CollectClxd></CollectClxd>
            </div>
            <div class="item">
                <CollectClxd></CollectClxd>
            </div>
            <div class="item">
                <CollectClxd></CollectClxd>
            </div>
            <div class="item">
                <CollectClxd></CollectClxd>
            </div>
            <div class="item">
                <CollectClxd></CollectClxd>
            </div>
        </div>
    </div>
</template>

<script>
    import CollectClxd from "@/components/modules/CollectCart"
    export default {
        name: "Collect",
        components:{
            CollectClxd,
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
        .collect-cart-list {
            margin-bottom: 0px;
            margin-right: 0px;
        }
    }
    @media screen and (max-width:1180px) {
        .item {
            margin-right: 8px;
            margin-bottom: 8px;
            .collect-cart-list {
                width: 175px;
            }
        }
    }
</style>