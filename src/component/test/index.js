import React, { Component } from 'react';
import { Button } from 'antd';

const { log } = console;
export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        log('WillMount')
    }

    componentDidMount() {
        log('DidMount')
        this.setState({
            count: this.state.count + 1
        });
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        });
        console.log(this.state.count)
    }

    componentWillReceiveProps(nextProps) {
        log('receiveProps!')
        this.setState({
            count: this.state.count + 1
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        log('shouldUpdate');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        log('WillUpdate')
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     log('getSnapshotBeforeUpdate');
    //     return {
    //         name: 'jaakko'
    //     }
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        log('DidUpdate');
        // log(prevState, this.state, snapshot);
    }

    componentWillUnmount() {
        log('willUnmount');
    }

    render() {
        console.log('render ', this.state);

        return (<div>
            <Button onClick={() => {
                // console.log('before1:', this.state);
                // this.setState({
                //     count: this.state.count + 1
                // });
                // this.setState((preState) => ({ count: preState.count + 1 }));
                // console.log('end:', this.state);
            }}>
                change
                {/* {this.state.count} */}
            </Button>
            <p>{this.state.count}</p>
            {/* <p>{this.state.age}</p> */}
        </div>);
    }
}