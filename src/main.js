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


Vue.use(ElementUI);
Vue.config.productionTip = false;
//sync(store,router);


const app = new Vue({
    store,
    router,
    el:'#app',
    render: h => h(App)
});
export { app, router, store }
