import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import RouteMap from '../../router/route';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            path: window.location.pathname
        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <Menu
                mode="horizontal"
                defaultSelectedKeys={[this.state.path]}
            >
                <Menu.Item key={'/'}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                {Object.keys(RouteMap).map((item, index) => {
                    let MenuItem = RouteMap[item];
                    console.log(MenuItem.path);

                    return (
                        <Menu.Item key={MenuItem.path}>
                            <Link to={MenuItem.path}>{item}</Link>
                        </Menu.Item>)
                })}
            </Menu>
        )
    }
}