/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-04-29 14:04:43
 * @LastEditors: D.Y
 * @FilePath: /pherusa-micro/src/layouts/main/index.tsx
 * @Description:
 */
import React, { Component } from 'react'
import { RouteViewer, GlobalLoading } from 'laiye-pro'

import NavComponent from '../nav'
import PreferenceComponent from '../preference'
import NavbarComponent from '../navbar'
import { setInfo } from '../../permission'
import logoPath from '../../assets/logo.png'

import styles from './index.module.less'

type IMainLayoutProps = {
  route: any
  history: any
}

type IMainLayoutState = {
  loading: boolean
}

export default class MainLayout extends Component<IMainLayoutProps, IMainLayoutState> {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }
  componentDidMount() {
    setInfo().then((res) => {
      if (res) {
        this.setState({
          loading: false,
        })
        this.props.history.push('/dashboard')
      }else{
        this.props.history.push('/login')
      }
    })
  }
  componentDidCatch(error, info) {
    // 捕获子组件渲染错误，可以存储在数据库
    console.log(error, info)
  }

  render() {
    const { route, history } = this.props
    const { loading } = this.state
    return (
      <>
        {loading ? (
          <div className={styles['main-layout']}>
            <GlobalLoading />
          </div>
        ) : (
          <div className={styles['main-layout']}>
            <div className={styles['main-layout-side']}>
              <img className="logo" alt="logo" src={logoPath} width="40" />
              <div className="navs">
                <NavComponent history={history} />
              </div>
              <PreferenceComponent />
            </div>
            <div id="Main" className={styles['main-layout-main']}>
              <NavbarComponent />
              <div className={styles['main-layout-main-container']}>
                <RouteViewer routers={route.children} />
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}
