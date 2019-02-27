import React, { Component } from 'react';
import { } from 'antd';
import styles from './main.css';

export default class GlobalHeader extends Component {
    render() {
        return (<div className={ styles.header }>
            <a>退出登录</a>
        </div>)
    }
}