<template>
    <div class="CartFooter2">
        <div>

        </div>
        <div class="right">
            <p>已选择<span>4</span>件产品</p>
            <p>原价总计：<span>400.00</span></p>
            <p>券后总计：<span>400.00</span></p>
            <button class="btn" @click="onSubmit">{{message}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartFooter2",
        props:{
            onSubmit:{
                type:Object,
            },
            message:{
                type:String,
                default:"去结算"
            }
        },
    }
</script>

<style lang="scss" scoped>
    .CartFooter2 {
        position: relative;
        display: flex;
        justify-content: space-between;
        height: 50px;
        border: 1px solid #e5e5e5;
        line-height: 50px;
        margin-top: 20px;
        padding-left: 30px;
        .right {
            display: flex;
            p {
                font-size: 12px;
                color: #666;
                margin-right: 50px;
                span {
                    color: #ff3b30;
                    font-size: 14px;
                    font-weight: bold;
                }
            }
            .btn {
                width: 120px;
                height: 50px;
                background: #2da2ff;
                color: #fff;
                font-size: 14px;
                border: 0px;
                cursor: pointer;
                &:disabled {
                    background: #666;
                }
            }
        }
    }
</style>