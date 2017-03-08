# flatarr

Utility to flat arrays with nested arrays into a single array.

EX:
 * in  : [1, [2, 3, [4, 5], [2, 4]], 3, [[2, [3, [1]], 4], [3]]]
 * out : [1, 2, 3, 4, 5, 2, 4, 3, 2, 3, 1, 4, 3]

## Install

```shell
$ npm install --save-dev flatarr
```

## Usage

 ```js
 const flatArray = require('flatarr');

 flatArray(inputArray);
 ```