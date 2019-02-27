import React, { Component } from 'react';
import { Input, Form } from 'antd';

const { Item } = Form;
const EditableContext = React.createContext();
const { Provider, Consumer } = EditableContext;

const EditableFormRow = Form.create()(EditableRow);

export default class EditableCell extends React.Component {
    render() {
        return (
            <Consumer>
            </Consumer>
        );
    }
}

export {
    EditableFormRow,
    Consumer
}