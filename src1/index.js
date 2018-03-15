import React from 'react'
import ReactDOM from  'react-dom'
import {Provider} from 'react-redux'
import {Button} from 'antd-mobile'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import store from './redux/store'
import Login from './containers/login'
import Register from './containers/register'
import Dashboard from './containers/dashboard'
ReactDOM.render(
    (<Provider>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route component={Dashboard}/> //默认路由
                </Switch>
            </BrowserRouter>
        </Provider>
       ),document.getElementById('root')
)