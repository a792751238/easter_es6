### 前端模块化

- 前端早期写代码都是全局变量满天飞,这种情况会造成全局命名空间,变量冲突等问题
```
var a = 1;
var b = 2;
function c(){}
function d(){}
```
- 后来采用了js的对象写法
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
> 面向对象一定程度上解决了命名冲突的问题,但是js没有私有变量,暴露内部变量,外部可有对内部数据进行修改外部可以修改内部数据
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
> 这一方式可以做到私有变量,模块的基本写法,比如jquery

- 放大模式
```
(function () {
    var a = 1;
    window.module = {
        c: function () {
            return a
        },
    }
})();

(function (mod) {
    var b = 2;
    mod.d = function () {
        return b
    }
})(window.module)

console.log(module.c());
console.log(module.d());
console.log(module);
```
>可以实现模块的分离和模块的继承

- 宽放大模式
```
//将上面给module添加功能的函数添加个默认值
(function (mod) {
    var b = 2;
    mod.d = function () {
        return b
    }
})(window.module || {})
```

- 引入外部的库
```
(function ($) {
    var a = 'red';
    $('.hello').css({ "background": a });
})(jQuery)
```
- 自执行函数
> 自执行函数中()分组操作符是用来将function(){}这个函数声明转化为一种可以执行的表达式,用来绕过函数预编译阶段忽略表达式的特点
> ()分组操作符可以替换为其他操作符,比如 '#','+','-','!','void'......等等
```
//这样写也是可以的
+function ($) {
    var a = 'red';
    $('.hello').css({ "background": a });
}(jQuery)
```

[Javascript模块化编程（一）：模块的写法](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)

