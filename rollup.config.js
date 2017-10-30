/* jshint esversion: 6, asi: true */
import alias from 'rollup-plugin-alias'
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'

import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import nodeGlobals from 'rollup-plugin-node-globals'

import butternut from 'rollup-plugin-butternut'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const plugins = [
  alias({
    vue$: 'vue/dist/vue.common.js'
  }),
  vue({
    css: './public/assets/css/app.css'
  }),
  buble({
    objectAssign: 'Object.assign'
  }),
  nodeResolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  commonjs(),
  nodeGlobals()
]

const config = {
  output: [],
  plugins
}

const umdConfig = {
  format: 'umd',
  sourcemap: true,
}

const moduleConfig = {
  format: 'es',
  sourcemap: true,
}

const isProduction = process.env.NODE_ENV === `production`
const isDevelopment = process.env.NODE_ENV === `development`

if (isProduction) {
  //umdConfig.input = './src/tree.vue'
  umdConfig.file = './dist/eims-vue-tree-view.umd.js'
  umdConfig.name = 'eims-vue-tree-view'
  umdConfig.sourcemap = false

  //moduleConfig.input = './src/tree.vue'
  moduleConfig.file = './dist/eims-vue-tree-view.es6.js'
  moduleConfig.sourcemap = false

  config.plugins.push(butternut)
  config.output.push(umdConfig)
  config.output.push(moduleConfig)
}

if (isDevelopment) {
  config.input = './src/app.js'
  config.plugins.push(livereload())
  config.plugins.push(serve({
    contentBase: './public/',
    port: 8080,
    open: true
  }))
}

console.log(config)

export default config
