# jsondeepsubtract
Deep subtracts two javascript objects
```javascript
var jsonDeepSubtract = require('jsondeepsubtract')
var A = {
  "a":1,
  "b":"Hello World",
  "c": new Date("2018-05-15T09:19:13.758Z"),
  "d":{
    "e":{
      "f":1,
      "g":3
    }
  },
  "h":[{"e":1,"f":2},{"e":1,"f":2}],
  "z":[1,2],
  "e":{
      "f":1,
      "g":3
    }
}
var B = {
  "a":2,
  "c":"2018-05-15T09:19:13.758Z",
  "d":{
    "e":{
      "f":1,
      "g":3
    }
  },
  "h":[{"e":1,"f":2},{"e":1,"f":3}],
  "z":[1,2],
  "e":{
      "f":1,
      "g":3
    }
}

console.log(jsonDeepSubtract(A,B)) // performs B-A
```