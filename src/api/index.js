import ajax from './ajax'
/*包含与后台接口对应的请求函数的模块*/
//请求注册
export const reqRegister=(user)=>ajax('/api/register',user,'POST')
//请求登录
export const reqLogin=(user)=>ajax('/api/login',user,'POST')