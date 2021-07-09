import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import "./css/index.css"
import "./fonts/element-icons.ttf"
import "./fonts/element-icons.woff"
Vue.config.productionTip = false
Vue.use(Element)

// clo

new Vue({
    render: h => h(App),
}).$mount('#app')

