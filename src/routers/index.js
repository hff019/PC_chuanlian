import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from "@/pages/Layout";

const router = new VueRouter({
    mode: 'hash',
    routes:[
        {
            path:'/',
            component: Layout,
        },
    ]
});


export default router;