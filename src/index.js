import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd-mobile'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './containers/login/login'
import Register from './containers/register/register'
import Dashboard from './containers/dashboard/dashboard'
import store from './redux/store'

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route  component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    </Provider>

), document.getElementById('root'))