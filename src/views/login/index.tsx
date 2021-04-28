/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-04-22 14:47:17
 * @LastEditors: D.Y
 * @FilePath: /pherusa/src/views/login/index.tsx
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
    setToken('token')
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
            <a className="form-go-banner" href="/">
              <img
                className="nav-logo"
                alt="logo"
                src="https://cdn.wul.ai/official/img/officialLogo.png"
              />
            </a>
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
                <Form.Item name="phone" rules={[{ validator: this.checkPhone.bind(this) }]}>
                  <Input className="xlarge" placeholder={i18n.t('login.desc')} />
                </Form.Item>
                <Form.Item
                  name="captcha"
                  rules={[{ required: true, message: i18n.t('validate.captcha.message') }]}
                >
                  <div className="flex-r">
                    <div className="flex-1">
                      <Input
                        className="xlarge"
                        type="captcha"
                        placeholder={i18n.t('validate.captcha.placeholder')}
                      />
                    </div>
                    <div className="m-l-12">
                      <Button type="primary" className="xlarge">
                        <Trans i18nKey="login.captcha"></Trans>
                      </Button>
                    </div>
                  </div>
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
