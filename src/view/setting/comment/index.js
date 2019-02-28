import React, { Component } from 'react';
import { Table, Form, Input } from 'antd';
import Item from 'antd/lib/list/Item';

const EditableContext = React.createContext();
const { Provider, Consumer } = EditableContext;

class EditableRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { form, ...props } = this.props;
        // console.log(this.props);

        return (<Provider value={form}>
            <tr {...props} />
        </Provider>)
    }
}
const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            record,
            dataIndex,
            editing,
            title,
            ...restProps
        } = this.props;
        // console.log(this.props);

        return (<td>
            <Consumer>
                {(form) => {
                    const { getFieldDecorator } = form;
                    return (<Item>
                        {
                            editing ?
                                getFieldDecorator(dataIndex, {
                                    rules: [{
                                        required: true,
                                        message: `Please Input ${title}!`,
                                    }],
                                    initialValue: record[dataIndex],
                                })(<Input />)
                                : restProps.children    // 这里不太清楚为什么是 `restProps.children` 这个属性
                        }
                    </Item>)
                }}
            </Consumer>
        </td>)
    }
}

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}

export default class EditableTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            editingKey: '',
        }

        this.isEditing = this.isEditing.bind(this);

        this.columns = [{
            title: "名字",
            dataIndex: "name",
            editable: true,
        }, {
            title: "年龄",
            dataIndex: "age",
            width: '15%',
        }, {
            title: "操作",
            dataIndex: "operation",
            title: "操作",
            width: '15%',
            render: (text, record) => (
                this.isEditing(record.key) ? (<Consumer>
                    {(form) => {
                        return (<a
                            onClick={() => { this.save(form, record.key) }}
                        >save</a>)
                    }}
                </Consumer>) : (<div>
                    <a
                        onClick={() => {
                            this.setState({
                                editingKey: record.key
                            })
                        }}
                    >edit</a>
                </div>)
            )
        }]
    }

    isEditing(key) {
        return key === this.state.editingKey;
    }

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }

            const newData = [...this.state.data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ data: newData, editingKey: '' });
            } else {
                newData.push(row);
                this.setState({ data: newData, editingKey: '' });
            }
        });
    }

    render() {
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell
            }
        }

        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            return ({
                ...col,
                onCell: (record) => ({
                    record,
                    dataIndex: col.dataIndex,
                    key: col.key,
                    title: col.title,
                    editing: this.isEditing(record.key),
                })
            })
        })

        return (<Table
            bordered
            components={components}
            columns={columns}
            dataSource={this.state.data}
            rowClassName="editable-row"
        />)
    }
}