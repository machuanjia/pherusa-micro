/*
 * @Author: D.Y
 * @Date: 2021-04-21 17:38:42
 * @LastEditTime: 2021-04-29 14:05:12
 * @LastEditors: D.Y
 * @FilePath: /pherusa-micro/src/permission.ts
 * @Description:
 */

import { find, uniqBy } from 'lodash'

import routes, { asyncRouters, ROUTE_APP_KEY } from '@routes/index'
import store from '@stores/store'
import { getUserInfo } from '@apis/users'
import {
  SET_PERMISSIONS,
  SET_ROLES,
  SET_ROUTERS,
  SET_USET_ID,
  SET_FLATTEN_ROUTERS,
} from '@stores/app/app.types'
import { setPermissions, filterAsyncRoutes, filterFlattenRoutes } from 'laiye-pro'
import { globalActions } from '@stores/global'

export const getAuthRoutes = () => {
  const asyncRoutes = filterAsyncRoutes(asyncRouters as any)
  const app = find(routes, (n) => {
    return n.meta.key === ROUTE_APP_KEY
  })
  app &&
    (app.children = uniqBy([...app.children, ...asyncRoutes], (n) => {
      return n.meta.key
    }))
  return routes
}

export const setInfo = async () => {
  return getUserInfo().then(
    ({ data }) => {
      const { roles = [], permissions = [] } = data
      globalActions.setGlobalState({
        token:data.token
      })
      store.dispatch({
        type: SET_USET_ID,
        id: data._id,
      })
      store.dispatch({
        type: SET_ROLES,
        roles,
      })
      store.dispatch({
        type: SET_PERMISSIONS,
        permissions,
      })
      setPermissions(permissions)
      const routesArray = getAuthRoutes()
      const flattenRouters = filterFlattenRoutes(routesArray as any)
      store.dispatch({
        type: SET_ROUTERS,
        routers: routesArray,
      })
      store.dispatch({
        type: SET_FLATTEN_ROUTERS,
        flattenRouters,
      })
      return true
    },
    () => {
      return false
    },
  )
}
