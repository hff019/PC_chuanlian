<template>
    <div class="BusinessLeft">
        <router-link to="/business-my-order">
            <svg class="icon1">
                <use xlink:href="#icon-global-home-inCenter"></use>
            </svg>
            <svg class="icon2">
                <use xlink:href="#icon-global-home-inCenter-1"></use>
            </svg>
            <p>个人中心</p>
        </router-link>
        <router-link to="" style="background: #2da2ff;color: #fff">
            <svg>
                <use xlink:href="#icon-global-home-shoppingCar"></use>
            </svg>
            <p>购物车</p>
            <span>11</span>
        </router-link>
        <router-link to="">
            <svg class="icon1">
                <use xlink:href="#icon-global-home-myActivity"></use>
            </svg>
            <svg class="icon2">
                <use xlink:href="#icon-global-home-myActivity-1"></use>
            </svg>
            <p>我的活动券</p>
        </router-link>
        <router-link to="">
            <svg class="icon1">
                <use xlink:href="#icon-global-home-myCollect"></use>
            </svg>
            <svg class="icon2">
                <use xlink:href="#icon-global-home-myCollect-1"></use>
            </svg>
            <p>产品收藏</p>
        </router-link>
        <router-link to="">
            <svg class="icon1">
                <use xlink:href="#icon-global-home-myMessage"></use>
            </svg>
            <svg class="icon2">
                <use xlink:href="#icon-global-home-myMessage-1"></use>
            </svg>
            <p>我的消息</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "BusinessLeft"
    }
</script>

<style lang="scss" scoped>
    .BusinessLeft {
        position: fixed;
        right: 0px;
        height: 405px;
        width: 84px;
        top:50%;
        margin-top: -225px;
        background: #fff;
        z-index: 99;
        overflow:hidden;
        &::-webkit-scrollbar {
            display: none;
            width: 0px;
            height: 0px;
            background: #fff;
        }
        >a {
            padding:12px 0 15px;
            display: block;
            text-align: center;
            border-bottom: 1px solid #e6e6e6;
            color: #333;
            position: relative;
            svg {
                width: 28px;
                height: 28px;
                margin-bottom: 10px;
            }
            span {
                position: absolute;
                background: #fff;
                color: #2da2ff;
                font-size: 10px;
                width: 15px;
                height: 15px;
                line-height: 15px;
                border-radius: 100%;
                top:10px;
                margin-left: 4px;
            }
            .icon1 {
                display: inline-block;
            }
            .icon2 {
                display: none;
            }
            &:hover {
                .icon1 {
                    display: none;
                }
                .icon2 {
                    display: inline-block;
                }
                color: #2da2ff;
                font-weight: bold;
            }
        }
    }
</style>