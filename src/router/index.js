/**
 * Created by Administrator on 2018/11/28.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
const Homepage = () =>import ('../pages/Homepage/Homepage.vue')
const Classify = () =>import ('../pages/Classify/Classify.vue')
const Discover = () =>import ('../pages/Discover/Discover.vue')
const Shopcart = () =>import ('../pages/Shopcart/Shopcart.vue')
const FigureInfo = () =>import ('../pages/FigureInfo/FigureInfo.vue')

/*import Discover from '../pages/Discover/Discover.vue'
import FigureInfo from '../pages/FigureInfo/FigureInfo.vue'
import Homepage from '../pages/Homepage/Homepage.vue'
import Shopcart from '../pages/Shopcart/Shopcart.vue'*/

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/homepage',
      component:Homepage
    },
    {
      path:'/classify',
      component:Classify
    },
    {
      path:'/discover',
      component:Discover

    },
    {
      path:'/shopcart',
      component:Shopcart
    },
    {
      path:'/figureinfo',
      component:FigureInfo
    },
    {
      path:'/',
      redirect:'/homepage'
    }
  ]
})
