import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home';
import Result from '../pages/Result';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <PrivateRoute path="/result" component={ Result } />
            </Switch>
        </BrowserRouter>
    )
}