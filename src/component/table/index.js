import React, { Component } from 'react';
import { Table, Button, Pagination } from 'antd';

const { Column } = Table;
const PageSize = 5;
const { log } = console;

export default class TableDemo extends Component {

    constructor(props) {
        super(props);
        this.setData = this.setData.bind(this);
        this.getData = this.getData.bind(this);
        this.changePage = this.changePage.bind(this);
        this.state = {
            current: 1,
            size: PageSize,
            total: 0
        }
    }

    componentWillMount() {
        log('WillMount')
    }

    componentDidMount() {
        log('DidMount')
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

    render() {
        const { getData, changePage } = this;
        const { current: currentPage, size } = this.state;
        const dataSource = getData(currentPage, size);
        log('render')

        return (<div>
            <Table
                dataSource={dataSource.data}
                pagination={false}
            >
                <Column title="name" key='name' dataIndex='name' width={100} />
                <Column title="age" key='age' dataIndex='age' width={80} />
                <Column title="action" key='action' dataIndex='action' render={(tetx, record) => (
                    <Button href="javascript:;">update state</Button>
                )} />
            </Table>
            <Pagination
                total={dataSource.total}
                defaultPageSize={size}
                current={currentPage}
                onChange={changePage}
            />
        </div>)
    }
}