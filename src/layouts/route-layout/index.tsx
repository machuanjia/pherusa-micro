/*
 * @Author: D.Y
 * @Date: 2021-02-04 18:55:58
 * @LastEditTime: 2021-04-22 17:48:08
 * @LastEditors: D.Y
 * @FilePath: /pherusa/src/layouts/route-layout/index.tsx
 * @Description: 
 */
import React, { Component } from 'react';
import { RouteViewer } from 'laiye-pro';

type IRouterProps = {
  route: any;
};

type IRouterState = Record<string, unknown>;

export default class RouteLayout extends Component<IRouterProps, IRouterState> {
  render() {
    const { route } = this.props;
    return <RouteViewer routers={route.children} />;
  }
}
