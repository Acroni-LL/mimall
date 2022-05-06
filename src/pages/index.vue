<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul
                  v-for="(item,index) in menuList"
                  :key="index"
                >
                  <li
                    v-for="(item,j) in item"
                    :key="j"
                  >
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img
                        :src="sub?sub.img:'/imgs/item-box-1.png'"
                        alt=""
                      >
                      {{sub?sub.name:'xiaomi 99'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide
            v-for="(item,index) in slideList"
            :key="index"
          >
            <a :href="'/#/product/'+item.id"><img src="item.img"></a>
          </swiper-slide>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          :href="'/#?product?'+item.id"
          v-for="(item,index) in adsList"
          :key="index"
        >
          <img
            v-lazy="item.img"
            alt=""
          >
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img
            v-lazy="'/imgs/banner-1.png'"
            alt=""
          >
        </a>
      </div>
      <div class="product-box">
        <div class="container">
          <h2>手机</h2>
          <div class="wrapper">
            <div class="banner-left">
              <a href="/#/product/35">
                <img
                  v-lazy="'/imgs/mix-alpha.jpg'"
                  alt=""
                >
              </a>
            </div>

          </div>
        </div>
        <div class="list-box">
          <div
            class="list"
            v-for="(item,index) in phoneList"
            :key="index"
          >
            <div
              class="item"
              v-for="(item ,j) in arr"
              :key="j"
            ><span :class="{'new-pro':j%2==0}">新品</span>
              <div class="item-img">
                <img
                  src="item.mainImage"
                  alt=""
                >
              </div>
              <div class="item-info">
                <h3>{{item.name}}</h3>
                <p>{{item.subtitle}} </p>
                <p
                  class="price"
                  @click="addCart(item.id)"
                >{{item.price}}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      :showModal="false"
      @submit="goToCart"
      @cancel="showModal=false"
    >
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import Modal from './../components/Modal.vue'
import ServiceBar from "./../components/ServiceBar.vue"
import 'swiper/css'
export default {
  name: 'index',
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  },
  date () {
    const onSwiper = (swiper) => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [{
        id: '42',
        img: '/imgs/slider/slider-1.jpg'
      },
      {
        id: '42',
        img: '/imgs/slider/slider-2.jpg'
      },
      {
        id: '42',
        img: '/imgs/slider/slider-3.jpg'
      }],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米cc'
          }, {
            id: 30,
            img: '/imgs/item-box-2.png',
            name: '小米cc'
          }, {
            id: 30,
            img: '/imgs/item-box-3.jpg',
            name: '小米cc'
          }, {
            id: 30,
            img: '/imgs/item-box-4.jpg',
            name: '小米cc'
          }
        ], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        }, {
          id: 33,
          img: '/imgs/ads/ads-2.jpg'
        }, {
          id: 33,
          img: '/imgs/ads/ads-3.png'
        }, {
          id: 33,
          img: '/imgs/ads/ads-4.jpg'
        },
      ],
      phoneList: [[1, 1, 1, 1], [1, 1, 1, 1]]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then((res) => {
        res.list = res.list.slice(6, 14)
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
      })
    },
    addCart (id) {
      this.showModal = true
      return
      /*this.axios.post('/carts', {
        productId: id,
        selected: true
      }).then(() => {

      }).catch(() => {
        this.showModal = true
      })*/
    },
    goToCart () {
      this.$router.push('/cart')
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: '';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            right: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-box {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  @include bgImg(22px, 22px, '//imgs/icon-cart-hover.png');
                  content: '';
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>