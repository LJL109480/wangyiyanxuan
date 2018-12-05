<!--识物界面-->
<template>
  <div class="Discover">
    <header class="Discover_header border-1px">
      <div class="Discover_home" @click="$router.replace('/homepage')">
        <i class="iconfont icon-shouye2"></i>
      </div>
      <div class="Discover_wangyi"></div>
      <div class="Discover_icon">
        <i class="icon_img"></i>
      </div>
      <div class="icon_gouwu">
        <i class="iconfont icon-gouwuchekong"></i>
      </div>
    </header>
    <div class="Discover_sec">
      <section class="Discover_content">
        <!--轮播-->
        <DisSlide :banner="discover.banner"/>
        <!--严选导航-->
        <DisArticle :column="discover.column"/>
        <Split/>
        <!--为你推荐-->
        <DisGroom :recommend="discover.recommend"/>
        <Split/>
        <!--话题-->
        <DisSubject :discover="discover"/>
        <Split/>
        <!--甄选推荐-->
        <DisSelect :discover="discover"/>
        <Split/>
        <!--甄选ok-->
        <DisLook :discover="discover"/>
        <Split/>
        <Disfeature :discover="discover"/>
      </section>
    </div>

  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import DisSlide from '../../components/DisSlide/DisSlide.vue'
  import DisArticle from '../../components/DisArticle/DisArticle.vue'
  import DisGroom from '../../components/DisGroom/DisGroom.vue'
  import DisSubject from '../../components/DisSubject/DisSubject.vue'
  import DisSelect from '../../components/DisSelect/DisSelect.vue'
  import DisLook from '../../components/DisLook/DisLook.vue'
  import Disfeature from '../../components/Disfeature/Disfeature.vue'
  export default{
    mounted(){
      this.$store.dispatch('getdiscover',()=>{
        new BScroll('.Discover_sec',{
          click:true,
          scrollY:true
        })
      })
    },
    computed:{
      ...mapState(['discover'])
    },
    components:{
      DisSlide,
      DisArticle,
      DisGroom,
      DisSubject,
      DisSelect,
      DisLook,
      Disfeature

    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Discover
    position relative
    .Discover_header
      width 100%
      height px2rem(100)
      position fixed !important
      top 0
      background white;
      z-index 11
      bottom-border-1px(#666)
      display flex
      justify-content space-around
      align-items center
      .Discover_home
        position absolute
        top px2rem(25)
        left px2rem(20)
      .icon-shouye2
        font-size px2rem(58)
      .Discover_wangyi
        width px2rem(172)
        height px2rem(54)
        background url("../../common/images/indexLogo-11d65342f9.png") no-repeat
        background-size px2rem(175)
      .Discover_icon
        width px2rem(146)
        height px2rem(68)
        position absolute
        top px2rem(27)
        right px2rem(30)
        .icon_img
          display inline-block
          width px2rem(50)
          height px2rem(50)
          background url('../../common/images/hd-s342878591a-9af1a97852.png') no-repeat 0 px2rem(-340)
      .icon_gouwu
        position absolute
        top px2rem(25)
        right px2rem(23)
        .icon-gouwuchekong
          font-size px2rem(58)
          color #666
    .Discover_sec
      width 100%
      height px2rem(500)
      padding-top px2rem(650)
      margin-top px2rem(100)
      overflow hidden
      .Discover_content
        width 100%
        position absolute
        top 0



</style>
