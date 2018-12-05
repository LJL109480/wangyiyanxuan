<template>
  <div>
    <header class="Home_header">
      <div class="header_top">
        <a href="javascript:;" class="Home_title">
        </a>
        <div class="Home_search">
          <i></i>
          <span>搜索商品, 共19599款好物</span>
        </div>
        <div class="Home_lading" @click="$router.replace('/figureinfo')">登录</div>
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
  </div>
</template>
<script>
  export default{
    props:{
      homepage:Object
    },
    data(){
      return{
        isColor:0,
        index:10
      }
    },
    methods:{
      PointList(index){
        this.isColor=index
          this.$router.push(`/homepage/homeheader/${index}`)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Home_header
    height px2rem(148)
    bottom-border-1px(#d9d9d9)
    background: white;
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
        background: url(../../common/images/indexLogo-11d65342f9.png) no-repeat
        background-size px2rem(140)
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
          display inline-block
          width px2rem(27)
          height px2rem(27)
          margin-right  px2rem(10)
          background: url('../../common/images/search2-2fb94833aa.png') no-repeat
          background-size px2rem(27)
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
      background: white;
      .Home_Ul
        height px2rem(60)
        width 186%
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

</style>
