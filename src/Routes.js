import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Result from './pages/Result';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/result" component={ Result } />
            </Switch>
        </BrowserRouter>
    )
}