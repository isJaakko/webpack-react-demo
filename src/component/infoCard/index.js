import React, { Component } from 'react';
import { Row, Col } from 'antd';

const { Fragment } = React;

export default class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        const mockData = {
            number: '5120151111',
            name: 'aaa',
            experiment: '实验一'

        };

        this.setState({
            data: mockData
        })
    }

    render() {
        const layout = {
            xl: 8,
            xxl: 6
        };
        const { data } = this.state;

        return (<Fragment>
            <Row>
                <Col
                    {...layout}
                >
                    学号：{data.number}
                </Col>
                <Col
                    {...layout}
                >
                    姓名：{data.name}
                </Col>
            </Row>
            <Row>
                <Col
                    {...layout}
                >
                    实验：{data.experiment}
                </Col>
                <Col
                    {...layout}
                >
                    实验报告：<a>查看</a>
                </Col>
            </Row>
        </Fragment>)
    }
}