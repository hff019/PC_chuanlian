import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import NotFound from "@/pages/notFound";

import MyRouters from "./my.js"
import ShopRouters from "./shop.js"
import SettingsRouters from "./settings.js"
import BusinessRouters from "./business.js"
import SignRouters from "./sign.js"
import HomeRouters from "./home.js"

const router = new VueRouter({
    mode: 'hash',
    routes:[
        { path: "", redirect: "/home"},
        ...HomeRouters,
        ...MyRouters,
        ...ShopRouters,
        ...SettingsRouters,
        ...BusinessRouters,
        ...SignRouters,
        { path: "*", component: NotFound }/* 404 */
    ]
});


export default router;