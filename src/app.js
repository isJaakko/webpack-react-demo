import React from 'react';
import { BrowserRouter as Router, browserHistory as History, Route, Switch, Redirect } from 'react-router-dom';
import App from './view/app';
// import MyMenu from './component/Menu';

// function MyLoadingComponent() {
//     return <div>Loading...</div>;
// }

// const Hello = Loadable({
//     loader: () => import('../component/hello'),
//     loading: MyLoadingComponent
// })

const getApp = () => (<div>
    <Router history={History}>
        <Switch>
            <Route path='/' component={App} />
        </Switch>
    </Router>
</div>)

export default getApp;