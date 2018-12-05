<!--分类界面-->
<template>
  <div>
    <header class="Classify">
     <div class="Classify_sea">
       <div class="Class_search">
         <i></i>
         <span>搜索商品, 共19599款好物</span>
       </div>
     </div>
    </header>
    <section class="Classify_content">
      <div class="Classify_left">
        <div class="Classify_refer">
          <ul class="Classify_ul">
            <li class="Classify_cargo" :class="{active:isShow===index}"
                v-for="(category, index) in classify.categoryL1List"
                :key="index"
                @click="categoryList(index)">
              {{category.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="Classify_right">
        <div class="Classify_goods" :class="{disply:isList===index}" v-for="(categorys, index) in classify.categoryL1List" :key="index">
          <div class="goods_img">
            <img v-lazy="categorys.wapBannerUrl" alt="">
          </div>
          <div class="goods_text">
            <i></i>
            {{categorys.name}}
            <i></i>
          </div>
          <div class="Classify_sort">
            <ul class="sort_ul">
              <li class="sort_list"  v-for="(subCate, index) in categorys.subCateList" :key="index">
                <img class="sort_img" v-lazy="subCate.wapBannerUrl" alt="">
                <span class="sort_text">{{subCate.name}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return{
        isShow:0,
        isList:0,
      }
    },
    mounted(){
      this.$store.dispatch('getclassify', ()=>{
        this.$nextTick(()=>{
          new BScroll('.Classify_refer',{
            click:true,
            scrollY:true
          })
        })
      })
      this.$nextTick(()=>{
        new BScroll('.Classify_right',{
          click:true,
          scrollY:true
        })
      })
    },
    computed:{
      ...mapState(['classify']),
    },
    methods:{
      categoryList(index){
        this.isShow = index
        this.isList = index
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Classify
    width 100%
    height px2rem(88)
    position fixed
    top 0
    bottom-border-1px(#666)
    .Classify_sea
      width 100%
      height px2rem(88)
      padding 0 px2rem(30)
      text-align center
      display flex
      align-items center
      .Class_search
        width px2rem(750)
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
          width px2rem(30)
          height px2rem(30)
          margin-right  px2rem(10)
          background: url('../../common/images/search2-2fb94833aa.png') no-repeat
          background-size px2rem(30)
        span
          color #666
          font-weight bold

  .Classify_content
    width 100%
    position relative
    .Classify_left
      width px2rem(168)
      height 100%
      position fixed
      left 0
      .Classify_refer
        width px2rem(168)
        padding-top px2rem(30)
        border-right  1px solid #999
        .Classify_ul
          width px2rem(168)
          height px2rem(1300)
          .Classify_cargo
            width px2rem(162)
            height px2rem(76)
            font-size px2rem(30)
            text-align center
            line-height px2rem(76)
            margin-bottom px2rem(20)
            &.active
              color #b4282d
              font-size px2rem(38)
              font-weight bold
              border-left px2rem(5) solid #b4282d
    .Classify_right
      margin-left px2rem(168)
    .Classify_goods
      padding px2rem(30) px2rem(30) px2rem(21) px2rem(30)
      box-sizing border-box
      display none
      &.disply
        display block
    .goods_img
      img
        width px2rem(528)
        height px2rem(192)
    .goods_text
      width px2rem(528)
      height px2rem(108)
      text-align center
      line-height px2rem(108)
      font-size px2rem(28)
      color #666
      i
        display inline-block
        width px2rem(30)
        height px2rem(1)
        background: #999;
        transform translateY(px2rem(-10))


    .Classify_sort
      width px2rem(528)
    .sort_ul
      width px2rem(528)
      clearFix()
      .sort_list
        width px2rem(144)
        height px2rem(216)
        float left
        margin-right  px2rem(34)
        box-sizing border-box
        .sort_img
          width px2rem(144)
          height px2rem(144)
          border-radius 50%
        .sort_text
          display inline-block
          width px2rem(144)
          height px2rem(72)
          text-align center
          font-size px2rem(28)
    .sort_ul :nth-child(3n)
      margin-right  0

</style>
