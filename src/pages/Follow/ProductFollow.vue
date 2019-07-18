<template>
    <div>
        <TopClxsd/>
        <div class="container">
            <div class="title">
                <span>商品收藏</span>
            </div>
            <div class="follow-item" v-for="(enItem,enIndex) in collectList" >
                <div class="follow-item-box1">
                    <router-link to="">进入厂家</router-link>
                    <span @click="deleteGoodsFn(enIndex,enItem)">取消收藏</span>
                </div>
                <router-link to="" class="follow-item-box2">
                    <img src="../../images/index/img3.jpg" class="img">
                    <p class="p1">{{enItem.entity.good_name}}</p>
                    <p class="p2">{{enItem.entity.price}}10元/{{enItem.entity.unit}}</p>
                </router-link>
                <div class="follow-item-box3">
                    <svg class="icon">
                        <use xlink:href="#icon-myEnshrine-carShopping"></use>
                    </svg>
                    <span>加入购物车</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopClxsd from "@/components/common/MyTop"
    export default {
        name: "ProductFollow",
        components:{
            TopClxsd,
        },
        data(){
            return {
                collectList:[
                    {
                        entity: {
                            good_name: "维生素",
                            cover: "",
                            price: "22",
                            unit: "件"
                        }
                    },
                    {
                        entity: {
                            good_name: "维生素",
                            cover: "",
                            price: "22",
                            unit: "件"
                        }
                    },
                    {
                        entity: {
                            good_name: "维生素",
                            cover: "",
                            price: "22",
                            unit: "件"
                        }
                    },
                    {
                        entity: {
                            good_name: "维生素",
                            cover: "",
                            price: "22",
                            unit: "件"
                        }
                    }
                ],
            }
        },
        methods:{
            deleteGoodsFn(enIndex,enItem){
                this.$alert('确定取消收藏了吗?', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        padding-bottom: 20px;
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 20px;
        font-size: 14px;
    }
    .container {
        background: #fff;
        padding: 20px;
        margin-top: 20px;
    }
    .follow-item {
        width: 228px;
        height: 335px;
        border:1px solid #e6e6e6;
        position: relative;
        overflow: hidden;
        display: inline-block;
        margin-right: 10px;
        margin-left: 10px;
        transition: .4s;
        margin-bottom: 20px;
        &:hover {
            box-shadow: 0px 0px 4px #ccc;
            .follow-item-box1 {
                display:flex
            }
        }
        &-box1 {
            position: absolute;
            width: 100%;
            height: 25px;
            background: rgb(153,153,153);
            font-size: 12px;
            text-align: center;
            display: flex;
            z-index: 9;
            text-align: center;
            line-height: 25px;
            color: #fff;
            display: none;
            a {
                width: 50%;
                color: #fff;
                border-right: 1px solid #fff;
                &:hover {
                    background: #2da2ff;
                }
            }
            span {
                text-align: center;
                width: 50%;
                cursor: pointer;
                &:hover {
                    background: #ff3b30;
                }
            }
        }
        &-box2 {
            text-align: center;
            img {
                width: 100%;
                height: 220px;
                position: relative;
            }
            .p1 {
                font-size: 14px;
                margin-top: 2px;
                color: #333;
            }
            .p2 {
                font-size: 12px;
                color: #ff3b30;
                margin-top: 10px;
            }
        }
        &-box3 {
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 34px;
            background: rgb(245,245,245);
            line-height: 34px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            &:hover {
                background: #2da2ff;
                color: #fff;
                font-weight: bold;
                svg {
                    display: none;
                }
            }
            svg {
                width: 20px;
                height: 20px;
                margin-right: 3px;
            }
        }
    }
    //媒体查询
    @media screen and (max-width:1180px) {
        .follow-item {
            width: 177px;
            height: 280px;
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 10px;
            img {
                height: 170px;
            }
        }
    }
</style>