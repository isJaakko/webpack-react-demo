import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import styles from './main.css';

const { Item } = Form;

class Admin extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 8 },
                xl: { span: 2 },
                xxl: { span: 1 },
            },
            wrapperCol: {
                xs: { span: 16 },
                xl: { span: 4 },
                xxl: { span: 3 },
            },
        };

        return (<Form
            hideRequiredMark
            className={ styles.form }
        >
            <Item
                { ...formItemLayout }
                label='原密码'
            >
                { getFieldDecorator('old_password', {
                    rules: [{ required: true, message: '原密码不能为空！' }]
                })(
                    <Input placeholder='请输入原密码' />
                ) }
            </Item>
            <Item
                { ...formItemLayout }
                label='新密码'
            >
                { getFieldDecorator('new_password', {
                    rules: [{ required: true, message: '新密码不能为空！' }]
                })(
                    <Input placeholder='请输入新密码' />
                ) }
            </Item>
            <Item
                { ...formItemLayout }
                label='确认新密码'
            >
                { getFieldDecorator('confirm_password', {
                    rules: [{ required: true, message: '新密码不能为空！' }]
                })(
                    <Input placeholder='请确认新密码' />
                ) }
            </Item>
            <Item
                wrapperCol={ {
                    sm: { span: 3 },
                    xl: 6,
                    xxl: 4
                } }
            >
                <div className={ styles.btnContainer }>
                    <div className={ styles.btn_confirm }>
                        { getFieldDecorator({})(
                            <Button type="primary">确认修改</Button>
                        ) }
                    </div>
                    <div className={ styles.btn_cancel }>
                        { getFieldDecorator({})(
                            <Button>取消</Button>
                        ) }
                    </div>
                </div>
            </Item>
        </Form >)
    }
}

export default Form.create({ name: 'admin' })(Admin);