<template>
  <div class="header">
    <div class="nav-header">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">aaaa</a>
          <a href="javascript:;">bbbb</a>
          <a href="javascript:;">cccc</a>
          <a href="javascript:;">dddd</a>
        </div>
        <div class="topbar-user">
          <a
            href="javascript:;"
            v-if="username"
          >{{username}}</a>
          <a
            href="javascript:;"
            v-if="username"
            @click="login"
          >登录</a>
          <a
            href="javascript:;"
            v-if="!username"
          >这册</a>
          <a href="">我的订单</a>
          <a
            href="javascript:;"
            class="my-cart"
            @click="goToCart()"
          ><span class="icon-cart"></span> 购物车{{cartCount}}</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item,index) in phoneList"
                  :key="index"
                >
                  <a
                    v-bind:href="'/#/product'+item.id"
                    :alt='item.subtitle'
                    target="_blank"
                  >
                    <div class="pro-img">
                      <img
                        src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/058d9dd1b50f46e2a745238b345d5d5d~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.image?"
                        alt=""
                      >
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price|currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Red米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视 </span>
            <div class="children">
              <ul>
                <li class="product">
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div class="pro-img">
                      <img
                        src="'/imgs/nav-img/nav-3-1.jpg"
                        alt=""
                      >
                    </div>
                    <div class="pro-name">小米壁画电视</div>
                    <div class="pro-price">¥6999</div>
                  </a>
                </li>
                <li class="product">
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div class="pro-img">
                      <img
                        src="'/imgs/nav-img/nav-3-2.jpg"
                        alt=""
                      >
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">¥6999</div>
                  </a>
                </li>
                <li class="product">
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div class="pro-img">
                      <img
                        src="'/imgs/nav-img/nav-3-3.jpg"
                        alt=""
                      >
                    </div>
                    <div class="pro-name">小米电视4A 32因村</div>
                    <div class="pro-price">¥699</div>
                  </a>
                </li>
                <li class="product">
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div class="pro-img">
                      <img
                        src="'/imgs/nav-img/nav-3-4.jpg"
                        alt=""
                      >
                    </div>
                    <div class="pro-name">小米壁画电视</div>
                    <div class="pro-price">¥6999</div>
                  </a>
                </li>
                <li class="product">
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div class="pro-img">
                      <img
                        src="'/imgs/nav-img/nav-3-5.jpg"
                        alt=""
                      >
                    </div>
                    <div class="pro-name">小米壁画电视</div>
                    <div class="pro-price">¥6999</div>
                  </a>
                </li>
                <li class="product">
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div class="pro-img">
                      <img
                        src="'/imgs/nav-img/nav-3-6.png"
                        alt=""
                      >
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <input
            type="text"
            name="keyword"
          >
          <a href="javascript:;"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import { mapState } from 'vuex'
export default {
  name: 'nav-header',
  data () {
    return {
      phoneList: []
    }
  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '¥' + val.toFixed(2) + '原'
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012'
        }
      }).then((res) => {
        if (res.list.length > 6) {
          this.phoneList = res.list.slice(0, 6)
        }
      })
    },
    goToCart () {
      this.$router.push('/cart')
    },
    logout () {
      this.axios.post('/user/logout').then(() => {
        Message.success('登出成功')
        this.$cookie.set('userId', '', { expires: '-1' })// -1 立即过期 
        this.$store.dispatch('saveUserName', '')
        this.$store.dispatch('saveCartCount', '0')
      })
    }
  },
  mounted () {
    this.getProductList()
    let params = this.$route.params
    if (params && params.from == 'login') {
      this.getCartCount()
    }
  },
  computed: {
    // username () {
    //   return this.$stor.state.username
    // },
    // cartCount () {
    //   return this.$store.state.cartCount
    // },
    ...mapState(['username', 'cartCount'])  //是上面的简写 
  }
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss'; //  ./表示当前    /表示根目录
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-left: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #f60;
        text-align: center;
        color: #fff;
        .icon-cart {
          @include bgImg(16px, 12px, './imgs/icon-cart-checked.png');
          margin-right: 0;
        }
      }
    }
  }
}
.nav-header {
  .container {
    position: relative;
    height: 112px;
    @include flex();
    .header-logo {
      display: inline-block;
      width: 55px;
      height: 55px;
      background-color: #f60;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;
        &:before {
          @include bgImg(55px, 55px, '/imgs/mi-logo.png', 55px);
          transition: margin 0.2s;
        }
        &:after {
          content: '';
          display: inline-block;
          width: 55px;
          height: 55px;
          background: url(’/imgs/mi-home.png‘) no-repeat center;
          background-size: 55px;
        }
        :hover {
          margin-left: -55px;
          transition: margin 0.2s;
        }
      }
    }
    .header-menu {
      display: inline-block;
      width: 643px;
      padding-left: 209px;
      .item-menu {
        display: inline-block;
        color: #333;
        font-weight: bold;
        font-size: 16px;
        line-height: 112px;
        margin-left: 20px;
        .span {
          cursor: pointer;
        }
        &:hover {
          color: $colorA;
          .children {
            height: 220px;
            opacity: 1;
          }
        }
        .children {
          position: absolute;
          top: 112px;
          left: 0;
          width: 1226px;
          height: 0;
          opacity: 0;
          border-top: 1px #e5e5e5 solid;
          box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          overflow: hidden;
          transition: all 0.5s;
          background-color: #fff;
          .product {
            position: relative;
            float: left;
            width: 16.6%;
            height: 220px;
            font-size: 12px;
            line-height: 12px;
            z-index: 10;
            a {
              display: inline-block;
            }
            img {
              width: auto;
              height: 111px;
              margin-top: 26px;
            }
            .pro-img {
              width: 137px;
            }
            .pro-name {
              font-weight: bold;
              margin-top: 19px;
              margin-bottom: 8px;
              color: #333;
            }
            .pro-name {
              color: $colorA;
            }
            &:before {
              content: '';
              position: absolute;
              top: 28px;
              right: 0;
              border-left: 1px solid $colorF;
              width: 1px;
              height: 100px;
            }
            &:last-child:before {
              display: none;
            }
          }
        }
      }
    }
    .header-search {
      width: 319px;
      .wrapper {
        height: 50px;
        border: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        input {
          border: none;
          box-sizing: border-box;
          border-right: 1px solid #e0e0e0;
          width: 264px;
          height: 50px;
          padding-left: 14px;
        }
        a {
          @include bgImg(18px, 18px, '/imgs/icon-search.png');
          margin-left: 17px;
        }
      }
    }
  }
}
</style>
