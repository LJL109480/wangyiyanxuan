/**
 * Created by Administrator on 2018/11/29.
 */
import {RECU_DIAGRAM, RECU_CLASSIFY, RECU_DISCOVER} from './mutation-type'
import {reqdiagram, reqclassify, reqdiscover} from '../api'

//异步获取首页数据
export default {
  //获取首页数据
  async getHomePage({commit}, callback){
    const result = await reqdiagram()
    if(result.code === 0 ){
      const homepage = result.data
      commit(RECU_DIAGRAM, {homepage})
       typeof callback === 'function' && callback()
    }
  },
  //获取识物数据
  async getdiscover({commit}, callback){
    const result = await reqdiscover()
    if(result.code === 0){
      const discover = result.data
      commit(RECU_DISCOVER, {discover})
      typeof callback === 'function' && callback()
    }
  },
  async getclassify({commit}, callback){
    const result = await reqclassify()
    if(result.code === 0){
      const classify = result.data
      commit(RECU_CLASSIFY, {classify})
      typeof callback === 'function' && callback()
    }
  },

}
