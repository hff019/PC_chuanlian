<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <!--尾部开始-->
        <Footer></Footer>
        <RightLayout></RightLayout>
    </div>
</template>

<script>
    import Header from "@/components/common/HeaderBusiness"
    import Footer from "@/components/common/Footer"
    import RightLayout from "@/components/common/RightLayout"//右侧导航
    export default {
        name: "LayoutBusiness",
        components:{
            Footer,
            Header,
            RightLayout,
        },
    }
</script>

<style scoped>

</style>