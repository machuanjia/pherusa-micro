/*
 * @Author: xulijing
 * @Date: 2021-02-24 16:42:55
 * @LastEditTime: 2021-02-25 10:48:05
 * @FilePath: /pherusa/.eslintrc.js
 */
module.exports = {
  extends: ['react-app', require.resolve('@umijs/fabric/dist/eslint')],

  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },

  rules: {
    // your rules
    'new-cap': ['error', { newIsCap: false }],
    'no-underscore-dangle': ['error', { allow: ['_id','_viewport'] }],
    'no-console': 0,
    'no-underscore-dangle':0,
   '@typescript-eslint/no-unused-vars': 0,
   '@typescript-eslint/no-shadow': 0,
   'no-param-reassign': 0,
   'no-plusplus': 0,
   'no-continue': 0
  },
};
