/*
 * @Author: D.Y
 * @Date: 2021-04-21 17:38:42
 * @LastEditTime: 2021-04-22 15:11:58
 * @LastEditors: D.Y
 * @FilePath: /pherusa/src/utils/request.ts
 * @Description:
 */

import { message } from 'laiye-antd'
import { logout } from '@utils/index'
import { getRequest } from 'laiye-pro'

export default getRequest({
  baseURL: APP_CONFIGRATION.api,
  responseAction: (res) => {
    // eslint-disable-next-line no-debugger
    const { code, data } = res
    if (code !== 200) {
      if (code === 10001) {
        message.error('没有权限登录，请联系渠道经理!')
      } else if (code === 10003) {
        message.error('验证码无效!')
      } else if (code === 10004) {
        message.error('用户没有登录，请重新登录!')
        logout()
      } else if (code === 10010) {
        logout()
      }
      return Promise.reject(res)
    }
    return res
  },
})
