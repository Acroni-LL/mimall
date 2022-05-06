<template>
  <div>
    <product-param>
      <template>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <div class="h"></div>
  </div>
</template>

<script>
import productParam from '../components/ProductParam.vue'
export default {

  name: 'product',
  components: {
    productParam
  }
}
</script>

<style lang='scss'>
.product {
  button {
    margin-left: 10px;
  }
}
</style>