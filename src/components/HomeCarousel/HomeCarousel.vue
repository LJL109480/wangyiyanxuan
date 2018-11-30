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
  </div>
</template>
<script>
  export default{
    props:{
      homepage:{}
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
</style>
