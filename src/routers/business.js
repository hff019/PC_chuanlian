import LayoutBusiness from "@/pages/LayoutBusiness"
import LayoutBusinessMy from "@/pages/LayoutBusinessMy"
import BusinessHome from "@/pages/Business/BusinessHome"
//import BusinessMyOrder from "@/pages/order/BusinessMyOrder"
import BusinessProductDetail from "@/pages/Business/ProductDetail"

export default [
    {
        path: "/layout-business",
        component: LayoutBusiness,
        meta: {
            title: "商业",
        },
        children:[
            {
                path:'/business-home',
                component: BusinessHome
            },
            {
                path:'/business-product-detail',
                component: BusinessProductDetail
            },
            
        ]
    },
    {
        path: "/layout-business-my",
        component: LayoutBusinessMy,
        meta: {
            title: "商业",
        },
        children:[
            /*
            {
                path:'/business-my-order',
                component: BusinessMyOrder
            },
             */
        ]
    },
]