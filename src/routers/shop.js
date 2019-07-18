import LayoutShopCar from "@/pages/LayoutShopCar"
import ShopCar from "@/pages/Shop/shopList"
import sureOrder from "@/pages/Shop/sureOrder"
import payOrder from "@/pages/Shop/payOrder"
import editAddress from "@/pages/Address/EditAddress"

import FactoryShop from "@/pages/Shop/FactoryShop"
import ProductDetail from "@/pages/Shop/ProductDetail"

export default [
    {
        path: "/shop-car",
        component: LayoutShopCar,
        meta: {
            title: "购物车",
        },
        children:[
            {
                path:'/my-shop',
                component: ShopCar
            },
            {
                path:'/sure-order',
                component: sureOrder
            },
            {
                path:'/pay-order',
                component: payOrder,
                title: "订单支付"
            },
            {
                path:'/edit-address',
                component: editAddress,
                title: "编辑地址"
            },
        ]
    },
    {
        path: "/factoty-shop",
        component: FactoryShop,
        meta: {
            title: "购物车",
        },
    },
    {
        path: "/product-detail",
        component: ProductDetail,
        meta: {
            title: "商品详情",
        },
    }
]