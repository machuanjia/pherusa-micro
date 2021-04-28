/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-04-27 15:44:40
 * @LastEditors: D.Y
 * @FilePath: /pherusa/src/layouts/nav/index.tsx
 * @Description:
 */
import React, { Component } from 'react'
import { Menu } from 'laiye-antd'
import { Link } from 'react-router-dom'
import { find } from 'lodash'
import { Icon } from 'laiye-pro'
import store from '@stores/store'
import { ROUTE_APP_KEY } from '@routes/index'

type IRoute = {
  path: string
  meta: {
    key: string
    name: string
    isLink?: boolean
    redirect?: string
    icon?: string
    className?: string
    isHidden?: boolean
  }
  children?: IRoute[]
}

type INavProps = {
  history: any
}

type INavState = {
  routers: IRoute[]
  selected: string[]
}
const { SubMenu } = Menu
export default class NavComponent extends Component<INavProps, INavState> {
  constructor(props) {
    super(props)
    const allRoutes = store.getState().app.routers
    const home = find(allRoutes, (n) => {
      return n.meta.key === ROUTE_APP_KEY
    })
    const { location } = this.props.history
    const menu = find(store.getState().app.flattenRouters, { path: location.pathname })
    this.state = {
      routers: home.children,
      selected: menu ? [menu.meta.key] : [],
    }
  }

  componentDidMount() {
    // const { history } = this.props
    // history.listen((args) => {
    // })
  }

  getMenu(menus) {
    if (menus && menus.length > 0) {
      return menus.map((item) => {
        if (item.meta.isHidden) {
          return null
        }
        if (item.children && item.children.length > 0) {
          return (
            <SubMenu
              key={item.meta.key}
              icon={<Icon className="m-r-8" name={item.meta.icon} />}
              title={item.meta.name}
            >
              {this.getMenu(item.children)}
            </SubMenu>
          )
        }
        return (
          <Menu.Item key={item.meta.key} title={item.meta.name}>
            <Link to={item.path}>
              <Icon className="m-r-8" name={item.meta.icon} /> <span>{item.meta.name}</span>
            </Link>
          </Menu.Item>
        )
      })
    }
    return []
  }

  render() {
    const { routers, selected } = this.state
    return (
      <Menu
        defaultSelectedKeys={selected}
        mode="inline"
        theme="light"
        inlineCollapsed={true}
        className={'nav-wrap'}
      >
        {this.getMenu(routers)}
      </Menu>
    )
  }
}
