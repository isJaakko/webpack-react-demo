import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import style from './main.css';

const FormItem = Form.Item;

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const value = this.props.form.getFieldsValue();
    }

    check(rule, value, callback) {
        const pattern = /[0-9a-zA-Z]/;
        if (!(pattern.test(value))) {
            callback('用户名必须为字母或数字');
        }
        callback();
    }

    render() {
        const { handleClick, check } = this;
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="login-warp">
                <span className="login-title">login</span>
                <Form className="login-form">
                    <FormItem>
                        {
                            getFieldDecorator('username', {
                                rules: [{
                                    validator: check
                                }]
                            })(
                                <Input prefix={<Icon type="user" />} placeholder="username"></Input>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('password')(
                                <Input prefix={<Icon type="lock" />} type="password" placeholder="password"></Input>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        <Button htmlType="submit" onClick={handleClick}>Login</Button>
                    </FormItem>
                </Form>
            </div >
        )
    }
}

LoginForm = Form.create({})(LoginForm)
export default LoginForm;