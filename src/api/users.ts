import request from '@/utils/request'

// 用户登录参数类型
type LoginInfo = {
  email: string
  password: string
}

type LoginResult = {
  success: boolean
  token: string
  state: number
  message: string
}

// 用户请求登录 router post请求 api/user/login
/*
请求类型为application/x-www.form-urlencode
数据类型需要拼接为data: `属性1=${值1}&属性2=${值2}`

请求数据类型为 application/json
只需要传对象 data: loginInfo
*/
export const login = (loginInfo: LoginInfo) => {
  return request<LoginResult>({
    method: 'POST',
    url: 'api/user/login',
    data: `email=${loginInfo.email}&password=${loginInfo.password}`
  })
}
