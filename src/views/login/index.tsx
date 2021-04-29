/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-04-29 14:08:46
 * @LastEditors: D.Y
 * @FilePath: /pherusa-micro/src/views/login/index.tsx
 * @Description:
 */
import React, { Component } from 'react'
import { Form, Input, Button } from 'laiye-antd'
import type { ILoginEntity } from '@interfaces/index'
import i18n from 'i18next'
import { connect } from 'react-redux'
import { Trans } from 'react-i18next'

import { isPhoneNumber } from 'laiye-pro'
import { signIn } from '@apis/users'
import { addToken } from '@stores/app/app.actions'
import { setToken } from '@utils/index'

import styles from './index.module.less'

type ILoginProps = {
  history: any
  addToken: (token: string) => unknown
}
type ILoginState = unknown

class LoginView extends Component<ILoginProps, ILoginState> {
  async loginSuccess(payload: ILoginEntity) {
    const { data } = await signIn(payload)
    setToken(data.token)
    data && this.props.history.push('/')
  }

  handleSubmit(values: any) {
    this.loginSuccess(values)
  }

  checkPhone(rule, value, callback) {
    if (isPhoneNumber(value)) {
      callback()
    } else {
      callback(i18n.t('validate.phone.message'))
    }
  }

  render() {
    return (
      <div className={styles['login-wrap']}>
        <div className={styles['login-aside']}>
          <div className={styles['login-icon']}>
          </div>
          <img
            className={styles['login-aside-content']}
            alt="login"
            src="https://cdn.wul.ai/official/hestia/login-aside-content.png"
          />
        </div>
        <div className={styles['login-main']}>
          <div className={styles['login-form-wrap']}>
            <div className={styles['login-form-header']}>
              <div className={styles['login-form-title']}>
                <Trans i18nKey="login.title"></Trans>
              </div>
              <div className={styles['login-form-desc']}>
                <Trans i18nKey="login.desc"></Trans>
              </div>
            </div>
            <div className={styles['login-form-body']}>
              <Form onFinish={this.handleSubmit.bind(this)} className={styles['page-form']}>
                <Form.Item name="username" rules={[{ required:true }]}>
                  <Input className="xlarge" placeholder={i18n.t('login.desc')} />
                </Form.Item>
                <Form.Item name="password" rules={[{ required:true }]}>
                  <Input className="xlarge" placeholder={i18n.t('login.desc')} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="xlarge" block>
                    <Trans i18nKey="login.signin"></Trans>
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className={styles['login-form-footer']}>
              <Trans i18nKey="login.is_registe"></Trans>
              <a href="/">
                <Trans i18nKey="login.registe_now"></Trans>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToken: (token: string) => {
      dispatch(addToken(token))
    },
  }
}

const mapStateToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
