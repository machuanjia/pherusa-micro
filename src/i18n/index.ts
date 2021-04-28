/*
 * @Author: xulijing
 * @Date: 2021-02-24 16:42:55
 * @LastEditTime: 2021-04-27 16:00:57
 * @FilePath: /pherusa/src/i18n/index.ts
 */

import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import langEN from '@i18n/en'
import langCN from '@i18n/zh'
import zhCN from 'antd/lib/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US'
import { getLocal } from '@utils/catch'

const ANTD_LOCAL_MAP = {
  en: enUS,
  zh: zhCN
}

export const getLanguage = () => {
  const i18nextLng = getLocal()
  if (i18nextLng) {
    return i18nextLng
  }
  return 'zh'
}

export const getAntdLocal = () => {
  return ANTD_LOCAL_MAP[getLanguage()]
}

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {
        translation: langEN,
      },
      zh: {
        translation: langCN,
      },
    },
    fallbackLng: 'zh', // LanguageDetector优先级高于此设置
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
