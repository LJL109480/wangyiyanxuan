<!--购物车界面-->
<template>
  <div>
    <div class="Shopcart">
      <div>购物车</div>
      <ul class="Shopcart_ul">
        <li class="Shopcart_list">
          <i class="iconfont icon-yuanquan"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="Shopcart_list">
          <i class="iconfont icon-yuanquan"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="Shopcart_list">
          <i class="iconfont icon-yuanquan"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
      <div class="goShop">
        <div class="goShop_img"></div>
        <div class="goShop_content">
          <div class="goShop_text">去添点什么吧</div>
          <div class="goShop_load">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
    .Shopcart
      width 100%
      height px2rem(88)
      text-align center
      font-size px2rem(40)
      line-height px2rem(88)
      bottom-border-1px(#666)
    .Shopcart_ul
      width px2rem(690)
      height px2rem(70)
      padding 0  px2rem(30)
      display flex
      justify-content space-around
      .Shopcart_list
        font-size px2rem(20)
        .icon-yuanquan
          font-size px2rem(8)

    .goShop
      width 100%
      height px2rem(300)
      margin px2rem(330) 0
      background: #f4f4f4;
      .goShop_img
        width px2rem(248)
        height px2rem(248)
        background url('../../common/images/cart.png') no-repeat
        background-size px2rem(248) px2rem(248)
        transform translateX(px2rem(240))
      .goShop_content
        width 100%
        height px2rem(170)
        transform translateY(px2rem(-40))
        .goShop_text
          width 100%
          height px2rem(28)
          font-size px2rem(28)
          color #7e8c8d
          margin-bottom px2rem(70)
        .goShop_load
          width px2rem(480)
          height px2rem(92)
          background #b4282d
          color white
          margin-left px2rem(150)
          border-radius px2rem(10)

</style>
