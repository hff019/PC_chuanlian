<template>
    <div  v-bind:style="styleObject">
        <Header></Header>
        <div class="width-container" style="padding-top: 20px">
            <GoodList style="border: 1px solid #f1f1f1"/>
        </div>
        <!--尾部开始-->
        <Footer></Footer>
        <RightLayout></RightLayout>
    </div>
</template>

<script>
    import Header from "@/components/common/HeaderCompany"
    import Footer from "@/components/common/Footer"
    import RightLayout from "@/components/common/RightLayout"//右侧导航
    import GoodList from "@/components/modules/ProductCart.vue";
    export default {
        name: "FactoryShop",
        components:{
            Footer,
            Header,
            RightLayout,
            GoodList
        },
        data(){
            return {
                styleObject: {
                    minHeight: document.documentElement.clientHeight+'px',
                    background: '#fff'
                }
            }
        },
    }
</script>

<style scoped>

</style>