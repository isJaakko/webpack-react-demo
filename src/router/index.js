import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RouteMap from '../router/route';
import Menu from '../component/navMenu';

import Loadable from 'react-loadable';
import Hello from '../component/gallery';


function MyLoadingComponent() {
    return <div>Loading...</div>;
}

// const Hello = Loadable({
//     loader: () => import('../component/hello'),
//     loading: MyLoadingComponent
// })

const Home = () => (<h1>This is home page!</h1>)

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