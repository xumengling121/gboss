import React,{Component} from 'react'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Radio,Button} from 'antd-mobile'

import Logo from '../../components/logo'
const RadioItem=Radio.RadioItem;
export default class Register extends React.Component{
        goLogin =()=>{
            this.props.history.replace('/login')
        }
        //注册收集数据
    handleRegister=()=>{}
    render(){
        return (
            <div><NavBar>硅谷直聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password">密码:</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password">确认密码:</InputItem>
                        <WhiteSpace/>
                        <InputItem checked>BOSS:</InputItem>
                        <WhiteSpace/>
                        <InputItem >牛人:</InputItem>
                        <Button type="primary" onClick={this.handleRegister}>注册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.goLogin}>已经有账号</Button>
                    </List>
                </WingBlank>

            </div>
        )

    }
}