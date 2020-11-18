import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from '@rollup/plugin-json'
import builtins from '@erquhart/rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import serve from 'rollup-plugin-serve'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
import livereload from 'rollup-plugin-livereload'

const production = !process.env.ROLLUP_WATCH

// We can't really do much about circular dependencies in node_modules
function onwarn (warning) {
  if (warning.code !== 'CIRCULAR_DEPENDENCY') {
    console.error(`(!) ${warning.message}`)
  }
}

function logEnv () {
  const message = production ? 'Building for production' : 'Starting dev server'

  console.log(message)
}

const pipeline = [
  vue(),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  resolve({
    mainFields: ['browser', 'jsnext', 'module', 'main'],
    include: 'node_modules/**',
    preferBuiltins: true
  }),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true
  }),
  commonjs({
    include: 'node_modules/**'
  }),
  json(),
  globals(),
  builtins(),
  production && terser(),
  production && filesize()
]

const outputs = [{
  input: 'ui/src/app.js',
  output: {
    file: 'assets/{{ Name }}.js',
    format: 'amd'
  },
  onwarn,
  plugins: [
    logEnv(),
    ...pipeline,
    !production && serve('assets'),
    !production && livereload()
  ]
}]

if (!production) {
  outputs.push({
    input: 'ui/dev/src/main.js',
    output: {
      file: 'assets/app.js',
      format: 'iife'
    },
    onwarn,
    plugins: [
      ...pipeline,
      !production && copy({
        targets: [
          { src: 'ui/dev/public/*', dest: 'assets' }
        ]
      }),
      postcss()
    ]
  })
}

export default outputs
