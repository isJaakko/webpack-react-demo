import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import RouteMap from '../component/router/route';
// import getRoutes from './router/index';
import SiderMenu from '../component/siderMenu';
import GlobalHeader from '../component/globalHeader';
import styles from './main.css';

const { Header, Content, Footer } = Layout;
export default class Page extends Component {
    constructor(props) {
        super(props);

        this.getRoutes = this.getRoutes.bind(this);
        this.getSubRoutes = this.getSubRoutes.bind(this);
    }

    getRoutes() {
        const { getSubRoutes } = this;

        return (Object.keys(RouteMap).map((item, index) => {
            let routeItem = RouteMap[item];
            if (routeItem.children) {
                return getSubRoutes(routeItem);
            }
            return (<Route
                path={ routeItem.path }
                component={ routeItem.component }
                key={ `${index}${item.path}` }
                exact
            />)
        }))
    }

    getSubRoutes(subRouteData) {
        // console.log(subRouteData);

        return (subRouteData.children.map((item, index) => {
            return (<Route
                // path={ item.path }
                path={ `${subRouteData.path}${item.path}` }
                component={ item.component }
                key={ `${index}${item.path}` }
                exact
            />)
        }))
    }


    render() {
        const { getRoutes } = this;
        const { history: { location } } = this.props;

        return (<Layout>
            <SiderMenu
                location={ location }
            />
            <Layout className={ styles.layout }>
                <Header className={ styles.header }>
                    <GlobalHeader />
                </Header>
                <Breadcrumb className={ styles.page_breadcrumb }>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content className={ styles.content }>
                    {
                        // Object.keys(RouteMap).map((item, index) => {
                        //     let routeItem = RouteMap[item];
                        //     return (<Route
                        //         path={routeItem.path}
                        //         component={routeItem.component}
                        //         key={`${index}${item.path}`}
                        //         exact
                        //     />)
                        // })
                        getRoutes()
                    }
                    {/* <Route path='/review' render={() => (<h1>review</h1>)} /> */ }
                </Content>
                <Footer>webpack-react-demo &copy;2019</Footer>
            </Layout>
        </Layout>)
    }
}