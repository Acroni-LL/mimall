import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

// 更具前端的跨域方式做调整   /api/a/b=>/a/b  转发去实现切割
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
//接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = responde.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
