# javascript-map
var a = new map();
a.put('a', 1);
a.put('b', 0.00);
a.put('c', -99);
a.put('d', '0');
a.put('e', "99");
a.put('f', false);
a.put('g', {a: 'aa'});
a.put('h', [1, 2]);
a.put('i', new Date());
a.put('j', a);
a.put(0.00, {});
a.put('[', a);
a.put('k', document.createElement('div'));
a.put({}, {});
a.put([], {});
a.toString();
var s = a.toString();
console.log(s);
