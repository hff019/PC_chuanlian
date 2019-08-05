<template>
    <div class="total-title">
        <div>
            <svg class="icon" @click="$emit('shopCheckedAll')">
                <use :xlink:href="`#icon-check-${data.checked ? '1' : '0' }`"></use>
            </svg>
            <span>全选</span>
        </div>
        <div>
            单价
        </div>
        <div>
            数量
        </div>
        <div>
            小计
        </div>
        <div>
            操作
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartsFooter",
        props:{
            data:{
            },
        },
    }
</script>

<style lang="scss" scoped>
    .total-title {
        height: 40px;
        background: #f5f5f5;
        border: 1px solid #e5e5e5;
        line-height: 40px;
        font-size: 12px;
        padding: 0 5px;
        margin-top: 30px;
        div {
            position: relative;
            float: left;
            width: 15%;
            text-align: center;

            &:nth-child(1) {
                width: 40%;
                text-align: left;
                display: flex;
                align-items: center;
                svg {
                    cursor: pointer;
                    margin-right: 4px;
                }
            }
        }
    }
</style>