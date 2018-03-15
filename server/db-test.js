const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/boss_test')
const conn=mongoose.connection
conn.on('connected',function(){
    console.log("连接成功");
})
const userSchema=mongoose.Schema({
    'name':{type:String,'required':true},
    'pwd':{type:String,'required':true},
    'type':{'type':String,'required':true},
    'avatar':{'type':String},
    'desc':{'type':String},
    'title':{'type':String},
    'company':{'type':String},
    'money':{'type':String}
})
//定义model
mongoose.model('user',userSchema)
const UserModel=mongoose.model('user')
//通过实例添加数据
function testSave(){
    const userModel=new UserModel({
        name:'Jack1',
        pwd:'12345',
        type:'boss',
        avatar:'boy'
    })
    userModel.save(userModel,function(err,user){
        console.log('save()',err,user)
    })
}
//testSave()
//通过Model的find()/findOne()查询多过或一个数据
function testFind() {
    UserModel.find(function (err, users) {
        console.log('find()', err, users)

    })
    //查找一个
    UserModel.findOne(function (err, user) {
        console.log('findOne()', err, user)

    })
}
    //testFind()
function testUpdate() {
    UserModel.findByIdAndUpdate({_id: '5aa7c70052a82e24bc137fbd'}, {name: 'Jack'}, function (err, user) {
        console.log('findByIdAndUpdate()', err, user)
    })
}
//testUpdate()
function testDelete(){
    UserModel.remove({_id:'5aa7c70052a82e24bc137fbd'},function(err,result){
        console.log('remove()',err,result)
    })
}
//testDelete()