import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = "http://192.168.10.219:5000/api"
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')