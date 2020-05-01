import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './components/Index.vue'
import Default from './components/Default.vue'
//创建路由对象并配置路由规则
export default new VueRouter({
    routes: [
        //一个个对象
        {
            path: '/Index', component: Index,redirect:'/default',
            children: [
                {path: '/Default', component: Default},
                {path: '/Product/List', component: Default, props:{msg:'12345qwert'}}
            ]
        },
        {path: '/',redirect:'/Index'},

    ]
});