<template>
    <div>
        <ul class="list">
            <li><b>我的订单</b> </li>
            <li v-bind:class="{ active:1 == current}"  v-on:click="addClass(1)">
                <span  @click="authToRouter('/business-order')">产品订单</span>
            </li>
            <li v-bind:class="{ active:2 == current}"  v-on:click="addClass(2)">
                <span  @click="authToRouter('/factory-order')">工业订单</span>
            </li>
            <li><router-link to="">集采订单</router-link> </li>
            <li><router-link to="">发布订单</router-link> </li>
            <li><p class="line"></p></li>
            <li><b>我的收藏</b> </li>
            <li v-bind:class="{ active:5 == current}"  v-on:click="addClass(5)"><router-link to="/business-follow" >厂家收藏</router-link> </li>
            <li v-bind:class="{ active:6 == current}"  v-on:click="addClass(6)"><router-link to="/product-follow">产品收藏</router-link> </li>
            <li><p class="line"></p></li>
            <li><b>我的资产管理</b> </li>
            <li><router-link to="">联贝管理</router-link> </li>
            <li><router-link to="">联票余额</router-link> </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "LeftLayout",
        data(){
            return{
                current:1
            }
        },
        methods:{
            addClass:function(index){
                this.current=index;
            },
            authToRouter(router){
                console.log(11)
                const userInfo = this.$store.state.CURRENTUSER;
                if(userInfo.shop_supplier){
                    this.$router.push(router);
                }else{
                    this.$message({
                        message: '当前用户未认证',
                        type: 'warning'
                    });
                    this.$router.push("/not-company-my");
                }
            }
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    .list {
        text-align: center;
        padding: 20px 10px;
        width: 109px;
        background: #fff;
        border-radius: 5px;
        font-size: 14px;
        list-style: none;
        li {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            list-style: none;
            b {
                font-size: 14px;
                margin-bottom: 16px;
                display: block;
            }
            a ,span{
                color: #333;
                font-size: 12px;
                margin-bottom: 14px;
                display: block;
                cursor: pointer;
                &:hover {
                    color: #2da2ff;
                }
            }
            .line {
                height: 1px;
                border-bottom: 1px dashed #f1f1f1;
                margin-bottom: 13px;
            }

        }
    }
    .active {
        a{
            color: #2da2ff !important;
        }
    }
    //媒体查询
    @media screen and (max-width:1180px) {
        .list {
            width: 90px;
            padding: 20px 5px;
        }
    }
</style>