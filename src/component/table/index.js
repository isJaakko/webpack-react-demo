import React, { Component } from 'react';
import { Table, Button, Pagination } from 'antd';
import ModalDemo from '../modal';

const { Column } = Table;
const PageSize = 5;
const { log } = console;

export default class TableDemo extends Component {

    constructor(props) {
        super(props);
        this.setData = this.setData.bind(this);
        this.getData = this.getData.bind(this);
        this.changePage = this.changePage.bind(this);
        this.changeVisible = this.changeVisible.bind(this);
        this.state = {
            visible: false,
            message: '',
            current: 1,
            size: PageSize,
            total: 0,
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps');
    //     return null;
    // }

    componentWillMount() {
        log('WillMount')
    }

    componentDidMount() {
        log('DidMount')
    }

    componentWillReceiveProps(nextProps) {
        log('receiveProps!')
    }

    shouldComponentUpdate(nextProps, nextState) {
        log('shouldUpdate');
        return true;
    }

    componentWillUpdate() {
        log('WillUpdate')
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     log('getSnapshotBeforeUpdate');
    //     return {
    //         name: 'jaakko'
    //     }
    // }

    componentDidUpdate(nextProps, nextState, snapshot) {
        log('DidUpdate');
        // log(nextState, this.state, snapshot);
    }

    componentWillUnmount() {
        log('unmount');
    }

    // 生成数据
    setData(length) {
        const dataSource = [];
        for (let i = 0; i < length; i++) {
            dataSource.push({
                key: `${i}`,
                name: `tset ${i + 1}`,
                age: 32
            })
        }
        return {
            dataSource,
            total: length
        };
    }

    // 返回查询数据(页码, size)
    getData(page, size) {
        const { setData } = this;
        const data = setData(16);
        const result = [];
        const start = size * (page - 1);
        const end = size * page > data.dataSource.length ? data.dataSource.length : size * page;

        for (let i = start; i < end; i++) {
            result.push(data.dataSource[i]);
        }
        return {
            data: result,
            total: data.total
        };
    }

    // 页码改变时
    changePage(current, size) {
        this.setState({
            current
        })
    }

    // 改变弹窗状态
    changeVisible(visible) {
        console.log('setState');

        this.setState({
            visible
        })
    }

    render() {
        const { getData, changePage, changeVisible, updateMessage } = this;
        const { visible, message, current: currentPage, size } = this.state;
        const dataSource = getData(currentPage, size);
        log('render')

        return (<div>
            <Table
                dataSource={dataSource.data}
                pagination={false}
            >
                <Column title="name" key='name' dataIndex='name' width={100} />
                <Column title="age" key='age' dataIndex='age' width={80} />
                <Column title="action" key='action' dataIndex='action' render={(text, record) => {
                    return (
                        <Button
                            href="javascript:;"
                            onClick={() => {
                                changeVisible(true);
                                this.setState({
                                    message: record.name
                                })
                            }}
                        >update state</Button>
                    )
                }} />
            </Table>

            <Pagination
                total={dataSource.total}
                defaultPageSize={size}
                current={currentPage}
                onChange={changePage}
            />
            <ModalDemo
                visible={visible}
                message={message}
                onCancel={changeVisible}
                updateMessage={updateMessage}
            />
        </div>)
    }
}