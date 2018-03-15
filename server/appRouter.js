const express=require('express')
const models=require('./models')
const md5=require('blueimp-md5')
const UserModel=models.getModel('user')
const filter = {pwd: 0} //过滤的条件

const router =express.Router();
//注册
router.post('/register',function(req,res){
    const {name,pwd,type}=req.body
    UserModel.findOne({name},function(err,user){
        if(user){
            res.send({code:1,msg:'此用户已存在'})
        }else {
            new UserModel({name,pwd:md5(pwd),type}).save(function (err,user) {
                res.cookie('userid', user._id)
                res.send({code: 0, data: {_id: user._id, name, type}})
            })
        }
    })
})
//登录路由
router.post('/login',function(req,res){
    //获取请求参数
    const {name,pwd}=req.body
    //处理（操作数据库）
    UserModel.findOne({name,pwd:md5(pwd)},filter,function(err,user){
        //如果user没有值返回一个错误提示 user 本身为false !user为true

        if(!user){
            res.send({code:1,msg:'用户名或密码错误'})
        }else{
            res.cookie('userid',user._id)
            res.send({code:0,data:user})
        }
    })
    //返回数据
})

//向外暴露路由
module.exports=router


