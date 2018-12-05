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
const HomeSynthe = () => import('../components/HomeSynthe/HomeSynthe.vue')
const Homeheader = () => import('../components/Homeheader/Homeheader.vue')

/*import Discover from '../pages/Discover/Discover.vue'
import FigureInfo from '../pages/FigureInfo/FigureInfo.vue'
import Homepage from '../pages/Homepage/Homepage.vue'
import Shopcart from '../pages/Shopcart/Shopcart.vue'*/

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/homepage',
      component:Homepage,
      meta:{
        ShowFoot:true
      },
      children:[
        {
          path:'/',
          redirect:'/homepage/homeheader/0'
        },
        {
          path:'/homepage/homeheader/0',
          component:Homeheader,
          meta:{
            ShowFoot:true
          },
        },
        {
          path:'/homepage/homeheader/:id',
          component:HomeSynthe,
          meta:{
            ShowFoot:true
          },
        }
      ]/**/
    },
    {
      path:'/classify',
      component:Classify,
      meta:{
        ShowFoot:true
      }
    },
    {
      path:'/discover',
      component:Discover,
      meta:{
        ShowFoot:true
      }
    },
    {
      path:'/shopcart',
      component:Shopcart,
      meta:{
        ShowFoot:true
      }
    },
    {
      path:'/figureinfo',
      component:FigureInfo,
      meta:{
        ShowFoot:false
      }
    },
    {
      path:'/',
      redirect:'/homepage'
    }
  ]
})
