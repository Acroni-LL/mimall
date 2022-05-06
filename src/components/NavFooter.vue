<template>
  <div class="footer">
    <div class="footer-logo">
      <img
        src="/imgs/ogo-footer.png"
        alt=""
      >
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a
        href="https://juejin.cn/post/6844904009040396296#heading-5"
        target="_blank"
      >ACRONI</a><span>|</span>
      <a
        href="https://juejin.cn/post/6844904009040396296#heading-5"
        target="_blank"
      >ACRONI</a><span>|</span>
      <a
        href="https://juejin.cn/post/6844904009040396296#heading-5"
        target="_blank"
      >ACRONI</a><span>|</span>
      <a
        href="https://juejin.cn/post/6844904009040396296#heading-5"
        target="_blank"
      >ACRONI</a>
    </div>
    <div class="copyright">Copyright 2022 <span class="domain">mi.future.com <span>All Rights Reserved</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang='scss'>
.footer {
  height: 234px;
  width: 1226px;
  border-top: 4px solid #f60;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    .img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: #f60;
    }
  }
}
</style>