import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useMeme } from '../contexts/memeContext';

export default function PrivateRoute({ ...rest }){
    const { generatedMeme } = useMeme();

    return generatedMeme ? <Route {...rest} /> : <Redirect to="/" />
}