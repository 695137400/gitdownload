import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import './css/index.css'
Vue.config.productionTip = false
Vue.use(Element)

// clo

new Vue({
    render: h => h(App),
}).$mount('#app')


