/**
 * Created by Administrator on 2018/11/28.
 */
import Vue from 'vue'
import  VueLazyload from 'vue-lazyload'
import App from './App.vue';
import router from './router'
import store from './store'
import './mock/mockServer'
import Split from './components/Split/Split.vue'
import loading from './common/images/timg.gif'
Vue.component('Split', Split)
Vue.use(VueLazyload, {
  loading
})
new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
