
import React,{Component} from 'react'
import {WingBlank, List, InputItem, WhiteSpace, Button,Radio} from 'antd-mobile'
import Logo from '../../components/logo'
const RadioItem=Radio.RadioItem;
export default  class Login extends React.Component{
    state={
        name:'',
        pwd:''
    }
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
    }
    render(){
        return (
            <div>
                <Logo/>
                <WingBlank>
                    <List>
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
