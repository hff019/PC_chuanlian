<template>
    <div id="home">
        <Header></Header>
        <router-view></router-view>
        <!--尾部开始-->
        <Footer></Footer>
        <RightLayout></RightLayout>
    </div>
</template>

<script>
    import Header from "@/components/common/Header/Header"
    import Footer from "@/components/common/Footer"
    import RightLayout from "@/components/common/RightLayout"//右侧导航
    export default {
        name: "home",
        components:{
            Footer,
            Header,
            RightLayout,
        },
        data(){
            return {

            }
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>

</style>