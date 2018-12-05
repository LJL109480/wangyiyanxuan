<template>
  <div>
    <div class="slides_width">
      <div class="swiper-container banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(ban, index) in banner" :key="index">
            <a href="javascript:;">
              <div class="Discover_yanxuan">
                <div class="Discover_activity">
                  <i></i>
                  {{ban.subTitle}}
                  <i></i>
                </div>
                <div class="Discover_official">{{ban.title}}</div>
                <div class="Discover_selling">{{ban.desc}}</div>
              </div>
              <img class="activity_img" v-lazy="ban.picUrl" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  export default{
    props:{
      banner:Array
    },
    watch:{
      discover(){
        this.$nextTick(()=>{
          new Swiper('.banner',{
            loop:true,
            speed:500,
            autoplay:true,

          })
        })
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .slides_width
    width 100%
    height px2rem(397)
    padding px2rem(24) 0
    .swiper-wrapper
      width 800%
      height px2rem(385)
      .swiper-slide
        width px2rem(750)!important
        height px2rem(389)
        margin-right px2rem(20)
        float left
        position relative
        a
          display block
          height px2rem(385)
        .activity_img
          width 100%
          height px2rem(385)
        .Discover_yanxuan
          position absolute
          top 50%
          left 50%
          width px2rem(466)
          height px2rem(198)
          transform translate(-50%, -50%)
          background white
          opacity 0.8
          text-align center
          line-height px2rem(80)
          .Discover_activity
            color gray
            font-weight bold
            font-size px2rem(26)
            i
              display inline-block
              width px2rem(30)
              height px2rem(1)
              background: #333;
              transform translateY(px2rem(-5))
        .Discover_official
          font-size px2rem(30)
          transform translateY(px2rem(-25))
          font-weight bold
        .Discover_selling
          font-size px2rem(22)
          transform translateY(px2rem(-60))
</style>
