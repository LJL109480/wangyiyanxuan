<template>
  <div>
    <div class="disGroom">
      <div class="recommend_books">{{discover.zhen.name}}</div>
      <div class="recommend_content">
        <div class="img_books">
          <img class="books_img" v-lazy="discover.zhen.Item[0].picUrl" alt="">
          <div class="books">
            <div class="books_pic">
              <div class="books_text">{{discover.zhen.Item[0].title}}</div>
              <div class="books_price">{{discover.zhen.Item[0].priceInfo}}元起</div>
            </div>
            <div class="sentiment_books">{{discover.zhen.Item[0].subTitle}}</div>
          </div>
        </div>
        <div class="recommend_choice">
          <div class="choice_content ellipsis">
            <div class="choice_what ellipsis">{{discover.zhen.Item[1].title}}</div>
            <div class="choice_special ellipsis">{{discover.zhen.Item[1].subTitle}}</div>
          </div>
          <div class="choice_img">
            <img class="choiceImg" v-lazy="discover.zhen.Item[1].picUrl" alt="">
            <div class="dinglei_tuijian">{{discover.zhen.Item[1].typeName}}</div>
          </div>
        </div>
        <div class="recommend_choice">
          <div class="choice_content ellipsis">
            <div class="choice_what ellipsis">{{discover.zhen.Item[2].title}}</div>
            <div class="choice_special ellipsis">{{discover.zhen.Item[2].subTitle}}</div>
          </div>
          <div class="choice_img">
            <img class="choiceImg" v-lazy="discover.zhen.Item[2].picUrl" alt="">
            <div class="dinglei_tuijian">{{discover.zhen.Item[2].typeName}}</div>
          </div>
        </div>
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
  .disGroom
    padding 0 px2rem(30) px2rem(40) px2rem(30)
    box-sizing border-box
    .recommend_books
      width px2rem(690)
      height px2rem(120)
      text-align center
      line-height px2rem(120)
      font-size px2rem(30)
    .img_books
      width px2rem(689)
      height px2rem(589)
      border 1px solid #666
      .books_img
        width px2rem(694)
        height px2rem(386)
      .books
        width px2rem(657)
        height px2rem(153)
        padding px2rem(24) px2rem(20) px2rem(67) px2rem(20)
        .books_pic
          width px2rem(648)
          height px2rem(43)
          margin-bottom px2rem(40)
          .books_text
            font-size px2rem(40)
            float left
          .books_price
            font-size px2rem(40)
            float right
      .sentiment_books
        font-size px2rem(26)
        color #666


    .recommend_choice
      width px2rem(690)
      height px2rem(274)
      margin-bottom xp2rem(40)
      border 1px solid #eee
      display flex
      margin-top px2rem(20)
      .choice_content
        width px2rem(358)
        height px2rem(272)
        padding 0 px2rem(30) 0 px2rem(20)
        position relative
        .choice_what
          font-size px2rem(38)
          width px2rem(358)
          height px2rem(38)
          position absolute
          top px2rem(90)
          left px2rem(30)
        .choice_special
          font-size px2rem(24)
          position absolute
          top px2rem(160)
          left px2rem(30)
          width px2rem(300)
          height px2rem(24)
          color #666


      .choice_img
        width px2rem(280)
        height px2rem(272)
        position relative
        .choiceImg
          width px2rem(280)
          height px2rem(272)
        .dinglei_tuijian
          font-size px2rem(26)
          height px2rem(36)
          background white
          border-radius px2rem(20)
          position absolute
          top px2rem(10)
          left px2rem(10)
          text-align center
          line-height px2rem(36)
          color #666
          padding 0 px2rem(16)
          margin 0 px2rem(1)

</style>
