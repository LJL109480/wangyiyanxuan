<!--个人信息界面-->
<template>
  <div class="FigureInfo ">
    <!--头部-->
    <header class="Info_header border-1px">
      <div class="Info_home" @click="$router.replace('/homepage')">
        <i class="iconfont icon-shouye2"></i>
      </div>
      <div class="Info_wangyi"></div>
      <div class="Info_icon">
        <i class="icon_img"></i>
      </div>
      <div class="icon_gouwu">
        <i class="iconfont icon-gouwuchekong"></i>
      </div>
    </header>
    <!--内容区域-->
    <div class="login" v-show="isShow">
      <div class="Info_content">
        <div class="Info_Logo">
          <img class="Logo_img" src="../../common/images/logo.bd139d2.png" alt="">
        </div>
        <div class="Info_logon">
          <div class="Info_phone_mail" @click="logon">
            <i class="iconfont icon-shouji"></i>
            <span>手机号码登录</span>
          </div>
          <div class="Info_phone_mail">
            <i class="iconfont icon-youxiang"></i>
            <span>邮箱账号登录</span>
          </div>
        </div>
        <div class=" Info_register">手机号快捷注册&nbsp;&nbsp;></div>
      </div>
      <div class="Info_bottom">
        <div class="Info_social">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="Info_social">
          <i class="iconfont icon-QQ"></i>
          <span>QQ</span>
        </div>
        <div class="Info_social">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <div class="logon_boundary" v-show="isblack">
     <div class="logo_box">
       <img class="boundary_logo" src="../../common/images/logo.bd139d2.png" alt="">
     </div>
      <div class="input_boundary">
        <input type="text" v-model="mag" placeholder="请输入手机号" class="phone">
        <div class="dingwei">
          <input type="text" v-model="messag" placeholder="请输入短信验证码" class="phone" :disabled="! isRightPhone || item>0">
          <div class="huoqu" @click.prevent="codes" :class="{on:item}">
            {{item>0?`已发送(${item}s)`:'获取验证码'}}
          </div>
        </div>
        <div class="solve_story">
          <div class="story">遇到的问题</div>
          <div class="short">使用密码验证登陆</div>
        </div>
      </div>
      <div class="entry" @click="judge">登录</div>
      <div class="other_account" @click="logon">其他账号登录</div>
      <div class="register_account">注册账号</div>
    </div>

  </div>
</template>
<script>
  import {Toast, MessageBox} from 'mint-ui'
  export default{
    data(){
      return{
        isShow:true,
        isblack:false,
        mag:'', //手机号
        messag:'', //验证码
        item:0
      }
    },
    methods:{
      logon(){
        this.isShow = !this.isShow
        this.isblack = !this.isblack
      },
      codes(){
        this.item = 30
        const timer = setInterval(()=>{
          this.item--
          if(this.item < 0){
            this.item = 0
            clearInterval(timer)
          }
        },1000)
        Toast({
          message:'短信发送成功',
        })
      },
      judge(){
        const {messag, mag} = this
        if(!this.isRightPhone){
           return MessageBox.alert('必须输入正确的手机号')
        }else if(!/^\d{4}.test(mag)/){
          return MessageBox.alert('验证码必须是4位数字')
        }
      }
    },
    computed:{
      isRightPhone(){
        return /^1\d{10}$/.test(this.mag)
      }
    }

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Info_header
    width 100%
    height px2rem(100)
    position fixed
    background white;
    bottom-border-1px(#666)
    display flex
    justify-content space-around
    align-items center
    .Info_home
      position absolute
      top px2rem(25)
      left px2rem(20)
     .icon-shouye2
      font-size px2rem(58)
    .Info_wangyi
      width px2rem(172)
      height px2rem(54)
      background url("../../common/images/indexLogo-11d65342f9.png") no-repeat
      background-size px2rem(175)
    .Info_icon
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

  .Info_content
    width 100%
    height px2rem(633)
    .Info_Logo
      width 100%
      height px2rem(104)
      text-align center
      padding px2rem(120) 0
      .Logo_img
        width px2rem(300)
        height px2rem(104)

    .Info_logon
      width 100%
      height px2rem(216)
      padding 0 px2rem(50)
      box-sizing border-box
      .Info_phone_mail
        width px2rem(668)
        height px2rem(88)
        margin-top px2rem(20)
        background #b4282d
        border 1px solid #b4282d
        text-align center
        line-height px2rem(88)
        >i
          font-size px2rem(40)
          color white
        >span
          font-size px2rem(28)
          color white


    .Info_register
      text-align center
      font-size px2rem(30)
      margin-top px2rem(10)
  .Info_bottom
    width 100%
    height px2rem(60)
    position absolute
    bottom px2rem(50)
    text-align center
    .Info_social
      font-size px2rem(28)
      display inline-block
      width px2rem(207)
      height px2rem(26)
      border-right px2rem(2) solid #979797
      color  #979797
      .iconfont
        font-size px2rem(28)
        color  #979797


  .Info_bottom :nth-child(3)
    border-right none
  .logon_boundary
    width 100%
    height 100%
    .logo_box
      width 100%
      height px2rem(104)
      padding px2rem(120) 0
      text-align center
      .boundary_logo
        width px2rem(300)
        height px2rem(104)
    .input_boundary
      width 100%
      height px2rem(260)
      text-align center
      .phone
        outline none
        background none
        border 0px
        border-bottom 1px solid #999
        font-size px2rem(36)
        width px2rem(680)
        height px2rem(80)
      .dingwei
        position relative
        .huoqu
          font-size px2rem(30)
          width px2rem(200)
          height px2rem(60)
          border px2rem(1) solid #333
          line-height px2rem(60)
          border-radius px2rem(10)
          position absolute
          top px2rem(10)
          right px2rem(30)
          &.on
            border 1px solid #ccc
            color #ccc
      .solve_story
        width px2rem(700)
        height px2rem(50)
        padding 0 px2rem(25)
        margin-top px2rem(20)
        .story
          font-size px2rem(28)
          float left
          color #666
        .short
          font-size px2rem(28)
          float right
          color #666

    .entry
      width px2rem(700)
      height px2rem(100)
      margin  0 px2rem(25)
      background #b4282d
      border-radius px2rem(10)
      text-align center
      line-height px2rem(100)
      color white
      font-size px2rem(40)
    .other_account
      width px2rem(700)
      height px2rem(100)
      margin  px2rem(30) px2rem(25) 0 px2rem(25)
      border px2rem(1) solid #b4282d
      border-radius px2rem(10)
      text-align center
      line-height px2rem(100)
      color #666
      font-size px2rem(40)
    .register_account
      font-size px2rem(36)
      text-align center
      margin-top px2rem(20)
</style>
