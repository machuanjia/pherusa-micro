const { start } = require('pherusa-lib')
const { resolve } = require('path')
const { entrypoints } = require('../dist/asset-manifest.json')

start({
  title:'Pherusa',
  prefix:'/pherusa',
  staticPath:'dist',
  entrypoints,
  configPath: process.env.npm_config_conf || resolve(__dirname, '../conf/dev.conf'),
  externalJs:[],
  externalCss:[]
})