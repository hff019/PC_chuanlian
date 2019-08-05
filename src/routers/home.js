import Layout from "@/pages/Layout";
import Header from "@/components/common/Header/Header"
import Right from "@/components/common/RightLayout"
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import Business from "@/pages/Business";
import Collect from "@/pages/Collect";
import Customized from "@/pages/Customized";
import Factory from "@/pages/Factory";
import Develop from "@/pages/develop";

export default [
    {
        path:'/',
        component:Layout,
        children:[
            {
                path:'/home',
                component: Home
            },
            {
                path:'/product',
                component: Product
            },
            {
                path:'/business',
                component: Business
            },
            {
                path:'/collect',
                component: Collect
            },
            {
                path:'/customized',
                component: Customized
            },
            {
                path:'/factory',
                component: Factory
            },
            {
                path:'/develop',
                component: Develop
            },
        ]
    },
]