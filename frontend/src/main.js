import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:5000/api";

Vue.prototype.$http = axios;
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')