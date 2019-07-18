<template>
    <div>
            <ClxsdCartsShop v-for="(value,index) in data.shops"  />
    </div>
</template>

<script>
    import ClxsdCartsShop from './CartShop'
    export default {
        name: "CartsShopList",
        components:{
            ClxsdCartsShop,
        },
        props:{
            data:{
                type:Object,
                default:function(){
                    return {

                    }
                },
            },

        },
        methods:{
            shopCheck(i){
                this.$emit("shopChecked",i)
            },
        },

    }
</script>

<style scoped>

</style>