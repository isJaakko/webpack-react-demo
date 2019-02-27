import React, { Component } from 'react';
import { Table, Col, Input } from 'antd';

const { Column } = Table;
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
            data,
            editingKey: ''
        };
    }

    isEditing(key) {
        console.log(key, this.editingKey);
        return key === this.editingKey;
    }

    render() {
        return (<div>
            <Table
                bordered
                dataSource={this.state.data}
                rowClassName="editable-row"
            >
                <Column
                    title="名字"
                    dataIndex="name"
                    render={(text, record, index) => {
                        const editing = this.isEditing(record.key);
                        // console.log('isEditing', editing);
                        return (editing ? <Input value={text} />
                            : <span>text</span>)
                    }}
                />
                <Column
                    title="年龄"
                    dataIndex="age"
                />
                <Column
                    title="操作"
                    dataIndex="option"
                    render={(text, record, index) => {
                        return (<a
                            href="javascript:;"
                            onClick={() => {
                                this.setState({
                                    editingKey: record.key
                                }, () => { console.log(this.state) })
                            }}
                        >
                            edit
                        </a>)
                    }}
                />
            </Table>
        </div>
        );
    }
}