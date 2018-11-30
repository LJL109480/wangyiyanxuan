<template>
 <footer class="foot_guide border-1px">
   <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/homepage'}" @click="head_for('/homepage')">
     <span class="guide_icon">
       <i class="iconfont icon-shouye2"></i>
     </span>
     <span class="text">首页</span>
   </a>
   <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/classify'}" @click="head_for('/classify')">
     <span  class="guide_icon">
       <i class="iconfont icon-fenlei"></i>
     </span>
     <span class="text">分类</span>
   </a>
   <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/discover'}" @click="head_for('/discover')">
     <span class="guide_icon">
       <i class="iconfont icon-fangkuai"></i>
     </span>
     <span class="text">识物</span>
   </a>
   <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/shopcart'}" @click="head_for('/shopcart')">
     <span class="guide_icon">
       <i class="iconfont icon-gouwuchekong"></i>
     </span>
     <span class="text">购物车</span>
   </a>
   <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/figureinfo'}" @click="head_for('/figureinfo')">
     <span class="guide_icon">
       <i class="iconfont icon-icon-"></i>
     </span>
     <span class="text">个人</span>
   </a>
 </footer>
</template>
<script>
  export default{
    methods:{
      head_for(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .foot_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height px2rem(100)
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #333
      &.on
        color #b4282d !important
      .iconfont
        font-size px2rem(40)
    .text
      font-size px2rem(28)
      margin-top px2rem(10)
</style>
