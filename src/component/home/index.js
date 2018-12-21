import React, { Component } from 'react';
import { Layout } from 'antd';
import style from './main.css';
const {
    Header, Footer, Sider, Content,
} = Layout;

export default class TestRouter extends Component {
    render() {
        return (<div>
            <Layout>
                <Content>
                    <div className={ `content` }>
                        <h1>This is Home!</h1>
                    </div>
                </Content>
                <Footer>
                    <div className={ `footer` }>&copy; by jaakko</div>
                </Footer>
            </Layout>
        </div>)
    }
}