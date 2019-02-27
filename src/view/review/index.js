import React, { Component } from 'react';
import FilterBar from 'component/filterBar';
import ReportList from 'component/reportList';
import { Divider } from 'antd';

export default class Review extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (<div>
            <FilterBar />
            <Divider />
            <ReportList />
        </div>);
    }
}