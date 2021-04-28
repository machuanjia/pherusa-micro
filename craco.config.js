const { resolve } = require('path')
const { webpackConfigs, getAppConfigs } = require('pherusa-lib')
const webpack = require('webpack')
const CracoLessPlugin = require('craco-less')
const path = require('path')
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl)

const modifiedTheme = {
  '@laiye-primary-color': '#2249c0',
  '@laiye-link-color': '#2249c0',
  '@color-primary': '#2249c0',
  '@color-blue': '#79adf8',
  '@color-black': '#000',
  '@border-gray': '#d9dee2',
  '@color-blue-dark': '#3f5361',
  '@color-blue-normal': '#677a8e',
  '@color-blue-light': '#8e9ca8',
  '@color-light': '#f5f7f7',
  '@color-danger': '#ff3e27',
  '@color-warning': '#feb312',
  '@color-success': '#37b184',
  '@color-white': '#fff',
  '@color-gray': '#666666',
  '@color-light-gray': '#f0f2f5',
  '@color-label-gray': '#425b6d',
  '@color-normal-gray': '#687c8a',

  // 功能划分
  '@border': '@color-light',

  '@icon': '@color-blue-light',
  '@icon-white': '@color-white',
  '@icon-dark': '@color-blue-dark',
  '@icon-primary': '@color-primary',

  '@text-white': '@color-white',
  '@text-black': '@color-black',
  '@text-primary': '@color-primary',
  '@text-danger': '@color-danger',
  '@text-success': '@color-success',
  '@text-warning': '@color-warning',
  '@text-desc': '@color-blue-normal',
  '@text-empty': '@color-blue-light',
  '@text-dark': '@color-blue-dark',

  '@bg-primary': '@color-blue',
  '@bg-warning': '@color-warning',
  '@bg-main': '@color-light-gray',
  '@bg-white': '@color-white',
  '@table-shadow': '0 2px 8px 0 rgba(0, 0, 0, .1)',
  '@shadow-gray': '#b3bdc5',
}

const config = getAppConfigs({
  configPath: process.env.npm_config_conf || resolve(__dirname, './conf/dev.conf'),
})
process.env.NODE_ENV === 'development' &&
  (process.env.REACT_APP_CONFIGRATION = JSON.stringify(config))

module.exports = {
  webpack: {
    plugins: [
      // new webpack.DefinePlugin({
      //     APP_CONFIGRATION: JSON.stringify(config),
      // }),
    ],
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@apis': pathResolve('src/apis'),
      '@components': pathResolve('src/components'),
      '@constants': pathResolve('src/constants'),
      '@i18n': pathResolve('src/i18n'),
      '@layouts': pathResolve('src/layouts'),
      '@stores': pathResolve('src/stores'),
      '@styles': pathResolve('src/styles'),
      '@utils': pathResolve('src/utils'),
      '@views': pathResolve('src/views'),
      '@routes': pathResolve('src/routes'),
      '@interfaces': pathResolve('src/interfaces'),
    },
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'dist'),
      }
      return webpackConfig
    },
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'laiye-antd', style: true }],
      [
        'import',
        {
          libraryName: '@antv/x6-react-components',
          libraryDirectory: 'es', // es or lib
          style: true,
          transformToDefaultImport: true,
        },
        'antv',
      ],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
  },
  plugins: [
    // This plugin takes care of the .less files
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: modifiedTheme,
          },
        },
      },
    },
    // This plugin take scare of the .less.module files
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: function (lessRule, _context) {
          lessRule.test = /\.(less)$/
          lessRule.use = [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  modifyVars: modifiedTheme,
                  javascriptEnabled: true,
                },
              },
            },
          ]
          lessRule.exclude = /node_modules/
          return lessRule
        },
      },
    },
  ],
  devServer: {
    port: config.env.port,
    proxy: {
      '/api/pherusa': {
        target: `http://localhost:3000`,
        changeOrigin: true,
        secure: false,
      },
      '/api': {
        target: `http://localhost:30000`,
        changeOrigin: true,
      },
    },
  },
}
