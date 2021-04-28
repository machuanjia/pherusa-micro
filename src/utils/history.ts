/*
 * @Author: D.Y
 * @Date: 2021-04-20 10:06:53
 * @LastEditTime: 2021-04-22 15:05:04
 * @LastEditors: D.Y
 * @FilePath: /pherusa/src/utils/history.ts
 * @Description:
 */

import { browserHistory } from 'laiye-pro'
import { removeToken } from './catch'

export const history = browserHistory
export const logout = () => {
  // history.push('/login')
  removeToken()
  window.location.href = `${window.location.protocol}//${window.location.host}${process.env.PUBLIC_URL}/login`
}
