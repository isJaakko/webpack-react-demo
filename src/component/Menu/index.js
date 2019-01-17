import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '/'
        }
    }

    componentWillMount() {
        this.setState({
            path: window.location.pathname
        })
    }

    render() {
        return (<ul>
            <li class="menu_item"><Link to='/' activeStyle={{ color: 'red' }}>home</Link></li>
            <li class="menu_item"><Link to='/gllery'>gllery</Link></li>
            <li class="menu_item"><Link to='/about'>about</Link></li>
            <li class="menu_item login"><Link to='/login'>login</Link></li>
        </ul>
        )
    }
}