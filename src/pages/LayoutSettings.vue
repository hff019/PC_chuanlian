<template>
    <div>
        <Header></Header>
        <div class="width-container">
            <LeftNav class="left"></LeftNav>
            <router-view class="right"></router-view>
        </div>
        <!--尾部开始-->
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "@/components/common/Header/Header2"
    import Footer from "@/components/common/Footer"
    import LeftNav from "@/components/common/SettingsLeftLayout"

    export default {
        name: "LayoutSettings",
        components:{
            Footer,
            Header,
            LeftNav
        },
    }
</script>

<style lang="scss" scoped>
    .width-container {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        .left {
            height: 400px;
        }
        .right {
            width: 1000px;
            padding: 0px 20px;
            height: auto;
            padding-bottom: 20px;
        }
    }
    //媒体查询
    @media screen and (max-width:1180px) {
        .width-container {
            .right {
                width: 760px;
            }
        }
    }
</style>