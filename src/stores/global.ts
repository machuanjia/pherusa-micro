/*
 * @Author: D.Y
 * @Date: 2021-04-28 13:53:59
 * @LastEditTime: 2021-04-28 14:22:57
 * @LastEditors: D.Y
 * @FilePath: /pherusa-micro/src/stores/global.ts
 * @Description: 
 */
import type { MicroAppStateActions } from 'qiankun';
import { initGlobalState } from 'qiankun';

const appState = {
  version:'1.0.0',
  token:''
};
// 初始化 state
export const globalActions: MicroAppStateActions = initGlobalState(appState);

globalActions.onGlobalStateChange((state, prev) => {
  // eslint-disable-next-line no-debugger
  // state: 变更后的状态; prev 变更前的状态
  console.log('main:',state, prev);
});
// globalActions.setGlobalState(appState);
// globalActions.offGlobalStateChange();
