<template>
  <div>
    <div class="Discover_article">
      <div class="swiper-containers">
        <div class="swiper-wrappers">
          <div class="swiper-slides" v-for="(columns, index) in column" :key="index">
            <div class="Discover_slides">
              <img class="cargo_img" v-lazy="columns.picUrl" alt="">
              <div class="groom_article">
                <span>{{columns.articleCount}}</span>
              </div>
              <div class="Discover_public">{{columns.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default{
    props:{
      column:Array
    },
    mounted(){

    },
    watch:{
   discover(){
        this.$nextTick(()=>{
          new BScroll('.swiper-containers',{
            click:true,
            scrollX:true

          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Discover_article
    width 100%
    height px2rem(226)
    padding px2rem(32) 0  px2rem(28) px2rem(30)
    .swiper-containers
      width 100%
      height px2rem(226)
      .swiper-wrappers
       width 200%
       height px2rem(220)
       .swiper-slides
         float left
         .Discover_slides
          width px2rem(164) !important
          height px2rem(220)
          position relative
          margin-left px2rem(20)
          .cargo_img
            width px2rem(164)
            height px2rem(164)
            background: #666;
            margin-bottom px2rem(20)
          .groom_article
            font-size px2rem(24)
            position absolute
            top 0
            right 0
            color white
          .Discover_public
            font-size px2rem(24)
            width px2rem(175)
            height px2rem(30)
            text-align center



</style>
