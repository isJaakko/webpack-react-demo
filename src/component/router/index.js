import React, { Component } from 'react';
import { Route, Switch } from 'react-dom';
import RouteMap from './route';

const getRoutes = () => {
    return (Object.keys(RouteMap).map((item, index) => {
        let routeItem = RouteMap[item];
        return (<Route
            path={ routeItem.path }
            render={ () => routeItem.component }
            key={ `${index}${item.path}` }
            exact
        />)
    }))

}

export default getRoutes;