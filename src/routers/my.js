import LayoutMy from "@/pages/LayoutMy"
import BusinessOrder from "@/pages/order/BusinessOrder";
import ProductOrder from "@/pages/order/ProductOrder";
import BusinessFollow from "@/pages/Follow/BusinessFollow";
import ProductFollow from "@/pages/Follow/ProductFollow";
//const ProductFollow = () => import(/* webpackChunkName: "my" */ '@/pages/Follow/ProductFollow.vue');


export default [
    {
        path: "/my",
        component: LayoutMy,
        meta: {
            title: "设置",
        },
        children:[
            {
                path:'/product-order',
                component: ProductOrder,
                meta:{
                    title:"产品订单"
                }
                
            },
            {
                path:'/business-order',
                component: BusinessOrder,
                meta:{
                    title:"商业订单"
                }
            },
            {
                path:'/business-follow',
                component: BusinessFollow,
            },
            {
                path:'/product-follow',
                component: ProductFollow,
            },
            ]
    },
    ]