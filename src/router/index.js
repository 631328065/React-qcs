import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import Recommend from '../pages/recommend/'
import Mask from '../pages/mask/'
import Head from '../components/common/head/index.js'

class Routes extends React.Component {
    render() {
        return <BrowserRouter>
            <div>
                <Head/>
            </div>
            <div>
                <Route path="/" exact={true} component={Recommend}/>
                <Route path="/mask" component={Mask}/>
            </div>
        </BrowserRouter>
    }
}

export default Routes;