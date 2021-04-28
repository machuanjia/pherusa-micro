import * as actionTypes from './app.types'
import type { AppAction } from '@interfaces/index'
import { dispatchAction } from './../dispatch'

export const addToken = (token: string) => {
  const action: AppAction = {
    type: actionTypes.SET_TOKEN,
    token,
  }
  return dispatchAction(action)
}

export const addPermissions = (permissions: string[]) => {
  const action: AppAction = {
    type: actionTypes.SET_PERMISSIONS,
    permissions,
  }
  return dispatchAction(action)
}

export const addRoles = (roles: string[]) => {
  const action: AppAction = {
    type: actionTypes.SET_ROLES,
    roles: [...roles],
  }
  return dispatchAction(action)
}
