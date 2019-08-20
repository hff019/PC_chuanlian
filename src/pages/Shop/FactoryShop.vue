<template>
    <div  v-bind:style="styleObject">
        <Header></Header>
        <div v-if="items.length>0" v-loading="loading">
        <div class="width-container" style="padding-top: 20px">
            <GoodList style="border: 1px solid #f1f1f1" v-for="(item,index) in items" :data="item" :factory-id="factoryId"/>
        </div>
        </div>
        <Empty v-else/>
        <!--尾部开始-->
        <Footer></Footer>
        <RightLayout></RightLayout>
    </div>
</template>

<script>
    import Header from "@/components/common/Header/HeaderCompany"
    import Footer from "@/components/common/Footer"
    import RightLayout from "@/components/common/RightLayout"//右侧导航
    import GoodList from "@/components/modules/ProductCart.vue";
    import Empty from "@/components/Empty";
    import {mapState} from 'vuex'
    import {supplierEntities} from "@/api/supplier"
    //import {getFollowList, deleteFollow, SaveFollow} from "@/api/follow.js"
    export default {
        name: "FactoryShop",
        components:{
            Footer,
            Header,
            RightLayout,
            GoodList,
            Empty
        },
        data(){
            return {
                styleObject: {
                    minHeight: document.documentElement.clientHeight+'px',
                    background: '#fff'
                },
                factoryId: null, //工厂ID
                items:[],
                loading:true
            }
        },
        created() {
            this.factoryId = parseInt(this.$route.params.id);
            this.initData()
        },
        methods: {
            //初始化时获取基本数据
            async initData() {
                const {
                    data
                } = await supplierEntities(this.factoryId)
                this.items = data
                this.loading = false
            }
        }
    }
</script>

<style scoped>

</style>