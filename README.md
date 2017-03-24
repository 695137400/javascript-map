# javascript-map
```
var a = new map(); <br/>
a.put('a', 1); <br/>
a.put('b', 0.00); <br/>
a.put('c', -99); <br/>
a.put('d', '0'); <br/>
a.put('e', "99"); <br/>
a.put('f', false); <br/>
a.put('g', {a: 'aa'}); <br/>
a.put('h', [1, 2]); <br/>
a.put('i', new Date()); <br/>
a.put('j', a); <br/>
a.put(0.00, {}); <br/>
a.put('[', a); <br/>
a.put('k', document.createElement('div')); <br/>
a.put({}, {}); <br/>
a.put([], {}); <br/>
a.toString(); <br/>
var s = a.toString(); <br/>
console.log(s);

"{"a":1,"b":0,"c":-99,"d":"0","e":"99","f":false,"g":{"a":"aa"},"h":[1,2],"i":"2017-03-24 11:32:54","j":"this map","[":"this map","k":"<div></div>","0":{}}"
