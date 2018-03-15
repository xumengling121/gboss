const express=require('express')
const bodyParser = require('body-parser') // 解析请求体
const cookieParser = require('cookie-parser') // 解析cookie
const appRouter = require('./appRouter')
const app=express();
/*app.use('/',function(req,res){
    res.send("服务器成功启动")
})*/
app.use(cookieParser()) // 解析cookie数据
app.use(bodyParser.json()) // 解析请求体(ajax请求: json数据格式)
app.use(bodyParser.urlencoded({ extended: false })) // 解析请求体(表单数据)


app.use('/api',appRouter) //请求注册
app.listen('4000',function(){
    console.log("server start on port:4000");
})
/*npm run server*/