### 前端模块化
- 前端早期写代码都是全局变量满天飞,这种情况会造成全局命名空间,变量冲突等问题
```
var a = 1;
var b = 2;
function c(){}
function d(){}
```
- 后来采用了js的面向对象的写法
````
var space = {
    a: 1,
    b: 2,
    c: function () {
        console.log('我是c');
        return this.a;
    },
    d: function () {
        console.log('我是d');
        return this.b;
    },
};

console.log(space.a);
console.log(space.b);
console.log(space.c());
console.log(space.d());
````
- 亦或是挂载到原型上
````
function Class() {
    this.a = 1;
    this.b = 2;
}

Class.prototype.c = function () {
    console.log('我是c');
    return this.a;
};
Class.prototype.d = function () {
    console.log('我是d');
    return this.b;
};

var instance = new Class();
console.log(instance.a); //1
console.log(instance.b); //2
console.log(instance.c()); //我是c //1
console.log(instance.d()); // 我是d //2
````
> 面向对象一定程度上解决了命名冲突的问题,但是js没有私有变量,外部可以修改内部数据
- 自执行函数(闭包)
```
(function (window) {
    let a = 1;
    let b = 2;

    function c() {
        console.log('我是c');
        return a;
    }

    function d() {
        console.log('我是d');
        return b;
    }

    window.e = {
        c:c,
        d:d,
    }
})(window);
```
> 这一方式可以做到私有变量,代表是jquery和underscore


### CommonJS
- CommonJS是一个模块规范,主要是单个文件模块和变量私有
- CommonJS分为三部分
  - require模块引入
  - exports模块导出
  - module 模块标识
- CommonJS在node中
````
//m_1.js
const a = 1;
const b = 2;

const c = () => {
    return 3.14 * a;
};

const d = () => {
    return 3.14 * b;
};

exports.c = c;
exports.d = d;

//m_2.js
const f = 3;
const g = 4;

const e = () => {
    return f * g;
};

exports.e = e;

//m_3.js
const h = 99;
const i = 9;

const j = () => {
    return h / i;
};

exports.j = j;

//module.js
const m1 = require('./m_1');
const m2 = require('./m_2');
const m3 = require('./m_3');

console.log(m1.c()); //3.14
console.log(m1.d()); //6.28
console.log(m2.e()); //12
console.log(m3.j()); //11

````

1. [前端模块化详解(完整版)](https://segmentfault.com/a/1190000017466120#articleHeader6)
2. [js模块化编程之彻底弄懂CommonJS和AMD/CMD！](https://www.cnblogs.com/chenguangliang/p/5856701.html)
3. [node](http://nodejs.cn/api/modules.html)
