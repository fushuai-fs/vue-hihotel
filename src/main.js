import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
// import router from 'router'
//等效于
import router from './router.js'

Vue.config.productionTip = false
new Vue({
    router:router,
    render: h => h(App),
}).$mount('#app')
