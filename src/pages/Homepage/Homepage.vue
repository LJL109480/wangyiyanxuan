<!--首页界面-->
<template>
  <div class="Home_Page">
    <Homeheader :homepage="homepage"/>
    <div class="HomeCon">
      <section class="Home_content">
        <!--轮播图区域-->
        <HomeCarousel :homepage="homepage"/>
        <!--分割线-->
        <Split/>
        <!--商品制造商区域-->
        <div class="Home_manufacturing">
          <div class="Home_business">
            <span>品牌制造直供商</span>
            <img src="../../common/images/go2-3e511991d6.png" alt="">
          </div>
          <div class="manufacturers" >
            <div class="Home_manufacturer"v-for="(tag, index) in homepage.tagList" :key="index" v-if="index<4">
              <img :src="tag.picUrl" alt="">
              <span>{{tag.name}}</span>
              <span>{{tag.floorPrice}}元起</span>
            </div>
          </div>
        </div>
        <Split/>
        <!--新品发布区域-->
        <Homelaunch :homepage="homepage"/>
        <Split/>
        <!--严选限时-->
        <div class="Home_collection">
          <div class="collection_compulsory">
           <div class="collection_text">严选限时购</div>
           <div class="compulsory_time">
             <span class="hour">{{hour}}</span>
             <span class="colon">:</span>
             <span class="hour">{{minute}}</span>
             <span class="colon">:</span>
             <span class="hour">{{second<10?'0'+second:second}}</span>
           </div>
           <div class="start">
             下一场&nbsp;&nbsp;12:00&nbsp;&nbsp;开始
           </div>
          </div>
          <div class="special">
            <img  class="food_img" src="../../common/images/33148f20c32525c6dcb9f33577957e77 (1).png" alt="">
            <div class="price">
              <span class="price_text">￥42</span>
              <span>￥49</span>
            </div>
          </div>
        </div>
        <Split/>
        <div>
          <img src="../../common/images/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="" style="display: block">
        </div>
        <Split/>
        <div class="Home_subject">
          <div class="subject_choice">
            <span>专题精选</span>
            <img src="../../common/images/go2-3e511991d6.png" alt="">
          </div>
          <div class="subject_carousel">
            <div class="carousel_cargo">
              <div class="subject_topic">
                <div class="kitchen" v-for="(topic, index) in homepage.topicList" :key="index">
                  <img class="topic_img" v-lazy="topic.itemPicUrl" alt="">
                  <div class="topic_title">
                    <div>{{topic.title}}</div>
                    <span>{{topic.priceInfo}}元起</span>
                  </div>
                  <div class="topic_subtitle">{{topic.subtitle}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Split/>
        <!--居家-->
        <HomeSynthe :cateList="homepage.cateList"/>
        <Split/>
        <div class="Home_bottom">
            <div class="edition">
              <div class="computer">电脑版</div>
              <div class="phone">下载App</div>
          </div>
          <p class="copyright">
            <span>网易公司版权所有 © 1997-2018 </span>
            <span>食品经营许可证：JY13301080111719</span>
          </p>
        </div>
      </section>
    </div>

  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from  'vuex'
  import Swiper  from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HomeCarousel from '../../components/HomeCarousel/HomeCarousel.vue'
  import Homelaunch from '../../components/Homelaunch/Homelaunch.vue'
  import Homeheader from '../../components/Homeheader/Homeheader.vue'
  import HomeSynthe from '../../components/HomeSynthe/HomeSynthe.vue'
  export default{
    data(){
      return{
        hour:11,
        minute:30,
        second:59,
      }
    },
    mounted(){
      this.$store.dispatch('getHomePage', () => {
        this.$nextTick(()=>{
          new BScroll('.HomeCon',{
            click:true,
            scrollY:true,
          })
        })
        this.$nextTick(()=>{
          new BScroll('.Home_nav',{
            click:true,
            scrollX:true,
          })
        })
        this.$nextTick(()=>{
          new BScroll('.carousel_cargo',{
            click:true,
            scrollX:true,
          })

        })
      })
      this.init()
    },
    methods:{
      init(){
        setInterval(()=>{
          this.second--
          if( this.second===0){
            this.minute--
            this.second=59
          }
          if(this.minute===0){
            this.hour--
            this.second=30
          }
        },1000)
      }
    },
    computed:{
      ...mapState(['homepage'])
    },
    components:{
      HomeCarousel,
      Homelaunch,
      Homeheader,
      HomeSynthe
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Home_Page
    position relative
    .HomeCon
      width 100%
      height px2rem(500)
      padding-top px2rem(520)
      margin-top px2rem(148)
      overflow hidden
      .Home_content
        width 100%
        position absolute
        top 0
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
            margin 0  px2rem(16) px2rem(16) px2rem(16)
            box-sizing border-box
          .Home_manufacturer
            width px2rem(340)
            height px2rem(236)
            margin 0 px2rem(8)
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
      .Home_collection
        width px2rem(750)
        height px2rem(317)
        padding px2rem(29) px2rem(55)
        box-sizing border-box
        display flex
        justify-content space-between
        .collection_compulsory
          width px2rem(238)
          height px2rem(218)
          margin-top px2rem(50)
          .collection_text
            font-size px2rem(36)
            line-height px2rem(36)
            letter-spacing px2rem(11)
            color black
            font-weight 550
            margin-bottom px2rem(30)
          .compulsory_time
            display flex
            margin-bottom px2rem(30)
            >span
              display inline-block
              font-size px2rem(38)
            .hour
              width px2rem(61)
              height px2rem(55)
              text-align center
              line-height px2rem(55)
              color white
              background: #000
            .colon
              font-weight bold
              margin 0 px2rem(10)
          .start
            font-size px2rem(25 )
            height px2rem(25)
            color #666
            font-weight bold
        .special
          width px2rem(317)
          height px2rem(317)
          position relative
          .food_img
            width px2rem(317)
            height px2rem(317)
          .price
            width px2rem(96)
            height px2rem(96)
            background: #F59524
            font-size px2rem(26)
            color white
            border-radius 50%
            text-align center
            line-height px2rem(30)
            position absolute
            bottom px2rem(35)
            right px2rem(10)
            .price_text
              display inline-block
              margin-top px2rem(15)
      .Home_subject
        width 100%
        height px2rem(567)
        .subject_choice
          width 100%
          height px2rem(110)
          display flex
          justify-content center
          align-items center
          span
            display inline-block
            font-size px2rem(36)
            margin-right px2rem(10)

      .subject_carousel
        width 100%
        height px2rem(421)
        padding 0 0 px2rem(36) px2rem(36)
        box-sizing border-box
        .carousel_cargo
          width 100%
          height px2rem(421)
          .subject_topic
            width 256%
            height px2rem(421)
            .kitchen
              width px2rem(600)
              height px2rem(421)
              padding-right px2rem(15)
              box-sizing border-box
              float left
              .topic_img
                width px2rem(579)
                height px2rem(322)
              .topic_title
                margin px2rem(20) 0
                display flex
                justify-content space-between
                div
                  font-size px2rem(30)
                  color #333
                  font-weight bold
                  vertical-align middle
                span
                  display inline-block
                  color red
                  font-size px2rem(32)
                  vertical-align middle
              .topic_subtitle
                font-size px2rem(26)
                color #666


      .Home_bottom
        width 100%
        height px2rem(266)
        padding px2rem(54) px2rem(20) px2rem(28) px2rem(20)
        box-sizing border-box
        background: #414141;
        display flex
        flex-direction column
        justify-content center
        align-items center
      .edition
        width 100%
        height px2rem(63)
        display flex
        justify-content center
        .computer
          width px2rem(172)
          height px2rem(62)
          border px2rem(5) solid #666
          color white
          font-size px2rem(32)
          text-align center
          line-height px2rem(58)
          margin-right px2rem(50)
        .phone
          width px2rem(172)
          height px2rem(62)
          border px2rem(5) solid #666
          color white
          font-size px2rem(32)
          text-align center
          line-height px2rem(58)
      .copyright
        width 100%
        height px2rem(84)
        display flex
        flex-direction column
        justify-content center
        align-items center
        margin-top px2rem(50)
        span
          font-size px2rem(28)
          color #999999
          margin-top px2rem(10)


</style>
