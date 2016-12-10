const babelRegister = require('babel-register')
require('core-js/shim')

const babelConfig = require('../configuration/babel/babel.test.js')

babelRegister(babelConfig)
