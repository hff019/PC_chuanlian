import Vue from 'vue'
import { sync } from 'vuex-router-sync';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss';
import router from "./routers";
import store from "./stores";
import App from "./App.vue";

import './icons/iconfont.js';  // from http://www.iconfont.cn h5 仓库
import './styles/thems.scss'

import * as filters from "./filters.js";//过滤器
import Ajax from './api/api';
import mixin from "./mixin.js";
import lstore from "@/plugins/lstore/index";
import {socketUrl} from "./api";

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.prototype.$http = Ajax

Vue.use(lstore);
for (const k in filters) {
    Vue.filter(k, filters[k]);
}
if(!window.initUrl){
    window.initUrl = window.location.href.replace(/(\/$)/, "");
}


const app = new Vue({
    store,
    router,
    el:'#app',
    render: h => h(App)
});
export { app, router, store }
