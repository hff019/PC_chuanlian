import LayoutBusiness from "@/pages/LayoutBusiness"
import BusinessHome from "@/pages/Business/BusinessHome"

export default [
    {
        path: "/layout-business",
        component: LayoutBusiness,
        meta: {
            title: "购物车",
        },
        children:[
            {
                path:'/business-home',
                component: BusinessHome
            },
            
        ]
    },
   
]