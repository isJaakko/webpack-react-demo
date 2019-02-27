import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import styles from './main.css';

const { Item } = Form;

class ScoreForm extends Component {

    constructor(props) {
        super(props);
        this.calcTotal = this.calcTotal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            formItem: []
        }
    }

    componentDidMount() {
        const data = [{
            label: '内容',
            ratio: '50%',
            key: 'content',
        }, {
            label: '结论',
            ratio: '30%',
            key: 'conclusion',
        }, {
            label: '考勤',
            ratio: '20%',
            key: 'attendance',
        }];
        this.setState({
            formItem: data
        })
    }

    calcTotal() {
        const { form } = this.props;
        const value = form.getFieldsValue();
        let result = 0;
        Object.keys(value).map(item => {
            result += parseInt(value[item]);
        })
        console.log(result);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator, resetFields } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xl: 3,
                xxl: 2
            },
            wrapperCol: {
                xl: 2,
                xxl: 1
            }
        };
        const { formItem } = this.state;

        return (<Form
            hideRequiredMark
            onSubmit={this.handleSubmit}
        >
            {
                formItem && formItem.map(item => (<Item
                    {...formItemLayout}
                    label={`${item.label}（${item.ratio}）`}
                >
                    {getFieldDecorator(item.key, {
                        rules: [{
                            required: true,
                            pattern: /^[0-9]{1,2}$/,
                            message: '请输入2位以内的数字'
                        }]
                    })(
                        <Input />
                    )}
                </Item>))
            }
            <Item
                wrapperCol={{
                    xl: 4,
                    xxl: 2,
                    offset: 1 
                }}
            >
                <div className={styles.buttonWrap}>
                    <Button
                        onClick={()=>{
                            resetFields();
                        }}
                    >
                        重置
                    </Button>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        提交
                    </Button>
                </div>
            </Item>
        </Form >);
    }
}

export default Form.create({})(ScoreForm);