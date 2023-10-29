# debounce

[![Get package from npm](https://img.shields.io/npm/v/@erbelion/debounce?logo=npm&logoColor=white&style=flat&label=)](https://www.npmjs.com/package/@erbelion/debounce) [![Downloads](https://img.shields.io/npm/dw/@erbelion/debounce?color=blue&label=&logoColor=white&style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTEyLjUgNFYxN00xMi41IDE3TDcgMTIuMjEwNU0xMi41IDE3TDE4IDEyLjIxMDUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPHBhdGggZD0iTTYgMjFIMTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPC9nPjwvc3ZnPg==)](https://www.npmjs.com/package/@erbelion/debounce) [![views](https://views.erbek.space/api/views.svg?id=github.com%2Ferbelion%2Fdebounce)](https://views.erbek.space/page/?id=github.com%2Ferbelion%2Fdebounce) [![likes](https://views.erbek.space/api/likes.svg?id=github.com%2Ferbelion%2Fdebounce)](https://views.erbek.space/api/like?id=github.com%2Ferbelion%2Fdebounce)

A simple debouncer.

## Installation
**yarn**
```
yarn add @erbelion/debounce
```
**npm**
```
npm i @erbelion/debounce
```

## Usage
```
import debounce from '@erbelion/debounce'

const refresh = debounce(() => {
    doSomething()
}, 1000) // delay in milliseconds

refresh() // invokes doSomething() after 1000ms, unless called again
refresh.invoke() // same as above

refresh.invokeNow() // invoke refresh() immediately

refresh.cancel() // cancels refresh() if it has been invoked

refresh.overwrite(() => {
    doSomethingElse()
}, 2000) // cancels refresh() and overwrites the debouncer

const refresh = debounce() // init without callable function and delay

refresh.reset() // cancels refresh(), resets callable function and delay
refresh.overwrite() // same as above
```