<template>
    <div>
        <Header></Header>
        <div class="width-container" style="margin-bottom: 20px">
            <LeftNav class="left"></LeftNav>
            <router-view class="right"></router-view>
        </div>
        <!--尾部开始-->
        <Footer></Footer>
    </div>
</template>

<script>
    import LeftNav from "@/components/common/BusinessLeft"//右侧导航
    import Header from "@/components/common/Header/HeaderBusiness"
    import Footer from "@/components/common/Footer"
    export default {
        name: "LayoutBusinessMy",
        components:{
            LeftNav,
            Header,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    .width-container {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        .right {
            width: 1040px;
        }
    }
    //媒体查询
    @media screen and (max-width:1180px) {
        .width-container {
            .right {
                width: 770px;
            }
        }
    }
</style>