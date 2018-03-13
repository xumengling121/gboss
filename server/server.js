const express=require("express")
const app=express();
app.use('/',function(req,res){
    res.send("服务器成功启动")
})
app.listen('3100',function(){
    console.log("server start");
})
/*npm run server*/