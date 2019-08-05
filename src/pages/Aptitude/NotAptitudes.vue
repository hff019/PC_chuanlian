<template>
    <div class="notA">
        <img src="../../images/settings/img2.png" width="117" height="116" />
        <p>公司信息资质未审核通过，暂无权限查看</p>
    </div>
</template>

<script>
    export default {
        name: "NotAptitudes"
    }
</script>

<style lang="scss" scoped>
        .notA {
            text-align: center;
            font-size: 16px;
            color: #999999;
            line-height: 2.6;
            padding-bottom: 3%;
            background: #fff;
            img {
                margin-top: 10%;
            }
            a{
                color: #26a2ff;
                padding: 0 5px;
            }
        }
</style>