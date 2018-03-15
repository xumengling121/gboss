
import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {WingBlank, List, InputItem, WhiteSpace, Button,Radio} from 'antd-mobile'
import Logo from '../../components/logo'
import {login} from '../../redux/action'
const RadioItem=Radio.RadioItem;
  class Login extends React.Component{
    state={
        name:'',
        pwd:''
    }
    //切换到注册
    goRegister=()=>{
        this.props.history.replace('/register')
    }
    handleChange = (name, val) => {
        //更新状态
        this.setState({
            [name]: val
        })
    }
    handleLogin=()=>{
        console.log(this.state)
        this.props.login(this.state)

    }
    render(){
        const {user}=this.props
        //检查是否需要自动跳转路由
        if(user.redirectTo){
            return <Redirect to={user.redirectTo}/>
        }
        return (
            <div>
                <Logo/>
                <WingBlank>
                    <List>
                        {user.msg?<p className='error-msg'>{user.msg}</p>:''}
                        <InputItem onChange={val=>this.handleChange('name',val)}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={val=>this.handleChange('pwd',val)}>密码:</InputItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.handleLogin}>登录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.goRegister}>还没有账号</Button>
                    </List>
                </WingBlank>

            </div>
        )

    }
}
export default connect(
    state=>({user:state.user}),
    {login}
)
(Login)
