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

- 亦或是挂载到原型上(构造函数)
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
>可以实现模块的分离和模块的继承,也具有私有变量,还可以将自执行函数拆分成多个文件进行加载,但是文件的执行顺序有一定的要求,要先声明对象module

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
> 可以将模块分成不同的文件,同时文件不用再考虑加载顺序不对导致module不存在的情况

- 引入外部的库
```
(function ($) {
    var a = 'red';
    $('.hello').css({ "background": a });
})(jQuery)
```
- 自执行函数
> 自执行函数中()分组操作符是用来将function(){}这个函数声明转化为一种可以执行的表达式,单纯的function(){}不是可执行的表达式,是一个函数声明
> ()分组操作符可以替换为其他操作符,比如 '#','+','-','!','void'......等等
```
//这样写也是可以的
+function ($) {
    var a = 'red';
    $('.hello').css({ "background": a });
}(jQuery)
```
> function(){}是函数声明,声明的是一个匿名函数,而(function(){})()是一个表达式,而js在预编译阶段会解释函数声明,确会忽略表达式.所以到(function(){})的时候,该表达式会返回一个匿名函数,之后该匿名函数遇到后面的(),便会被执行

```
    var lis = document.querySelectorAll('li');
    for(var i=0;i<5;i++){
        lis[i].onclick = function(){
            alert(i); //5,5,5,5,5
        }
    }

    //又是这个经典的题目
    //这题最简单还是用元素属性的方式去解决,比如

    for(var i=0;i<5;i++){
        lis[i].index = i;
        lis[i].onclick = function(){
            alert(this.index); //0,1,2,3,4
        }
    }

    //还有就是闭包
    for(var i=0;i<5;i++){
        (function(i){
            lis[i].onclick = function(){
                alert(i); //0,1,2,3,4
            }
        })(i)
    }
    //闭包就是在循环中执行,将i的值保存到当前作用域中,当click绑定的函数触发时,会优先从离得最近的作用域去拿变量(就近原则)

    //所以,使用其他的方式将当前i值保存到自己的作用域中就行
    for(var i=0;i<5;i++){
        click(i);
    }

    function click(i){
        lis[i].onclick = function(){
            alert(i); //0,1,2,3,4
        }
    }
    //这其实就跟上面的闭包有些类似了,闭包取i是从上级的匿名函数的作用域中去保存的i,而该方式就是从click函数的作用域中去取i值
```

1. [Javascript模块化编程（一）：模块的写法](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)
2. [JavaScript Module Pattern: In-Depth](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)

