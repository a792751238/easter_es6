## seajs 基本使用

1、seajs.config({...}); //用来对 Sea.js 进行配置。
2、seajs.use(['a','b'],function(a,b){...}); //用来在页面中加载一个或多个模块。
3、define(function(require, exports, module){...}); //用来定义模块。Sea.js 推崇一个模块一个文件，遵循统一的写法：
4、require(function(require){var a = require("xModule"); ... }); //require 用来获取指定模块的接口。
5、require.async, //用来在模块内部异步加载一个或多个模块。
6、exports, //用来在模块内部对外提供接口
7、module.exports, 与 exports 类似，用来在模块内部对外提供接口
