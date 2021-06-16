/*
 * @Author: D.Y
 * @Date: 2021-02-05 19:28:38
 * @LastEditTime: 2021-04-27 15:57:59
 * @LastEditors: D.Y
 * @FilePath: /pherusa/src/utils/catch.ts
 * @Description: 
 */
import { getItem, setItem, removeItem } from 'pherusa-pro'

const tokenKey = 'authorization'
export const getToken = () => getItem(tokenKey)
export const setToken = (value: string) => setItem(tokenKey, value)
export const removeToken = () => removeItem(tokenKey)

const localKey = 'i18nextLng'
export const getLocal = () => getItem(localKey)

