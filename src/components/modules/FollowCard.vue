<template>
    <div class="follow-item">
        <div class="follow-item-box1">
            <router-link to="">进入厂家</router-link>
            <span @click="cancelFollow()">取消收藏</span>
        </div>
        <router-link to="" class="follow-item-box2">
            <img src="../../images/index/img3.jpg" class="img">
            <p class="p1">{{data.entity.good_name}}</p>
            <p class="p2">10元/瓶</p>
        </router-link>
        <div class="follow-item-box3">
            <svg class="icon">
                <use xlink:href="#icon-myEnshrine-carShopping"></use>
            </svg>
            <span>加入购物车</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FollowCard",
        props:["data","cancelFollow"]
    }
</script>

<style lang="scss" scoped>
    .follow-item {
        width: 220px;
        height: 335px;
        border:1px solid #e6e6e6;
        position: relative;
        overflow: hidden;
        &:hover {
            box-shadow: 0px 0px 4px #ccc;
        }
        &-box1 {
            position: absolute;
            width: 100%;
            height: 25px;
            background: rgb(153,153,153);
            font-size: 12px;
            text-align: center;
            display: flex;
            z-index: 9;
            text-align: center;
            line-height: 25px;
            color: #fff;
            a {
                width: 50%;
                color: #fff;
                border-right: 1px solid #fff;
                &:hover {
                    background: #2da2ff;
                }
            }
            span {
                text-align: center;
                width: 50%;
                cursor: pointer;
                &:hover {
                    background: #ff3b30;
                }
            }
        }
        &-box2 {
            text-align: center;
            img {
                width: 100%;
                height: 220px;
                position: relative;
            }
            .p1 {
                font-size: 14px;
                margin-top: 2px;
                color: #333;
            }
            .p2 {
                font-size: 12px;
                color: #ff3b30;
                margin-top: 10px;
            }
        }
        &-box3 {
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 34px;
            background: rgb(245,245,245);
            line-height: 34px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            &:hover {
                background: #2da2ff;
                color: #fff;
                font-weight: bold;
                svg {
                    display: none;
                }
            }
            svg {
                width: 20px;
                height: 20px;
                margin-right: 3px;
            }
        }
    }
</style>