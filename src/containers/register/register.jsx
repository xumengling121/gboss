import React,{Component} from 'react'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Radio,Button} from 'antd-mobile'

import Logo from '../../components/logo'
const RadioItem=Radio.RadioItem;
export default class Register extends React.Component {
    state = {
        name: '',
        pwd: '',
        pwd2: '',
        type: 'boss'
    }
    handleChange = (name, val) => {
        //更新状态
        this.setState({
            [name]: val
        })
    }
    goLogin = () => {
        this.props.history.replace('/login')
    }
    //注册收集数据
    handleRegister = () => {
        console.log(this.state)
    }

    render() {
        const {type} = this.state
        return(
            <div><NavBar>硅谷直聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem onChange={val => this.handleChange('name', val)}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={val => this.handleChange('pwd', val)}>密码:</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={val => this.handleChange('pwd2', val)}>确认密码:</InputItem>
                        <WhiteSpace/>
                        <RadioItem checked={type === 'genius'} onChange={() => this.handleChange('type', 'genius')}>BOSS:</RadioItem>
                        <WhiteSpace/>
                        <RadioItem checked={type === 'boss'}
                                   onChange={() => this.handleChange('type', 'boss')}>牛人:</RadioItem>
                        <Button type="primary" onClick={this.handleRegister}>注册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.goLogin}>已经有账号</Button>
                    </List>
                </WingBlank>
            </div>)




    }

}