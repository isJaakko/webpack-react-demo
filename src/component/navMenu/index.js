import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import RouteMap from '../../router/route';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavMenu extends Component {

    render() {
        return (
            <Menu
                mode="horizontal"
            >
                <Menu.Item>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                { Object.keys(RouteMap).map((item, index) => {
                    let MenuItem = RouteMap[item];
                    return (
                        <Menu.Item key="mail" key={ `${index}${item.path}` }>
                            <Link to={MenuItem.path}>{ item }</Link>
                        </Menu.Item>)
                }) }
            </Menu>
        )
    }
}