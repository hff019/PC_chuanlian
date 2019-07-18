<template>
    <div>
        <el-carousel height="450px">
            <el-carousel-item v-for="item in items" :key="item">
                <img :src="item.img" width="100%">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                items:[
                    {
                        img:'../../images/banner/banner1.png'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>