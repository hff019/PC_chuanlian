<template>
    <div  v-bind:style="styleObject">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "@/components/common/Header3"
    import Footer from "@/components/common/Footer"

    export default {
        name: "LayoutShopCar",
        components:{
            Footer,
            Header,
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