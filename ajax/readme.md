

#### 属性

-   **onreadystatechange**
    1. 当 readyState 值变化时,会调用相应的处理函数

-   **response**
    1. 返回响应的正文
    2. 返回的类型可以是 ArrayBuffer,Blob,Document,Object,DOMString.这取决于 responseType 属性
    3. 请求尚未完成或未成功,则取值是 null
    4. 读取文本数据时如果将 responseType 的值设置成 text 或空字符串且当请求状态还在是 readyState (3) 时,response 包含到目前为止该请求已经取得的内容
-   **responseText**
    1. 返回一个 DOMString,包含对文本请求的响应,请求不成功或者请求尚未发送,返回 null
    2. 在请求完成之前将会得到部分属性
    3. 如果值不是 text 或者 string,responseType 将会抛出 InvalidStateError 异常
-   responseType
-   responseURL
-   responseXML

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
