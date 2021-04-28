/*
 * @Author: D.Y
 * @Date: 2021-04-26 17:46:05
 * @LastEditTime: 2021-04-26 17:46:14
 * @LastEditors: D.Y
 * @FilePath: /pherusa/src/stores/dispatch.ts
 * @Description: 
 */

export const dispatchAction = (action) => {
    return (dispatch) => {
      dispatch(action);
    };
  };