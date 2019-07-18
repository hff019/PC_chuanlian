<template>
    <div>
        <div class="title-box width-container">
            <span>{{title}}</span>
            <router-link :to="url" target="_blank">
                查看全部
                <svg class="icon">
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
        padding: 30px 0;
        padding-bottom: 18px;
        span {
            font-size: 22px;
        }
        a {
            font-size: 16px;
            color: #333;
            &:hover {
                color: #2da2ff;
            }
        }

    }
</style>