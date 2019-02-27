import React, { Component } from 'react';
import { Divider } from 'antd';
import ShowInfo from './showInfo';
import ScoreForm from './scoreForm';

export default class ReviewDetail extends Component {
    render() {
        return (<div>
            <ShowInfo />
            <Divider />
            <ScoreForm />
        </div>);
    }
}