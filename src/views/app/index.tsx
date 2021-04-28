/*
 * @Author: D.Y
 * @Date: 2021-04-28 10:16:50
 * @LastEditTime: 2021-04-28 13:32:21
 * @LastEditors: D.Y
 * @FilePath: /pherusa-micro/src/views/app/index.tsx
 * @Description:
 */
import React, { Component } from 'react'
import { PartLoading } from 'laiye-pro'

type State = unknown

class AppView extends Component<any, State> {
  componentDidMount() {
    const { route } = this.props
    if(route.meta && route.meta.redirect){
      this.props.history.push(route.meta.redirect)
      document.getElementById(route.meta.key).style.display = 'block'
      document.getElementById('Main').style.display = 'none'
    }
  }
  componentWillUnmount(){
    const { route } = this.props
    if(route.meta){
      document.getElementById(route.meta.key).style.display = 'none'
      document.getElementById('Main').style.display = 'block'
    }
  }
  render() {
    return <PartLoading/>
  }
}
export default AppView
