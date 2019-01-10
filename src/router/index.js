import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RouteMap from '../router/route';
import Menu from '../component/navMenu';
import Home from '../component/home';

const getApp = () => (
    <Router>
        <div>
            <Menu />
            <Switch>
                { Object.keys(RouteMap).map((item, index) => {
                    let routeItem = RouteMap[item];
                    return (<Route
                        path={ routeItem.path }
                        component={ routeItem.component }
                        key={ `${index}${item.path}` }
                        exact
                    />)
                }) }
                <Route path='/' component={ Home } />
            </Switch>
        </div>
    </Router>
)

export default getApp;