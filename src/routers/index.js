import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from "@/pages/Layout";
import Header from "@/components/common/Header/Header"
import Right from "@/components/common/RightLayout"
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import Business from "@/pages/Business";
import Collect from "@/pages/Collect";
import Customized from "@/pages/Customized";
import Factory from "@/pages/Factory";

import MyRouters from "./my.js"
import ShopRouters from "./shop.js"
import SettingsRouters from "./settings.js"
import BusinessRouters from "./business.js"
import SignRouters from "./sign.js"

const router = new VueRouter({
    mode: 'hash',
    routes:[
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
            ]
        },
        ...MyRouters,
        ...ShopRouters,
        ...SettingsRouters,
        ...BusinessRouters,
        ...SignRouters,
    ]
});


export default router;