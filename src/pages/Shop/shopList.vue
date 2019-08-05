<template>
    <div class="width-container">
        <div class="step">
            <div class="stepnum">
                <span>1</span>
                <p>查看购物车</p>
            </div>
            <div class="stepnum">
                <span>2</span>
                <p>填写账号订单</p>
            </div>
            <div class="stepnum">
                <span>3</span>
                <p>成功提交订单</p>
            </div>
        </div>
        <div v-if="data.shops.length>0">
            <CartsShopHeader @shopCheckedAll="shopCheckedAll" :data="data"></CartsShopHeader>
            <CartsShoplist :data="data"
                           :add-goods="addGoods"
                           :min-goods="minGoods"
                           :productCheckchange="productCheckchange"
                           @shopChecked="shopCheck"
            />
            <CartsShopFooter  :data="data" :toSubmitDataFnc="submitDataFunc"></CartsShopFooter>
        </div>
        <Empty v-else></Empty>
    </div>
</template>

<script>
    import CartsShoplist from '@/components/shopcar/CartsShopList'
    import CartsShopHeader from '@/components/shopcar/CartsFooter'
    import CartsShopFooter from '@/components/shopcar/CartFooter2'
    import Empty from '@/components/shopcar/EmptyCar'
    import { mapState,mapMutations} from 'vuex'
    import { supplierFactoryEntities } from '@/api/supplier'

    export default {
        name: "shopList",
        components: {
            CartsShoplist,
            CartsShopHeader,
            CartsShopFooter,
            Empty,
        },
        data() {
            return {
                shopId:0,
                title:'购物车',
                isEmpty: true,
                data:{
                    shops:[],
                    checked:false,
                }
            }
        },
        created(){
            this.shopId = this.$route.params.shopId ? parseInt(this.$route.params.shopId):0
            if(this.shopId){
                this.route = `/my-shop/${this.shopId}`
            }
        },
        mounted(){
            this.initData()
        },
        computed:{
            ...mapState({
                cartList: state =>state.shop.CART_LIST
            }),
        },
        methods: {
            async initData(){
                let ids = []
                let idMapQ = {}
                let cartData = this.shopId ? this.cartList[this.shopId]:this.cartList
                if(cartData){
                    if(this.shopId){
                        Object.values(cartData).forEach(item => {

                            ids.push(item.id)
                            idMapQ[item.id] = item.num
                        })
                    }else{
                        Object.values(cartData).forEach(item => {
                            Object.values(item).forEach(_item =>{
                                ids.push(_item.id)
                                idMapQ[_item.id] = _item.num
                            })

                        })
                    }
                }
                if(ids.length){
                    const { data } = await supplierFactoryEntities(ids.join(','))
                    this.data.shops = this._handleData(data,idMapQ)
                    console.log(this.data.shops)
                }
            },
            _handleData(data,map){
                let shops = {}
                data.forEach((item,index) =>{
                    item.sale_price = item.price * item.tran
                    item.num = map[item.id]
                    item.checked = false
                    item.shopId = item.supplier.id
                    item.show_unit = item.big_unit
                    if(shops[item.supplier.id]){
                        shops[item.supplier.id]['items'] = shops[item.supplier.id]['items'].concat([item])
                    }else{
                        shops[item.supplier.id] = {
                            shopId:item.supplier.id,
                            shopName: item.supplier.display_name || item.supplier.name,
                            logo:item.supplier.logo,
                            type:item.supplier.type,
                            checked:false,
                            items:[].concat([item])
                        }
                    }
                })
                return Object.values(shops)
            },
            //实现全选
            shopCheckedAll(){
                this.data.checked = !this.data.checked
                let allChecked=this.data.checked;
                this.data.shops.forEach((shop,sid)=>{
                    shop.checked=allChecked
                    shop.items.forEach((product,pid)=>{
                        product.checked=allChecked
                    })
                })
            },
            // 需要注意店铺的ID值
            shopCheck(i){

                let shop = this.data.shops[i]
                shop.checked = !shop.checked
                console.log("shop.checked:"+shop.checked)
                //获取当前店铺的选中的状态
                let shopChecked=shop.checked
                //根据当前店铺的状态控制店铺商品的状态的值
                shop.items.forEach((product,pid)=>{
                    product.checked=shopChecked
                })

                //更具店铺的状态控制全选的状态的值
                let allChecked=true;
                //循环当前的店铺的值
                this.data.shops.forEach((shop,pid)=>{
                    shop.items.forEach((product,sid)=>{
                        if(!product.checked){
                            allChecked=false;
                        }
                    })
                })
                this.data.checked=allChecked;
            },
            //商品的状态控制店铺的状态与全选的状态
            //首先要注意店铺与商品的ID的值
            productCheckchange(sid,pid){
                this.data.shops[sid].items[pid].checked = !this.data.shops[sid].items[pid].checked
                let isChecked=true;
                //循环店铺的商品
                this.data.shops[sid].items.forEach((product,kid)=>{
                    if(!product.checked){
                        isChecked=false;
                    }
                })
                this.data.shops[sid].checked=isChecked;
                //根据商品的状态改变全选反选的状态

                let isAllChecked=true;

                this.data.shops.forEach((shop,sid)=>{
                    shop.items.forEach((product,pid)=>{
                        if(!product.checked){
                            isAllChecked=false;
                        }
                    })
                })
                this.data.checked=isAllChecked;
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
            submitDataFunc(){
                let params = {
                    checkedItems:[],
                    type: 'factory'
                }

                this.data.shops.forEach(shop => {
                    shop.items.forEach(item => {
                        if(item.checked){
                            params.checkedItems.push({
                                shopId:item.shopId,
                                num:item.num,
                                id:item.id
                            })
                        }

                    })
                })

                this.$store.commit('SAVE_CONFIRM_ORDER_DATA',params)
                this.$router.push({path:'/sure-order'})
            },


        }
    }
</script>

<style lang="scss" scoped>
    .stepnum:nth-child(2) p,
    .stepnum:nth-child(3) p {
        color: rgb(153, 153, 153);
    }

    .stepnum:nth-child(2) span,
    .stepnum:nth-child(3) span {
        background: #fff;
        color: rgb(153, 153, 153);
        border: 1px solid rgb(153, 153, 153);
        width: 21px;
        height: 21px;
        line-height: 21px;
    }
</style>