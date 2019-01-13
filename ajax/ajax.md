## XMLHttpRequest

使用 XMLHttpRequest 对象可以和服务器进行交互,可以获取到数据,而无需让整个页面进行刷新.这样 web 页面可以做到只更新局部页面,降低了对用户操作的影响.

XMLHttpRequest 对象可以用于获取各种类型的数据,而不止是 xml,还支持 http 以外的协议

## 本地服务器

```
let http = require("http");
let url = require("url");

const port = 3333;

http.createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.writeHead(200, { "Content-type": "text/html;charset=utf8" });

    if (request.url !== "/favicon.ico") {
        let pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, "");
        if (pathname === "get_money") {
            get_money(request, response);
        }
        response.end("\r\n钱给完了,没了", "utf-8");
    }
}).listen(port);

console.log(`本地服务器创建成功=>localhost:${port}`);

function get_money(request, response) {
    response.write("给了你666块钱", "utf-8");
}
```

安装个 node,跑在本地就行

### status 和 readyState

-   **readyState**
    -   0=>UNSENT=>XMLHttpRequest 代理被创建，但尚未调用 open() 方法
    -   1=>OPENED=>open() 方法已经被调用,可以通过 setRequestHeader() 方法来设置请求的头部， 可以调用 send() 方法来发起请求
    -   2=>HEADERS_RECEIVED=>send() 方法已经被调用，响应头也已经被接收
    -   3=>LOADING=>响应体部分正在被接收。如果 responseType 属性是 text 或空字符串， responseText 将会在载入的过程中拥有部分响应数据
    -   4=>DONE=>请求操作已经完成。这意味着数据传输已经彻底完成或失败
-   **status**
    -   在请求完成前,status 的值为 0.XMLHttpRequest 出错,浏览器返回的 status 也为 0
    -   如果服务器响应中没有明确指定 status 码,XMLHttpRequest.status 将会默认为 200

```
        var xhr = new XMLHttpRequest();

        console.log("open调用前的status", xhr.status); // open调用前的status 0
        console.log("open调用前的readyState", xhr.readyState); //open调用前的readyState 0

        xhr.open("GET", "http://127.0.0.1:3333/get_money", true);

        console.log("open调用后的status", xhr.status); //open调用后的status 0
        console.log("open调用后的readyState", xhr.readyState); //open调用后的readyState 1

        xhr.send();

        console.log("send调用后的status", xhr.status); //send调用后的status 0
        console.log("send调用后的readyState", xhr.readyState); //send调用后的readyState 1

        xhr.onreadystatechange = function() {
            console.log(xhr.status); //2,3,4
            console.log(xhr.readyState); //200,200,200
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            }
        };
```

![02](https://github.com/easterCat/common_es6/blob/master/ajax/02.png?raw=true)

> readyState 代表 send()方法已经被调用,但是 send()之后 readyState 不一定就是 2

当服务器指定了 status,其实就是 http 的状态码

```
//node中writeHead修改一下
response.writeHead(404, { "Content-type": "text/html;charset=utf8" });
```

![03](https://github.com/easterCat/common_es6/blob/master/ajax/03.png?raw=true)
