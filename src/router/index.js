import React from 'react';
import { Route } from 'react-router-dom';

/**
 * pages
 */
import Home from '../pages/home/Home';
import Mine from '../pages/mine/Mine';
import Pay from '../pages/pay/Pay';

const routers = [
    <Route  path="/home" key="home" component={Home} />,
    <Route path="/pay" key="pay" component={Pay} />,
    <Route path="/mine" key="mine" component={Mine} />
];

export default routers;