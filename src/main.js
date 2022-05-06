import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import stroe from './stroe'
// import env from './env'    //  不写./视作插件

//mock switch
// 使用require为了运行时加载，import会造成编译时加载，就会一直使用mock，无法开关
const mock = false
if (mock) {
  require('./mock/api')
}


// 更具前端的跨域方式做调整   /api/a/b=>/a/b  转发去实现切割
// axios.defaults.baseURL = '/api' //真实后台地址
axios.defaults.baseURL = 'https://mock.mengxuegu.com/mock/626fe0ee1e3d7470073a2613/example' //easy-mock地址
axios.defaults.timeout = 8000
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL


//接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    if (path != '#/index') {

      window.location.href = '/#/login'
    }
  } else {
    alert(res.msg)
    return Promise.reject(res)
  }
})

Vue.use(VueAxios, axios)
Vue(VueCookie)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
