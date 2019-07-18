<template>
    <div class="empty-car">
        <div class="left">
            <svg>
                <use xlink:href="#icon-shoppingCar-empty"></use>
            </svg>
        </div>
        <div class="right">
            <p>购物车空空如也~</p>
            <p>快去生产厂家看看</p>
            <div>
                <router-link to="">去添加</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EmptyCar"
    }
</script>

<style lang="scss" scoped>
    .empty-car{
        padding: 80px 0;
        display: flex;
        justify-content: center;
        .left {
            svg {
                width: 115px;
                height: 115px;
            }
        }
        .right {
            width: 240px;
            margin-left: 40px;
            p {
                font-size: 18px;
                line-height: 2;
                &:nth-child(2) {
                    font-size: 14px;
                }
            }
            >div {
                margin-top: 15px;
                a {
                    display: inline-block;
                    text-align: center;
                    height: 32px;
                    width: 209px;
                    line-height: 32px;
                    background: #2da2ff;
                    color: #fff;
                }
            }
        }
    }

</style>