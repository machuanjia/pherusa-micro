/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-04-26 17:49:21
 * @LastEditors: D.Y
 * @FilePath: /pherusa/src/interfaces/app.ts
 * @Description: 
 */

export type AppState = {
  token: string;
  permissions: string[];
  roles: string[];
  routers: Record<string, unknown>[];
  flattenRouters: Record<string, unknown>[];
  id: string;
};

export type AppAction = {
  type: string;
  token?: string;
  permissions?: string[];
  roles?: string[];
  routers?: Record<string, unknown>[];
  flattenRouters?: Record<string, unknown>[];
  id?: string;
};

