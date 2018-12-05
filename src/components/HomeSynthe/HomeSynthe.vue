<template>
  <div>
    <div class="Nav_synthetic">
      <div class="House-wear" v-for="(cateLis, index) in cateList" :key="index">
        <div class="Home_goodStuff">{{cateLis.name}}好物</div>
        <ul class="goodStuff_Ul">
          <li class="goodStuff_list" v-for="(item, index) in cateLis.itemList" v-if="index>=6" :key="index">
            <img class="goodStuff_img" v-lazy="item.listPicUrl" alt="">
            <div class="goodStuff_simpleDesc ellipsis">{{item.simpleDesc}}</div>
            <div class="goodStuff_text ellipsis">{{item.name}}</div>
            <div class="goodStuff_price">￥{{item.retailPrice}}</div>
          </li>
        </ul>
        <Split/>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      cateList:Array
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Nav_synthetic
    width 100%
    .House-wear
      width 100%
    .Home_goodStuff
      width 100%
      height px2rem(119)
      font-size px2rem(30)
      text-align center
      line-height px2rem(119)
    .goodStuff_Ul
      width 100%
      clearFix()
      .goodStuff_list
        width px2rem(375)
        height px2rem(533)
        padding  0 px2rem(20) px2rem(33) px2rem(20)
        box-sizing border-box
        float left
        .goodStuff_img
          background #F4F4F4
          width px2rem(345)
          height px2rem(345)
          display block
        .goodStuff_simpleDesc
          width px2rem(330)
          height px2rem(32)
          font-size px2rem(26)
          background: #f1ece2;
          color #9f8a60
          padding px2rem(19) px2rem(9)
          text-align center
          line-height px2rem(32)
        .goodStuff_text
          padding px2rem(10)
          box-sizing border-box
          margin-top px2rem(5)
          font-size px2rem(28)
          color #666
        .goodStuff_price
          font-size px2rem(34)
          color red
          margin-top px2rem(5)
          padding-left px2rem(5)
</style>
