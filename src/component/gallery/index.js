import React, { Component } from 'react';
import { Alert } from 'antd';

export default class Hello extends Component {

    componentDidMount() {
        console.log(this.props.location.pathname);
    }

    render() {
        return (<div>
            <h1>Gallery Component</h1>
            <Alert message="Success Text" type="success" />
        </div>
        );
    }
}