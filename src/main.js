/**
 * Created by Administrator on 2018/11/28.
 */
import Vue from 'vue'
import App from './App.vue';
import router from './router'
import store from './store'
import './mock/mockServer'
import Split from './components/Split/Split.vue'
Vue.component('Split', Split)
new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
