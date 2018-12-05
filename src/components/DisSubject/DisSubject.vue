<template>
  <div>
    <div class="moment_subject">
      <div class="moment">十点一刻</div>
      <div class="swiper_moment">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(ten, index) in discover.tenfifteen"
                 :key="index">
              <div class="Dis_subject">
                <div class="present_subject">
                  <i></i>
                  今日话题
                  <i></i>
                </div>
                <div class="subject_title">{{ten.title}}</div>
                <div class="subject_desc">{{ten.desc}}</div>
                <div class="subject_participantNum">{{ten.participantNum}}参与话题</div>
              </div>
            </div>
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
      discover:Object
    },
    watch:{
      discover(){
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            direction: 'horizontal',
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
    .moment_subject
      width 100%
      height px2rem(552)
      padding 0 0 px2rem(20) px2rem(20)
      .moment
        width px2rem(730)
        height px2rem(120)
        text-align center
        line-height px2rem(120)
        font-size px2rem(32)
      .swiper_moment
        width px2rem(730)
        height px2rem(412)
        .swiper-wrapper
          display flex
          .swiper-slide
            background url('../../common/images/qipao.png') no-repeat
            background-size 100% 100%
            margin-right px2rem(30)
            display flex
            .Dis_subject
              width px2rem(552)
              height px2rem(302)
              padding px2rem(30) px2rem(40) px2rem(80)
              text-align center
              .present_subject
                font-size px2rem(26)
                color #666
                margin-top px2rem(20)
                i
                 display inline-block
                 width px2rem(30)
                 height px2rem(1)
                 background: #333;
                 transform translateY(px2rem(-10))
              .subject_title
                font-size px2rem(36)
                margin-top px2rem(50)
                color #333
                font-weight bold
              .subject_desc
                font-size px2rem(28)
                margin-top px2rem(20)
              .subject_participantNum
                font-size px2rem(26)
                margin-top px2rem(80)
</style>
