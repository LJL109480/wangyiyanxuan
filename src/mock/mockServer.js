/**
 * Created by Administrator on 2018/11/30.
 */
import Mock from 'mockjs'
import homepage from './datahomepage.json'
import classify from './datadiscover.json'
import discover from './datatopic.json'
Mock.mock('/homepage', {
  code: 0,
  data: homepage
})
Mock.mock('/discover',{
  code: 0,
  data: discover
})
Mock.mock('/classify',{
  code: 0,
  data: classify
})
