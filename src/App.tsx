/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-04-22 17:47:02
 * @LastEditors: D.Y
 * @FilePath: /pherusa/src/App.tsx
 * @Description:
 */

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { RouteViewer } from 'pherusa-pro'
import store from '@stores/store'

class App extends Component {
  render() {
    const { routers } = store.getState().app
    return <RouteViewer routers={routers} />
  }
}
export default withRouter(App)
