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
