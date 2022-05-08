<template>
  <transition name="slide">
    <div
      class="modal"
      v-show="showModal"
    >
      <div class="mask">
        <div class="modal-dialog">
          <div class="modal-header">
            <span>{{title}}</span>
            <a
              href="javascript:;"
              class="icon-close"
            ></a>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer">
            <div class="btn-footer">
              <a
                href="javascript:;"
                v-if="btnType==1"
                @click="$emit('submit')"
                class="btn"
              >{{sureText}}</a>
              <a
                href="javascript:;"
                v-if="btnType==2"
                @click="$emit('cancel')"
                class="btn"
              >{{cancelText}}</a>
              <div
                class="btn-group"
                v-if="btnType==3"
              >
                <a
                  href="javascript:;"
                  class="btn"
                  @click="$emit('submit')"
                >{{sureText}}</a>
                <a
                  href="javascript:;"
                  class="btn"
                  @click="$emit('cancel')"
                >{{cancelText}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'modal',
  props: {
    //弹窗类型：小samll，中middle，大large，表单form
    modalType: {
      type: String,
      default: 'form'
    },
    //弹窗标题
    title: String,
    // 按钮类型：1:确定 2:取消 3:确定取消
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>

<style lang="scss">
@import './../assets/scss/modal.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
</style>