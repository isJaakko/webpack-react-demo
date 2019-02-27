import React, { Component } from 'react';
import { Card } from 'antd';
import styles from './main.css';

const { Grid } = Card;

export default class StatusCard extends Component {
    render() {
        return (<div className={styles.statusCard}>
            <div>
                <div>评阅状态</div>
                <div className={styles.status}>{'未评阅'}</div>
            </div>
            <div>
                <div>分数</div>
                <div className={styles.score}>{'90'}</div>
            </div>
        </div>)
    }
}