import React, { Component } from 'react';
import { Alert, Layout } from 'antd';
import style from './main.css';
const {
    Header, Footer, Sider, Content,
} = Layout;

export default class TestRouter extends Component {

    render() {
        return (<div>
            <h1>About Component</h1>
            <Alert message="info Text" type="info" />
        </div>)
    }
}