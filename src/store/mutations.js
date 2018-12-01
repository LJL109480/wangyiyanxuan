/**
 * Created by Administrator on 2018/11/29.
 */
import {RECU_DIAGRAM, RECU_CLASSIFY,RECU_DISCOVER} from './mutation-type'
export default{
  [RECU_DIAGRAM] (state, {homepage}){
    state.homepage=homepage
  },
  [RECU_DISCOVER] (state, {discover}){
    state.discover = discover
  },
  [RECU_CLASSIFY] (state, {classify}){
    state.classify = classify
  }
}

