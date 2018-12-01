<template>
  <div>
    <div class="Home_carousel">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"  v-for="(focus, index) in homepage.focusList" :key="index">
            <img :src="focus.picUrl" alt="图片">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--退货服务区-->
    <div class="Home_goods">
      <div class="Home_serve" v-for="(policy, index) in homepage.policyDescList" :key="index">
        <img :src="policy.icon" alt="">
        <span>{{policy.desc}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      homepage:Object
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Home_carousel
    height px2rem(400)
    width 100%
    img
      height px2rem(400)
      width 100%
    .swiper-pagination :nth-child(n)
      width px2rem(40)
      height px2rem(10)
      border-radius 5%
  .Home_goods
    width 100%
    height px2rem(72)
    padding  0 px2rem(20)
    box-sizing border-box
    display flex
    justify-content space-around
    .Home_serve
      width px2rem(228)
      height px2rem(36)
      img
        width px2rem(30)
        height px2rem(30)
        float left
        transform translateY(px2rem(14))
      span
        display inline-block
        font-size px2rem(26)
        vertical-align middle
        margin-left px2rem(5)
</style>
