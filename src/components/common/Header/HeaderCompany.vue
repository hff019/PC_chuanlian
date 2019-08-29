<template>
    <div>
        <HeaderTop/>
        <div style="background: #fff;">
            <div class="header-middle">
                <div>
                    <router-link to="/home"><img src="../../../images/logo.png"></router-link>
                </div>
                <div class="header-middle-form">
                    <form>
                        <input type="search" placeholder="请输入要搜索的关键字" style="width: 360px">
                        <button type="submit" style="width: 80px">搜全站</button>
                        <button class="btn-factory">搜本厂</button>
                    </form>
                </div>
                <div>
                    <router-link to="/my-shop">
                        <span class="shopcar">我的购物车<small>{{totle_num}}</small></span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import HeaderTop from "./HeaderTop"
    import {mapState, mapMutations} from 'vuex'

    import banner from "@/images/banner/banner1.png"

    export default {
        name: "HeaderCompany",
        components: {
            HeaderTop
        },
        data() {
            return {
                factoryId: 0,
                CompanyInfo: [],
                totle_num: 0,
                items: [
                    {
                        imgUrl: banner
                    },
                ]
            }

        },
        computed: {
            ...mapState({
                cartList: state => state.shop.CART_LIST
            }),
        },
        created() {
            this.initDataCar()
        },
        methods: {
            async initDataCar() {
                Object.values(this.cartList).forEach(item => {
                    Object.values(item).forEach(car => {
                        this.totle_num += car.num
                    })
                })
            },

        }
    }
</script>

<style lang="scss" scoped>
    .btn-factory {
        position: absolute;
        width: 75px;
        height: 34px;
        margin-left: 5px;
        background: #333;
    }

    .company-box2 {
        float: right;
        width: 280px;
        height: 410px;
        margin-top: -455px;
        z-index: 99;
        position: relative;
        background: #fff;

        &-top {
            background: url("../../../images/bg1.jpg") no-repeat center;
            display: flex;
            font-size: 18px;
            color: #fff;
            padding: 24px;

            img {
                border-radius: 3px;
            }

            p {
                padding-left: 14px;
                padding-top: 10px;
                line-height: 1.8;
                font-weight: bold;
            }
        }

        ul {
            border-bottom: 1px dashed #e6e6e6;
            line-height: 2.5;
            font-size: 16px;
            padding: 20px 34px;
            margin-bottom: 20px;
        }

        .btn1 {
            width: 106px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            display: inline-block;
            background: #e6e6e6;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 3px;
            cursor: pointer;
        }

        .active {
            background: #ff3b30;
            color: #fff;
            border-color: #ff3b30;
        }
    }

    .coupon-list {
        li {
            display: flex;
            padding: 8px 0;

            .coupon-title {
                width: 20px;
                height: 20px;
                background: #ff3b30;
                color: #fff;
                text-align: center;
                line-height: 20px;
            }

            .coupon-detail {
                padding-left: 10px;

                p {
                    &:nth-child(1) {
                        font-size: 12px;
                        color: #666;
                    }
                }
            }
        }
    }

    .shopcar {
        small {
            width: 20px;
            height: 20px;
            border-radius: 20px;
            background: #2da2ff;
            color: #fff;
            font-size: 10px;
            display: inline-block;
            text-align: center;
            line-height: 20px;
            transform: scale(.8);
            top: -6px;
            position: relative;
            left: -2px;
        }
    }

    .btn-factory {
        position: absolute;
    }
</style>