<template>
    <div class="width-container">
        <div v-if="data.shops.length>0">
            <CartsShopHeader></CartsShopHeader>
            <CartsShoplist :data="data"
                           :addGoods="addGoods"
                           :minGoods="minGoods"
                           :productCheckchange="productCheckchange"
                           @shopChecked="shopCheck"/>
            <CartsShopFooter :onSubmit = "onSubmit"></CartsShopFooter>
        </div>
        <Empty v-else></Empty>
    </div>
</template>

<script>
    import CartsShoplist  from '@/components/shopcar/CartsShopList'
    import CartsShopHeader  from '@/components/shopcar/CartsFooter'
    import CartsShopFooter  from '@/components/shopcar/CartFooter2'
    import Empty  from '@/components/shopcar/EmptyCar'
    export default {
        name: "shopList",
        components:{
            CartsShoplist,
            CartsShopHeader,
            CartsShopFooter,
            Empty,
        },
        data(){
            return {
                shopId:0,
                title:'购物车',
                isEmpty: true,
                data:{
                    shops:[
                        {}
                    ],
                }
            }
        },
        methods:{
            onSubmit(){
                this.$router.push('/sure-order')
            },
            shopCheckedAll(){

            },
            productCheckchange(sid,pid){

            },
            shopCheck(i){

            },
            //要注意店铺与商品的ID
            addGoods(sid,pid){
                this.data.shops[sid].items[pid].num++;
            },
            //进行商品减的操作
            minGoods(sid,pid){
                if(this.data.shops[sid].items[pid].num>1){
                    this.data.shops[sid].items[pid].num--;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>