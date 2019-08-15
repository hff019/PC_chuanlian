import LayoutBusiness from "@/pages/LayoutBusiness"
import LayoutBusinessMy from "@/pages/LayoutBusinessMy"
import BusinessHome from "@/pages/Business/BusinessHome"
import BusinessMyOrder from "@/pages/order/BusinessOrder"
import BusinessProductDetail from "@/pages/Business/ProductDetail"
import NotAptitudes from "@/pages/Aptitude/NotAptitudes";
import Chart from "@/pages/frameCharts";
import ChartBusiness from "@/pages/frameChartsBusiness";

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
                path:'/business-product-detail/:shopId/:id',
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
            {
                path:'/business-my-order',
                component: BusinessMyOrder
            },
            {
                path:'/not-company-business',
                component: NotAptitudes,
            },
        ]
    },
    {
        path: "/layout-chart",
        component: Chart,
        meta: {
            title: "表格",
        },
    },
    {
        path: "/layout-chart-business",
        component: ChartBusiness,
        meta: {
            title: "表格",
        },
    },
]