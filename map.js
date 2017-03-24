/**
 * javaScript-map
 * by 李志超
 * 2017-03-24
 * QQ:695137400
 */
var map = function () {
    var keySet = [];
    this.size = function () {
        return keySet.length;
    };
    this.keySet = function () {
        return keySet;
    };
    this.get = function (key) {
        return this[key];
    };
    this.put = function (key, val) {
        if (typeof key != 'string' && typeof key != 'number') {
            throw ("type error!");
        }
        if (undefined == this[key]) {
            this[key] = val;
            keySet.push(key);
        }
        return this;
    };
    this.remove = function (key) {
        var index = keySet.indexOf(key);
        if (index >= 0) {
            keySet.splice(index, 1);
            delete this[key];
        }
        return this;
    };
    this.clear = function () {
        for (var i = keySet.length; i > 0; i--) {
            this.remove(keySet[i]);
        }
        return this;
    };
    this.toString = function () {
        var string = '{';
        for (var i = 0; i < this.size(); i++) {
            var key = this.keySet()[i];
            var value = this[key];
            if (value === this) {
                value = 'this map';
            }
            value = valueTo(value);
            if ('' !== value) {
                string += '"' + key + '":' + value;
            }
            if (i < this.size() - 1) {
                string += ',';
            }
        }
        function valueTo(obj) {
            if (null == obj) {
                return '{}';
            }
            var objString = '';
            if (typeof obj == 'string') {
                return '"' + obj + '"';
            }
            if (typeof obj == 'number' || typeof obj == 'boolean') {
                return obj;
            }
            if (typeof obj == 'object') {
                if (obj.constructor.name == 'Array') {
                    //数组
                    objString += '[';
                    for (var index = 0; index < obj.length; index++) {
                        var value = obj[index];
                        value = valueTo(value);
                        if ('' !== value) {
                            objString += value;
                        }
                        if (index < obj.length - 1) {
                            objString += ',';
                        }
                    }
                    objString += ']';
                } else if ('Object' == obj.constructor.name) {
                    objString += '{';
                    for (var a in obj) {
                        var value = obj[a];
                        value = valueTo(value);
                        if ('' !== value) {
                            objString += '"' + a + '":' + value + ',';
                        }
                    }
                    if (objString.length > 1) {
                        objString = objString.substring(0, objString.length - 1);
                    }
                    objString += '}';
                } else if (obj.constructor.name == 'Date') {
                    var str = 'YYYY-MM-DD HH:mm:ss';
                    str = str.replace(/YYYY/, obj.getFullYear());
                    str = str.replace(/MM/, (obj.getMonth() + 1) > 9 ? (obj.getMonth() + 1).toString() : '0' + (obj.getMonth() + 1));
                    str = str.replace(/DD/, obj.getDate() > 9 ? obj.getDate().toString() : '0' + obj.getDate());
                    str = str.replace(/HH/, obj.getHours() > 9 ? obj.getHours().toString() : '0' + obj.getHours());
                    str = str.replace(/mm/, (obj.getMinutes() + 1) > 9 && (obj.getMinutes() + 1) <= 59 ? (obj.getMinutes() + 1).toString() : ((obj.getMinutes() + 1) <= 59 ? ('0' + (obj.getMinutes() + 1)) : (obj.getMinutes())));
                    str = str.replace(/ss/, obj.getSeconds() > 9 ? obj.getSeconds().toString() : '0' + obj.getSeconds());
                    objString = '"' + str + '"';
                } else if (obj.constructor.name == 'HTMLDivElement') {
                    objString = '"' + obj.outerHTML + '"';
                }
            }
            return objString;
        }
        return string += '}';
    }
};
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
var s = a.toString();
console.log(s);
