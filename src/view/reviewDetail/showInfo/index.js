import React, { Component } from 'react';
import { Row, Col } from 'antd';
import InfoCard from 'component/infoCard';
import StatusCard from 'component/statusCard';

export default class showInfo extends Component {
    render() {
        return (<Row>
            <Col
                span={16}
            >
                <InfoCard />
            </Col>
            <Col
                span={8}
            >
                <StatusCard />
            </Col>
        </Row>);
    }
}