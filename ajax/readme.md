## XMLHttpRequest

使用 XMLHttpRequest 对象可以和服务器进行交互,可以获取到数据,而无需让整个页面进行刷新.这样 web 页面可以做到只更新局部页面,降低了对用户操作的影响.

XMLHttpRequest 对象可以用于获取各种类型的数据,而不止是 xml,还支持 http 以外的协议

#### 属性

-   onreadystatechange 当 readyState 值变化时,会调用相应的处理函数
-   readyState
-   response
-   responseText
-   responseType
-   responseURL
-   responseXML
-   status
-   statusText
-   timeout
-   upload
-   withCredentials

#### 方法

-   abort()
-   getAllReponseHeaders()
-   getResponseHeader()
-   [open(method,url,async,user,password)](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/open)
    1. method('GET','POST','PUT','DELETE')
    2. url 请求地址
    3. async 是否开启同步请求,默认 true,执行异步操作
    4. 用户名用于认证,默认 null
    5. 密码用于认证,默认 null
-   overrideMimeType()
-   [send()](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/send)
    1. 用于发送 http 请求,异步请求会在请求发送后立即返回,如果是同步请求,会在响应到达后才返回
    2. send()接收一个可选参数,作为请求主体.如果请求方法是 GET 或 HEAD,则将请求主体设为 null
    3. 发送二进制内容的最佳方法是结合 ArrayBufferView 或者[Blobs](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
    4. 参数['null','ArrayBuffer','ArrayBufferView','Blob','Document','FormData','DOMString']
-   setRequestHeader()

#### 事件

-   loadstart
-   progress
-   abort
-   error
-   load
-   timeout
-   loadend
-   readystatechange

[构造方法 XMLHttpRequest()](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)

[HTTP 响应代码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
