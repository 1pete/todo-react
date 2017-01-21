const babelRegister = require('babel-register')
require('core-js/shim')

const babelConfig = require('../config/babel/babel.test.js')

babelRegister(babelConfig)
