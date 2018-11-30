/**
 * Created by Administrator on 2018/11/29.
 */
import {RECU_DIAGRAM} from './mutation-type'
import {reqdiagram} from '../api'

//异步获取首页数据
export default {
  async getHomePage({commit}, callback){
    const result = await reqdiagram()
    if(result.code === 0 ){
      const homepage = result.data
      commit(RECU_DIAGRAM, {homepage})
       typeof callback === 'function' && callback()
    }
  }
}
