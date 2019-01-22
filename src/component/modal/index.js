import React, { Component } from 'react';
import { Modal } from 'antd';

const { log } = console;
export default class ModalDemo extends Component {
    constructor(props) {
        super(props);
    }

    // componentWillReceiveProps(nextProps) {
    //     log('child receiveProps!')
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     log('shouldUpdate');
    //     return true;
    // }

    // componentWillUpdate() {
    //     log('WillUpdate')
    // }

    render() {
        const { message, visible, onCancel } = this.props;

        return (<Modal
            visible={visible}
            onCancel={() => {
                onCancel();
            }}
        >
            <h1>{`hello, ${message}`}</h1>
        </Modal>)
    }
}