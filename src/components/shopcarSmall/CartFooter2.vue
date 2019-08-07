<template>
    <div class="CartFooter2">
        <div>

        </div>
        <div class="right">
            <p>已选择<span>{{ data | _cartNum}}</span>件产品</p>
            <p>原价总计：<span>{{ data | _cartCount}}</span></p>
            <p>券后总计：<span>{{ data | _cartCount}}</span></p>
            <button class="btn" :class="hasActive ? 'active':''"  @click="onSubmit">{{message}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartFooter2",
        props:{
            data:{},
            toSubmitDataFnc:{
                type: Function,
                default:()=>{}
            },
            message:{
                type:String,
                default:"去结算"
            }
        },
        computed:{
            hasActive(){
                let active = false
                this.data.shops.forEach(shop =>{
                    shop.items.forEach(item => {
                        if(item.checked){
                            active = true
                            return
                        }
                    })
                })
                return active
            }
        },
        filters:{
            _cartCount(data){
                let totalPrice = 0
                data.shops.forEach(shop =>{
                    shop.items.forEach(item => {
                        if(item.checked) totalPrice += item.sale_price * item.num
                    })
                })
                return totalPrice.toFixed(2)
            },
            _cartNum(data){
                let totalNum = 0
                data.shops.forEach(shop =>{
                    shop.items.forEach(item => {
                        if(item.checked) totalNum += item.num
                    })
                })
                return totalNum
            },
        },
        methods: {
            onSubmit() {
                if(this.hasActive){
                    this.toSubmitDataFnc()
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .CartFooter2 {
        position: relative;
        display: flex;
        justify-content: space-between;
        height: 50px;
        border: 1px solid #e5e5e5;
        line-height: 50px;
        margin-top: 20px;
        padding-left: 30px;
        .right {
            display: flex;
            p {
                font-size: 12px;
                color: #666;
                margin-right: 50px;
                span {
                    color: #ff3b30;
                    font-size: 14px;
                    font-weight: bold;
                }
            }
            .btn {
                width: 120px;
                height: 50px;
                background: #ccc;
                color: #fff;
                font-size: 14px;
                border: 0px;
                cursor: pointer;
                &:disabled {
                    background: #666;
                }
            }
            .active{
                background: #26A2FF;
                color:#fff
            }
        }
    }
</style>