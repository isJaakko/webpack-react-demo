import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Col } from 'antd';
import request from '../../../util/request';

const { Column } = Table;
const PageSize = 5;

export default class ResultList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            current: 1,
            size: PageSize,
            total: 0,
            dataSource: []
        }
    }

    componentDidMount() {
        request({
            method: 'get',
            url: '/api/query',
            port: 3030
        }).then(data => {
            this.setState({
                dataSource: data.data
            })
        })
    }

    render() {
        const { changePage, changeVisible, updateMessage } = this;
        const { visible, message, current: currentPage, size, dataSource } = this.state;

        return (<Table
            bordered
            dataSource={ dataSource }
        // pagination={false}
        >
            <Column
                title="课程名"
                dataIndex="course_name"
            >
            </Column>
            <Column
                title="姓名"
                dataIndex='stu_name'
            />
            <Column
                title="学号"
                dataIndex='stu_id'
            />
            <Column
                title="得分"
                dataIndex='score_total'
            />
            <Column
                title="最后修改时间"
                dataIndex='last_modified'
            />
            <Column
                title="详细"
                dataIndex="option"
                render={ () => (<Link to='/result/45318'>查看</Link>) }
            />
        </Table>)
    }
}