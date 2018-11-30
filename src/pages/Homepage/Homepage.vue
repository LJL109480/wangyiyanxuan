<!--首页界面-->
<template>
  <div class="Home_Page">
    <header class="Home_header">
      <div class="header_top">
        <a href="javascript:;" class="Home_title">
          网易严选
        </a>
        <div class="Home_search">
          <i class="iconfont icon-shouji"></i>
          <span>搜索商品, 共19599款好物</span>
        </div>
        <div class="Home_lading">登录</div>
      </div>
      <div class="Home_nav">
        <ul class="Home_Ul" ref="HomeUrl">
          <li class="List" :class="{active:isColor===index}" v-for="(cate, index) in homepage.cateList" :key="index"  @click="PointList(index)">
            <span class="List_text">{{cate.name}}</span>
            <span :class="{link:isColor===index}"></span>
          </li>
        </ul>
      </div>
    </header>
    <section class="Home_content">
      <!--轮播图区域-->
      <HomeCarousel :homepage="homepage"/>
      <!--退货服务区-->
      <div class="Home_goods">
        <div class="Home_serve" v-for="(policy, index) in homepage.policyDescList" :key="index">
          <img :src="policy.icon" alt="">
          <span>{{policy.desc}}</span>
        </div>
      </div>
      <!--分割线-->
      <Split/>
      <!--商品制造商区域-->
      <div class="Home_manufacturing">
        <div class="Home_business">
          <span>品牌制造直供商</span>
          <img src="../../common/images/go2-3e511991d6.png" alt="">
        </div>
        <div class="manufacturers">
          <div class="Home_manufacturer">
            <img src="../../common/images/bcca932aeb9d818dcf6d3a4804f7311b.png" alt="">
            <span>CK制造商</span>
            <span>25元起</span>
          </div>
          <div class="Home_manufacturer">
            <img src="../../common/images/d1de41be1b1aa9048aa95054f3c02bc7.png" alt="">
            <span>Nine West制造商</span>
            <span>199元起</span>
          </div>
          <div class="Home_manufacturer">
            <img src="../../common/images/5ca86d574cc410772bf5117404b35c59.png" alt="">
            <span>新秀丽制造商</span>
            <span>49元起</span>
          </div>
          <div class="Home_manufacturer">
            <img src="../../common/images/a21976d9bfb4da985c64f112264cd595.png" alt="">
            <span>Birkenstock集团制造商</span>
            <span>59.9元起</span>
          </div>
        </div>
      </div>
      <Split/>
    </section>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from  'vuex'
  import Swiper  from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HomeCarousel from '../../components/HomeCarousel/HomeCarousel.vue'
  export default{
    data(){
      return{
        isColor:false,
      }
    },
    mounted(){
      this.$store.dispatch('getHomePage', () => {
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            loop:true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      })
      this.$nextTick(()=>{
        new BScroll('.Home_nav',{
          click:true,
          scrollX:true,
        })
      })
      this.$nextTick(()=>{
        new BScroll('.Home_tops',{
          click:true,
          scrollY:true
        })
      })

    },
    computed:{
      ...mapState(['homepage']),
    },
    methods:{
      PointList(index){
        this.isColor=index
      },
    },
    components:{
      HomeCarousel
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
    .Home_header
      height px2rem(148)
      bottom-border-1px(#d9d9d9)
      position fixed
      top 0
      z-index 11
      .header_top
        width 100%
        height px2rem(88)
        padding px2rem(16) px2rem(30)
        box-sizing border-box
        display flex
        align-items center
        .Home_title
          width px2rem(138)
          height px2rem(39)
          display inline-block
          font-family "宋体"
          font-size px2rem(32)
          font-weight bold
          color #333
          margin-right  px2rem(20)
        .Home_search
          width px2rem(444)
          height px2rem(56)
          border-radius px2rem(10)
          background: #F4F4F4;
          display flex
          justify-content center
          align-items center
          font-size px2rem(26)
          i
           vertical-align middle
           width px2rem(27)
           height px2rem(27)
           margin-right  px2rem(10)
          span
            color #666
            font-weight bold
        .Home_lading
          border 1px solid #b4282d
          color #b4282d
          text-align center
          line-height px2rem(30)
          width px2rem(74)
          height px2rem(39)
          margin-left px2rem(16)
          box-sizing border-box
          font-size px2rem(24)
      .Home_nav
        width 100%
        height px2rem(60)
        position absolute
        bottom  0
        left 0
        .Home_Ul
          height px2rem(60)
          width 170%
          .List
             float left
             width  px2rem(120)
             height px2rem(60)
             font-size px2rem(24)
             white-space normal
             text-align center
             position relative
             line-height px2rem(60)
             margin-right px2rem(5)
             &.active
              color #b4282d
             .List_text
                display inline-block
                padding  0 px2rem(16)
             .link
               display inline-block
               width  px2rem(80)
               height px2rem(5);
               background: #b4282d
               position absolute
               bottom 0
               left 50%
               transform translateX(-50%)

    .Home_content
      padding-top px2rem(148)
      position relative
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
      .Home_manufacturing
        width 100%
        height px2rem(586)
        .Home_business
          width 100%
          height px2rem(110)
          display flex
          justify-content center
          align-items center
          >span
           display inline-block
           font-size px2rem(36)
           margin-right px2rem(15)
          >img
            width px2rem(40)
            height px2rem(40)
        .manufacturers
          width px2rem(718)
          height px2rem(468)
          margin 0 auto
          box-sizing border-box
        .Home_manufacturer
          width px2rem(340)
          height px2rem(236)
          margin px2rem(5)
          float left
          position relative
          background: #F4F4F4;
          img
            width px2rem(340)
            height px2rem(236)
            float left
            z-index -1
          span
            display inline-block
            font-size px2rem(26);
            line-height: px2rem(40);
            text-overflow ellipsis
            white-space normal
            overflow hidden
            position absolute
            top 0
            left 0
        .Home_manufacturer :nth-child(3)
          top px2rem(40)


</style>
