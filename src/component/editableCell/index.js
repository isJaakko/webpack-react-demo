import React, { Component } from 'react';
import { Input, Form } from 'antd';

const FormItem = Form.Item;
const EditableContext = React.createContext();
const { Provider, Consumer } = EditableContext;
const EditableRow = ({ form, index, ...props }) => (
    <Provider value={form}>
        <tr {...props} />
    </Provider>
);

const EditableFormRow = Form.create()(EditableRow);

export default class EditableCell extends React.Component {
    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            ...restProps
        } = this.props;

        return (
            <Consumer>
                {
                    (form) => {
                        const { getFieldDecorator } = form;
                        return (
                            <td {...restProps}>
                                {editing ? (
                                    <FormItem style={{ margin: 0 }}>
                                        {getFieldDecorator(dataIndex, {
                                            rules: [{
                                                required: true,
                                                message: `Please Input ${title}!`,
                                            }],
                                            initialValue: record[dataIndex],
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                ) : restProps.children}
                            </td>
                        );
                    }
                }
            </Consumer>
        );
    }
}

export {
    EditableFormRow,
    Consumer
}