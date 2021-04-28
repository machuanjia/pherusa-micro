/*
 * @Author: D.Y
 * @Date: 2021-01-07 14:13:31
 * @LastEditTime: 2021-02-04 19:10:24
 * @LastEditors: D.Y
 * @FilePath: /pherusa/src/react-app-env.d.ts
 * @Description: 
 */

/// <reference types="react-scripts" />
declare let APP_CONFIGRATION: any

declare module '*.less' {
  const content: Record<string, string>
  export default content
}

declare module 'camunda-bpmn-moddle/resources/camunda'

declare module 'react-color'
