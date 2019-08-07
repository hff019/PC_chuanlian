<template>
    <div>
        <clxsd-carts-shop
                :key="index"
                :data="value"
                :sid="index"
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
        props:["data"],
        methods:{
            shopCheck(i){
                this.$emit("shopChecked",i)
            }
        },
    }
</script>

<style scoped>

</style>