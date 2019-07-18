<template>
    <div class="empty">
        <img src="../images/address_empty.png" width="120">
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "Empty",
        props:{
            message:{
                type:String,
                default:"~~空空如也~~"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .empty {
        padding-top: 170px;
        text-align: center;
        font-size: 14px;
        color: #808080;
        margin-top: 35px;
        p {
            padding-top: 30px;
            padding-bottom: 20px;
        }
    }
</style>