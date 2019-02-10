# expectp.equal

> If the only available assertion in every test suite was equal(), almost every test suite in the world would be better for it. Because equal() by nature answers the two most important questions every unit test must answer: 1) What is the actual output?, 2) What is expected output? by Eric Elliot

## Motivation

A simple test runner to test promises.

## API

```js
module.exports = {expectP}
```

## Examples

```js
const {expectP} = require('./index')
const axios = require('axios')

const dbCall = axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => res.data)

const testDbCall = actual => expected =>
  expectP(actual).toEqual(expected, 'dbCall() => should return an object with task information')

testDbCall(dbCall)({ userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false })
```
