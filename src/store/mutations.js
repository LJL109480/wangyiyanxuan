/**
 * Created by Administrator on 2018/11/29.
 */
import {RECU_DIAGRAM} from './mutation-type'
export default{
  [RECU_DIAGRAM] (state, {homepage}){
    state.homepage=homepage
  }
}

