/**
 * Created by Administrator on 2018/11/30.
 */
import Mock from 'mockjs'
import homepage from './datahomepage.json'
Mock.mock('/homepage', {
  code: 0,
  data: homepage
})
