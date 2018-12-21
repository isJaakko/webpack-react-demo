import React, { Component } from 'react';
import style from './main.css';
import request from 'util/request';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    async getInfo() {
        const data = await request({url: '/api/about'});
        return data;
    }

    componentDidMount() {
        this.getInfo().then((res) => {
            this.setState({
                data: res
            })
        });
    }

    render() {
        const { data } = this.state

        return (<div>
            <h1>about</h1>
            { data && data.data && `hello, ${data.data.name}` }
        </div>)
    }
}
