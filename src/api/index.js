import ajax from './ajax'
//获取首页数据
export const reqdiagram = () => ajax('/homepage')
export const reqdiscover = () => ajax('/discover')
export const reqclassify = () => ajax('/classify')
