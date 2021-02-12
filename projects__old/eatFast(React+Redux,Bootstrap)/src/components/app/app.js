import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';

import Background from './BG2.jpg';
import { Route, Switch } from 'react-router-dom';

const App = () => {

    return (
        <div style={{background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Switch>
                <Route path = '/' exact component={MainPage}/>
                <Route path = '/cart' exact component={CartPage}/>
                <Route path = '/:id'  component={ItemPage}/>
            </Switch>
        </div>
    )
}
export default App;