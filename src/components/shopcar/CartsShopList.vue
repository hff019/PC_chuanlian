<template>
    <div>
        <clxsd-carts-shop
                :key="index"
                :data="value"
                :sid="index"
                :addGoods="addGoods"
                :minGoods="minGoods"
                @shopChecked="shopCheck"
                :productCheckchange="productCheckchange"
                v-for="(value,index) in data.shops" >
        </clxsd-carts-shop>
    </div>
</template>

<script>
    import ClxsdCartsShop from './CartShop'
    export default {
        name: "CartsShopList",
        components:{
            ClxsdCartsShop,
        },
        props:["data","productCheckchange","addGoods","minGoods"],
        methods:{
            shopCheck(i){
                this.$emit("shopChecked",i)
            }
        },
    }
</script>

<style scoped>

</style>