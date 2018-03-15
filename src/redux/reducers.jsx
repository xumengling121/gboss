import {combineReducers} from 'redux'
import  {AUTH_SUCCESS,ERROR_MSG} from "./action-type";
const initUser={
    name:'',
    type:'',
    msg:'',
    redirectTo:''//需要自动装箱的路径
}
//管理user的reducer
function user(state=initUser,action){
    switch(action.type){
        case AUTH_SUCCESS: //成功t
            return {...action.data,redirectTo:'/'}
        case ERROR_MSG:
            return {...state,msg:action.data}
        default:
            return state
    }

}
export default combineReducers({
    user
})
