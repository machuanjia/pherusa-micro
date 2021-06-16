/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-04-28 14:01:12
 * @LastEditors: D.Y
 * @FilePath: /pherusa-micro/src/index.tsx
 * @Description: 
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { ConfigProvider } from 'antd'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from '@stores/store'
import './stores/global'

import { history } from '@utils/history'
import '@i18n'
import { getAntdLocal } from '@i18n/index'

import './styles/index.less'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './register'



ReactDOM.render(
  <Provider store={store}>
    <Helmet>
      <title>来也科技</title>
    </Helmet>
    <BrowserRouter history={history}>
      <ConfigProvider locale={getAntdLocal()} componentSize="middle">
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
