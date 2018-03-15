/*包含多个用于生成新的state的reducer函数的模块*/
import {combineReducers} from 'redux'
function xxx(state=0,action){
    return state
}
function yyy(state={},action){
    return state
}
export default combineReducers({
    xxx,
    yyy
})