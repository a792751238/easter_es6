## cmd 和 amd

在浏览器中,受网络和浏览器渲染的制约，不能采用同步加载，只能采用异步加载。于是 AMD 规范应运而生

### AMD

AMD(Asynchronous Module Definition)，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行

#### define(module,callback)定义模块,require(module,callback)加载模块

```
require(['jquery'],function($){
    $("#bg").css({background:'red'});
})
```

第一个参数是一个数组，值是依赖的模块。回调事件会在所有依赖模块加载完毕后才会执行

#### 预加载,在定义模块的时候就提前加载好所有模块

[require.js 基本使用](https://www.cnblogs.com/mybilibili/p/6773952.html)

### CMD

#### define(factory)定义模块=>define(callback(require,exports,module))

#### 懒加载,在 require 时候才会加载模块
