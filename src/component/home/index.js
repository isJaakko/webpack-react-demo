import React, { Component } from 'react';
import { Alert } from 'antd';

export default class TestRouter extends Component {
    render() {
        return (<div>
            <h1>Bye Component</h1>
            <Alert message="info Text" type="info" />
        </div>)
    }
}