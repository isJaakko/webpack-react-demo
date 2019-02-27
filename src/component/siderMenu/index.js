import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import classNames from 'classnames';
import RouteMap from '../router/route';
import { menuMap } from '../../const';
import { Layout } from 'antd';
import styles from './main.css';

const { Sider } = Layout;
const { Item, SubMenu } = Menu;

export default class NavMenu extends Component {

    constructor(props) {
        super(props);
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
        this.getSelectKeys = this.getSelectKeys.bind(this);
        this.renderMenu = this.renderMenu.bind(this);
        this.renderSubMenu = this.renderSubMenu.bind(this);

        this.state = {
            collapsed: true,
        }
    }

    getSelectKeys() {
        const {
            location: { pathname }
        } = this.props;

        return pathname;
    }

    toggleCollapsed() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    onCollapse(collapsed) {
        this.setState({ collapsed });
    }

    renderMenu(menuData) {
        const { renderSubMenu } = this;

        return (Object.keys(menuData).map(item => {
            let MenuItem = menuData[item];
            if (MenuItem.children) {
                return renderSubMenu(MenuItem);
            }
            return (<Item key={MenuItem.path}>
                <Link to={MenuItem.path}>
                    <Icon type={MenuItem.icon} />
                    <span>
                        {MenuItem.name}
                    </span>
                </Link>
            </Item>)
        }))
    }

    renderSubMenu(subMenuData) {
        return (<SubMenu
            key="sub1"
            title={<span><Icon type={subMenuData.icon} /><span>{subMenuData.name}</span></span>}
        >
            {
                subMenuData.children.map(item => {
                    return (<Item key={`${subMenuData.path}${item.path}`}>
                        <Link to={`${subMenuData.path}${item.path}`}>
                            <span>
                                {item.name}
                            </span>
                        </Link>
                    </Item>)
                })
            }
        </SubMenu>)
    }

    render() {
        const { getSelectKeys, renderMenu } = this;

        return (
            <div>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    className={styles.menuBody}
                >
                    <div className={styles.logo}>
                        <Link to="/" className={styles.logo_link} >
                            <Icon type="home" className={styles.logo_img} />
                            {/* <span className={ classNames(styles.logo_text, { [styles.logo_text_hidden]: this.state.collapsed }) }>Home</span> */}
                        </Link>
                    </div>
                    <Menu
                        selectedKeys={[getSelectKeys()]}
                        mode="inline"
                        theme="dark"
                    >
                        {renderMenu(menuMap)}
                    </Menu>
                </Sider>
            </div>
        )
    }
}