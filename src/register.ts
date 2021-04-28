/*
 * @Author: D.Y
 * @Date: 2021-03-29 16:11:49
 * @LastEditTime: 2021-04-28 14:22:35
 * @LastEditors: D.Y
 * @FilePath: /pherusa-micro/src/register.ts
 * @Description:
 */
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'

registerMicroApps([
  {
    name: 'pherusa',
    entry: '//localhost:4000',
    container: '#Pherusa',
    activeRule: '/app/pherusa'
  },
])
// eslint-disable-next-line no-debugger
start({
  sandbox: { experimentalStyleIsolation: true },
})
// setDefaultMountApp('/app/pherusa')
