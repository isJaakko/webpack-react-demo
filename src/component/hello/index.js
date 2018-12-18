import React, { Component } from 'react';
import { Alert } from 'antd';

export default class Hello extends Component {
    render() {
        return (<div>
            <h1> hello component</h1>
            <Alert message="Success Text" type="success" />
        </div>
        );
    }
}