import React, { Component } from 'react';
import { Table, Button } from 'antd';
import styles from './main.css';
import { browserHistory as router, Link } from 'react-router-dom';

const { Column } = Table;

export default class ReportList extends Component {
    render() {
        const dataSource = [{
            experiment: '实验一',
            number: '5120151111',
            name: 'aaa',
            is_review: '否',
        }];

        return (<div className={styles.table}>
            <Table
                bordered
                dataSource={dataSource}
            >
                <Column
                    title="实验"
                    dataIndex="experiment"
                // width={200}
                />
                <Column
                    title="学号"
                    dataIndex="number"
                // width={200}
                />
                <Column
                    title="姓名"
                    dataIndex="name"
                // width={150}
                />
                <Column
                    title="操作"
                    dataIndex="review"
                    // render={ () => (<Button
                    //     type="primary"
                    //     onClick={ () => {
                    //         router.push('/reviewDetail');
                    //     } }
                    // >
                    //     评分
                    // </Button>) }
                    render={() => (<Link to='/review/45318'>评分</Link>)}
                />
            </Table>
        </div>)
    }
}