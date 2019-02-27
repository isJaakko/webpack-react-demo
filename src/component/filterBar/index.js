import React, { Component } from 'react';
import { Select, Button, Row, Col, Input } from 'antd';
import styles from './main.css';

const Option = Select.Option;

export default class SelectBar extends Component {

    constructor(props) {
        super(props);
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    getSubjects(length) {
        const subjects = [];
        for (let i = 0; i < length; i++) {
            subjects.push(`实验 ${i + 1}`);
        }
        return subjects;
    }

    getNumbers(length) {
        const numbers = [];
        for (let i = 0; i < length; i++) {
            numbers.push(`512015${Math.ceil(Math.random() * 9999)}`);
        }
        return numbers;
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    handleBlur() {
        console.log('blur');
    }

    handleFocus() {
        console.log('focus');
    }

    render() {
        const { getSubjects, getNumbers, handleChange, handleBlur, handleFocus } = this;
        const subjects = getSubjects(7);
        const numbers = getNumbers(20);

        return (<div className={ styles.scorePanel }>
            <Row>
                <Col
                    xl={ 3 }
                    xxl={ 2 }
                >
                    <Select
                        style={ { width: 150 } }
                        onChange={ handleChange }
                        placeholder="选择实验"
                    >
                        {
                            subjects.map(item => (
                                <Option key={ item } value={ item }>{ item }</Option>
                            ))
                        }
                    </Select>
                </Col>
                <Col
                    xl={ 3 }
                    xxl={ 2 }
                >
                    <Select
                        showSearch
                        style={ { width: 150 } }
                        placeholder="选择学号"
                        optionFilterProp="children"
                        onChange={ handleChange }
                        onFocus={ handleFocus }
                        onBlur={ handleBlur }
                        filterOption={ (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
                    >
                        {
                            numbers.map(item => (
                                <Option key={ item } value={ item }>{ item }</Option>
                            ))
                        }
                    </Select>
                </Col>
                <Col
                    xl={ 3 }
                    xxl={ 2 }
                >
                    <Input
                        placeholder="输入姓名"
                    />
                </Col>
                <Col
                    xl={ 3 }
                    xxl={ 2 }
                    className={ styles.btnContainer }
                >
                    <Button type="primary">查询</Button>
                    <Button>清空</Button>
                </Col>
            </Row>
        </div >);
    }
}