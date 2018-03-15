import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Radio,Button} from 'antd-mobile'
import {register} from  '../../redux/action'
import Logo from '../../components/logo'
import '../../assets/css/index.less'
const RadioItem=Radio.RadioItem;
class Register extends React.Component {
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
        this.props.register(this.state)
    }

    render() {
        const {user} = this.props
        if(user.redirectTo){
            return <Redirect to={user.redirectTo} />
        }
        return(
            <div><NavBar>硅谷直聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        {user.msg?<p className='error-msg'>{user.msg}</p>:''}
                        <InputItem onChange={val => this.handleChange('name', val)}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={val => this.handleChange('pwd', val)}>密码:</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={val => this.handleChange('pwd2', val)}>确认密码:</InputItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.state.type === 'genius'} onChange={() => this.handleChange('type', 'genius')}>BOSS:</RadioItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.state.type === 'boss'}
                                   onChange={() => this.handleChange('type', 'boss')}>牛人:</RadioItem>
                        <Button type="primary" onClick={this.handleRegister}>注册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.goLogin}>已经有账号</Button>
                    </List>
                </WingBlank>
            </div>)




    }

}
export default connect(
    state=>({user:state.user}),
    {register}
)(Register)