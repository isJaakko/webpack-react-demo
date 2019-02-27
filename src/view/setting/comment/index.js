import React, { Component } from 'react';
import { Table, Input, Button, Popconfirm, Form, Divider } from 'antd';
import EditableCell from 'component/editableCell';
import { EditableFormRow, Consumer } from 'component/editableCell';

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}

export default class CommentTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            editingKey: ''
        };

        this.handleAdd = this.handleAdd.bind(this);

        this.columns = [
            {
                title: 'name',
                dataIndex: 'name',
                editable: true,
            },
            {
                title: 'operation',
                width: '25%',
                dataIndex: 'operation',
                render: (text, record) => {
                    const editable = this.isEditing(record);
                    return (
                        <div>
                            {editable ? (
                                <span>
                                    <Consumer>
                                        {form => (
                                            <a
                                                href="javascript:;"
                                                onClick={() => this.save(form, record.key)}
                                                style={{ marginRight: 8 }}
                                            >
                                                Save
                                            </a>
                                        )}
                                    </Consumer>
                                    <Popconfirm
                                        title="Sure to cancel?"
                                        onConfirm={() => this.cancel(record.key)}
                                    >
                                        <a>Cancel</a>
                                    </Popconfirm>
                                </span>
                            ) : (<span>
                                <a
                                    onClick={() => this.edit(record.key)}
                                    style={{ marginRight: 8 }}>
                                    Edit
                                </a>
                                <Popconfirm
                                    title="Sure to delete?"
                                    onConfirm={() => this.cancel(record.key)}
                                >
                                    <a>delete</a>
                                </Popconfirm>
                            </span>)}
                        </div>
                    );
                },
            },
        ];
    }

    isEditing(record) {
        return record.key === this.state.editingKey;
    }

    cancel() {
        this.setState({ editingKey: '' });
    };

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

    edit(key) {
        this.setState({ editingKey: key });
    }

    handleAdd() {
        const { count, data } = this.state;
        const newData = {
            key: (data.length - 1).toString(),
            name: `Edrward ${data.length - 1}`,
            age: 32,
            address: `London Park no. ${data.length - 1}`,
        };
        this.setState({
            data: [...data, newData],
            count: count + 1,
        });
    }

    render() {
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });

        return (<div>
            <Button type="primary" onClick={this.handleAdd} style={{ marginBottom: 16 }}>
                add a row
            </Button>
            <Table
                components={components}
                bordered
                dataSource={this.state.data}
                columns={columns}
                rowClassName="editable-row"
            />
        </div>
        );
    }
}