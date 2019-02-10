const {expectP} = require('./index')

const helloWorld = Promise.resolve('Hello World')

const testHelloWorld = actual => expected =>
  expectP(actual).toEqual(expected)

testHelloWorld(helloWorld)('Hello World')
