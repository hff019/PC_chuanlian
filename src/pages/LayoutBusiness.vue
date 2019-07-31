<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <!--尾部开始-->
        <RightLayout/>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "@/components/common/Header/HeaderBusiness"
    import Footer from "@/components/common/Footer"
    import RightLayout from "@/components/common/BusinessRight"//右侧导航
    export default {
        name: "LayoutBusiness",
        components:{
            Footer,
            Header,
            RightLayout,
        },
    }
</script>