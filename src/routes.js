import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './Products';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Products} />
        </BrowserRouter>
    );
}

export default Routes;
