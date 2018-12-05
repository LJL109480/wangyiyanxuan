<template>
  <div>
    <div class="feature">
        <div class="feature_wonderful">
          <i></i>
          更多精彩
          <i></i>
        </div>
        <div class="feature_content" v-for="(Week, index) in discover.yxWeek" :key="index">
          <img class="feature_img" v-lazy="Week.scenePicUrl" alt="">
          <div class="feature_text">{{Week.title}}</div>
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
    .feature
      background #f4f4f4
      padding  0 px2rem(40)
      .feature_wonderful
        width 100%
        height px2rem(140)
        font-size px2rem(30)
        text-align center
        line-height px2rem(140)
        i
          display inline-block
          width px2rem(260)
          height px2rem(1)
          border-bottom px2rem(1) solid #666
          opacity .2
          transform translateY(px2rem(-10))
      .feature_content
        width px2rem(642)
        height px2rem(453)
        padding px2rem(24)
        background: white;
        margin-bottom px2rem(20)
        .feature_img
          width px2rem(642)
          height px2rem(360)
        .feature_text
          font-size px2rem(28)
          width px2rem(642)
          height px2rem(33)
          padding px2rem(28) 0
          color #666
</style>
