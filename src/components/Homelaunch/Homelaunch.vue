<template>
  <div>
    <div class="Home_launch">
      <div class="Home_arrival">
        <div class="arrival_text1">新品首发</div>
        <div class="arrival_text2">
          <span>查看全部&nbsp;></span>
        </div>
      </div>

      <div class="Home_groceries">
        <div class="groceries_rolling">
          <div class="groceries_goods" v-for="(newItem, index) in homepage.newItemList" :key="index">
            <img class="groceries_img" :src="newItem.listPicUrl" alt="图片">
            <div class="groceries_food">{{newItem.name}}</div>
            <div class="groceries_hot">{{newItem.simpleDesc}}</div>
            <div class="groceries_price">￥{{newItem.retailPrice}}</div>
          </div>
          <div class="groceries_whole">
            <span class="whole_text">查看全部</span>
          </div>
        </div>
      </div>
    </div>
    <Split/>
    <div class="Home_launch">
      <div class="Home_arrival groom">
        <div class="arrival_text1 groom1">人气推荐，好物精选</div>
        <div class="arrival_text2 groom2">
          <span class="groom3">查看全部&nbsp;></span>
        </div>
      </div>

      <div class="Home_groceries gromm_gun">
        <div class="groceries_rolling">
          <div class="groceries_goods" v-for="(popularItem, index) in homepage.popularItemList" :key="index">
            <img class="groceries_img" :src="popularItem.listPicUrl" alt="图片">
            <div class="groceries_food">{{popularItem.name}}</div>
            <div class="groceries_hot">{{popularItem.simpleDesc}}</div>
            <div class="groceries_price">￥{{popularItem.retailPrice}}</div>
          </div>
          <div class="groceries_whole">
            <span class="whole_text">查看全部</span>
          </div>
        </div>

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
  .Home_launch
    width 100%
    height px2rem(732)
    .Home_arrival
      width 100%
      height px2rem(260)
      display flex
      flex-direction column
      justify-content center
      align-items center
      background-image url("../../common/images/bitmap-d4f7b37e32.png")
      &.groom
        background-image url("../../common/images/bitmap2-d626e0b52a.png")
      .arrival_text1
        margin-bottom  px2rem(20)
        font-size px2rem(40)
        color #8BA0B6
        &.groom1
          color: #C5B491
      .arrival_text2
        background: #D8E5F1;
        width px2rem(240)
        height px2rem(56)
        font-size px2rem(28)
        text-align content
        line-height px2rem(56)
        &.groom2
          background: #F4E9CB;
        span
          display inline-block
          margin-left px2rem(50)
          color #A9BBCD
          &.groom3
            color #B4A078
    .Home_groceries
      width 100%
      height px2rem(440)
      .groceries_rolling
        width 366%
        height px2rem(440)
        padding px2rem(30) 0
        box-sizing border-box
        .groceries_goods
          height px2rem(440)
          width px2rem(280)
          margin-left px2rem(20)
          float left
          .groceries_img
            height px2rem(280)
            width px2rem(280)
          .groceries_food
            height px2rem(34)
            width px2rem(280)
            margin  px2rem(10) 0
            padding 0 px2rem(10)
            box-sizing border-box
            font-size px2rem(26)
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
          .groceries_hot
            height px2rem(30)
            width px2rem(280)
            margin  px2rem(10) 0
            padding 0 px2rem(10)
            box-sizing border-box
            font-size px2rem(22)
            color #666
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
          .groceries_price
            height px2rem(28)
            width px2rem(280)
            margin  px2rem(10) 0
            padding 0 px2rem(10)
            box-sizing border-box
            font-size px2rem(32)
            color red
        .groceries_whole
          height px2rem(266)
          width px2rem(280)
          border px2rem(10) solid #eeee
          float left
          text-align center
          line-height px2rem(266)
          margin-left px2rem(20)
          .whole_text
            display inline-block
            font-size px2rem(29)
            color #666


</style>
