<template>
  <div>
    <order-header :title="title">
      <template v-slot:tip>
        <span>{{tip}} </span>
      </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar.vue'
import NavFooter from './../components/NavFooter.vue'
import OrderHeader from '../components/OrderHeader.vue'
export default {
  name: 'order',
  data () {
    return {
      title: '',
      tip: ''
    }
  },
  components: {
    ServiceBar,
    NavFooter,
    OrderHeader
  },
  mounted () {
    let path = this.$route.path
    if (path == '/order/confirm') {
      this.title = '订单确认  '
      this.tip = '请填写收货地址'
    } else if (path == 'order/list') {
      this.title = '订单列表'
      this.tip = '谨防钓鱼，了解等多》'
    } else if (path == '/order/pay') {
      this.title = '订单周'
      this.tip = '谨防钓鱼'
    }
  }
}
</script>