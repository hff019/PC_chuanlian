<template>
    <div class="lost">
        <svg>
            <use xlink:href="#icon-lost-page"></use>
        </svg>
        <p>页面走丢了~~~~~</p>
    </div>
</template>

<script>
    export default {
        name: "notFound"
    }
</script>

<style lang="scss" scoped>
    .lost {
        text-align: center;
        font-size: 22px;
        line-height: 2;
        padding-top: 14%;
        color: #999999;
        svg {
            width: 210px;
            height: 210px;
        }
    }
</style>