import React, { Component } from 'react';
import { Table, Button, Pagination, Divider } from 'antd';
import FilterBar from 'component/filterBar';
import ResultList from 'component/resultList';

const { Column } = Table;
const PageSize = 5;

export default class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            current: 1,
            size: PageSize,
            total: 0,
        }
    }

    render() {
        const { changePage, changeVisible, updateMessage } = this;
        const { visible, message, current: currentPage, size } = this.state;

        return (<div>
            <FilterBar />
            <Divider />
            <ResultList />
        </div>)
    }
}