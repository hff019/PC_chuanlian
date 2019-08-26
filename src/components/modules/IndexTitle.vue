<template>
    <div>
        <div class="title-box width-container">
            <span class="left">{{title}}</span>
            <router-link :to="url" target="_blank" class="right">
                <span>查看全部</span>
                <svg class="icon icon1">
                    <use xlink:href="#icon-pc-home-seeAll"></use>
                </svg>
                <svg class="icon icon2">
                    <use xlink:href="#icon-go-next"></use>
                </svg>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndexTitle",
        props:{
            title:{
                type: String,
                default:'产品'
            },
            url:{
                type: String,
                default: '/home'
            }
        },
        methods: {
            handleClick($event) {
                $event.preventDefault();
                this.$router.push(this.href);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title-box {
        display: flex;
        justify-content: space-between;
        margin: 30px auto;
        margin-bottom: 18px;
        .left {
            font-size: 22px;
            line-height: 20px;
        }
        .right {
            font-size: 16px;
            color: #333;
            transition: .3s linear;
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
            }
            span {
                padding-right: 3px;
            }
            &:hover {
                color: #2da2ff;
            }
        }

    }
</style>