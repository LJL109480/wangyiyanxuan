//用于发送ajax请求
//封装ajax函数，函数返回值是promise对象
import axios from 'axios'

//默认是GET请求
export default function ajax(url, data={}, method='GET'){

  return new Promise((resolve, reject) => {
    let promise
    if(method==='GET') {
      //return axios.get(url, {params: data})
      // 拼query请求参数串
      let queryStr = ''
      Object.keys(data).forEach(key => {
        const value = data[key]
        queryStr += `${key}=${value}&`
      })
      // let queryStr = Object.keys(data).reduce((pre, key) => pre + `${key}=${data[key]}&`, '')

      if(queryStr!=='') { // username=tom&password=123&
        queryStr = queryStr.substring(0, queryStr.length-1) // username=tom&password=123
        url += '?' + queryStr  // /login/?username=tom&password=123
      }
      promise = axios.get(url) // url?username=tom&password=123
      // return axios.get(url, {params: data}) // url?username=tom&password=123
    } else {
      promise = axios.post(url, data)
    }
    promise
      .then((response) => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
