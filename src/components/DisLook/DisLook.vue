<template>
  <div>
    <div class="collection_look">
      <div class="LOOK">严选LOOK</div>
      <div class="collectionLook_content">
        <img class="collectionLook_img" v-lazy="discover.yxLook.picUrl" alt="">
        <div class="collectionLook_text">
          <div class="collectionLook_head">
            <div class="head_img">
              <img class="headImg" src="https://yanxuan.nosdn.127.net/069037fe8c52e14c152d85074071fe43.jpg" alt="">
            </div>
            <div class="head_text">a******0</div>
          </div>
        </div>
        <dvi class="collectionLook_literal">{{discover.yxLook.content}}</dvi>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      discover:Object
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .collection_look
    margin-bottom px2rem(30)
    .LOOK
      width 100%
      height px2rem(120)
      text-align center
      font-size px2rem(30)
      line-height px2rem(120)
    .collectionLook_img
      width 100%
      height px2rem(750)
    .collectionLook_text
      width px2rem(730)
      height px2rem(48)
      padding px2rem(20) 0 px2rem(20) px2rem(20)
      .collectionLook_head
        width px2rem(730)
        height px2rem(38)
        .head_img
          width px2rem(48)
          height px2rem(48)
          float left
          .headImg
            width px2rem(48)
            height px2rem(48)
            border-radius 50%
        .head_text
          width px2rem(106)
          height px2rem(28)
          line-height px2rem(-28)
          font-size px2rem(30)
          margin-left px2rem(20)
          letter-spacing px2rem(5)
          float left


    .collectionLook_literal
      width px2rem(590)
      height px2rem(132)
      color #7f7f7f
      font-size px2rem(30)
      padding px2rem(10) px2rem(30) px2rem(20) px2rem(30)
      box-sizing border-box



</style>
