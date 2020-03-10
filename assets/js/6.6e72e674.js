(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{210:function(a,e,t){"use strict";t.r(e);var s=t(28),i=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"浏览器缓存之强缓存与协商缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存之强缓存与协商缓存"}},[a._v("#")]),a._v(" 浏览器缓存之强缓存与协商缓存")]),a._v(" "),t("h1",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" 背景")]),a._v(" "),t("p",[a._v("浏览器缓存机制在性能优化中扮演重要的一环。优秀的缓存策略能够缩短请求网页的距离、降低延迟和网络负荷、减少请求带宽。那该如何应用好浏览器缓存，我们需要对其原理有一定认识。")]),a._v(" "),t("h1",{attrs:{id:"浏览器缓存机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存机制"}},[a._v("#")]),a._v(" 浏览器缓存机制")]),a._v(" "),t("p",[a._v("浏览器中缓存可分为强缓存和协商缓存。具体判断使用那种缓存机制，是通过 http header 字段的不同。")]),a._v(" "),t("h2",{attrs:{id:"浏览器缓存机制过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存机制过程"}},[a._v("#")]),a._v(" 浏览器缓存机制过程")]),a._v(" "),t("ul",[t("li",[a._v("浏览器加载资源，根据资源的 http header 判断是否命中强缓存；\n"),t("ul",[t("li",[a._v("若命中：浏览器直接从自己缓存中读取资源，不会发生 http 请求到服务器；")]),a._v(" "),t("li",[a._v("没有命中：浏览器会发送请求到服务器，通过服务器中 http header 验证这个资源是否命中协商缓存；\n"),t("ul",[t("li",[a._v("命中：请求返回，但不返回资源，告诉客户端可直接从缓存中加载；")]),a._v(" "),t("li",[a._v("没有命中：请求返回，返回资源；")])])])])])]),a._v(" "),t("p",[a._v("可以得出：强缓存与协商缓存区别：强缓存不发生请求到服务器，协商缓存会发请求到服务器。\n下面，我们需要知道 http header 如何判断命中强缓存和协商缓存的。")]),a._v(" "),t("h1",{attrs:{id:"强缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[a._v("#")]),a._v(" 强缓存")]),a._v(" "),t("h2",{attrs:{id:"expires"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[a._v("#")]),a._v(" "),t("strong",[a._v("Expires")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("Expires: Thu, "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("21")]),a._v(" Nov "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),a._v(" 07:48:15 GMT\n")])])]),t("p",[a._v("Expires 是 HTTP/1.0 控制网页缓存的字段。其值为服务器返回该请求结果缓存的"),t("strong",[a._v("到期时间")]),a._v("，即如果发生时间在 Expires 之前，那么本地缓存始终有效，否则就会发送请求到服务器来获取资源；是绝对时间；")]),a._v(" "),t("h2",{attrs:{id:"cache-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[a._v("#")]),a._v(" "),t("strong",[a._v("Cache-Control")])]),a._v(" "),t("p",[a._v("Cache-Control 是 HTTP/1.1 新增的规则，用于控制网页缓存的字段。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/svg/424608/1582080482135-366582ab-d065-488b-8806-e38bbd2e3dd6.svg",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("示例分析")])]),a._v(" "),t("blockquote",[t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/424608/1582080528811-7310bf51-9919-44f3-985f-6f71bdc87480.png#align=left&display=inline&height=141&name=image.png&originHeight=348&originWidth=730&size=43795&status=done&style=shadow&width=295",alt:"image.png"}}),a._v(" "),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/424608/1582080756091-ac20d1bf-5450-4b6f-b8e2-0f9aaf68b059.png#align=left&display=inline&height=165&name=image.png&originHeight=510&originWidth=734&size=64495&status=done&style=shadow&width=238",alt:"image.png"}})])]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("cache-control:")]),a._v(" max-age=2592000,s-maxage=3600\n"),t("ul",[t("li",[a._v("max-age: 资源第一次的请求时间和 Cache-Control max-age 设定的有效期，计算出资源过期时间；再拿这个过期时间跟当前的请求时间比较，如果请求时间在过期时间之前，就能命中缓存，否则不行。是相对时间；")])])]),a._v(" "),t("li",[t("strong",[a._v("cache-control:")]),a._v(" public, max-age=31536000\n"),t("ul",[t("li",[a._v("public 可以被所有用户浏览器缓存，包括代理服务器，时长为第一次请求资源时间与31536000秒之和。")])])])]),a._v(" "),t("h2",{attrs:{id:"expires-cache-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expires-cache-control"}},[a._v("#")]),a._v(" Expires & Cache-Control")]),a._v(" "),t("p",[a._v("我们需要知道 Cache-Control 与 Expires  同时存在的话(如下图)，Cache-Control** 的优先级高于 **"),t("strong",[a._v("Expires")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/424608/1582080879475-3d10a7d5-ad7a-4a8e-af03-beedca12353b.png#align=left&display=inline&height=227&name=image.png&originHeight=622&originWidth=744&size=78245&status=done&style=shadow&width=272",alt:"image.png"}})]),a._v(" "),t("p",[a._v("因为Expires时间返回的是服务器绝对时间，而客户端本地时间是可以修改的(时区不同等)，造成服务器与客户端时间发生误差，强缓存会直接失效。而 Cache-Control 是相对时间，每次参照客户端第一次请求时间计算而来的，故不会受到影响；毕竟 Cache-Control 是 HTTP/1.1 新增的规范")]),a._v(" "),t("h2",{attrs:{id:"查看浏览器已经成功应用使用了强缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看浏览器已经成功应用使用了强缓存"}},[a._v("#")]),a._v(" 查看浏览器已经成功应用使用了强缓存")]),a._v(" "),t("p",[a._v("一旦资源命中强缓存, 浏览器便不会向服务器发送请求, 而是直接读取缓存. Chrome 下的现象如下\n200 OK disk cache 或者200 OK from memory cache")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/424608/1582082433135-8c16f923-1e2b-4969-951d-c125621bfddd.png#align=left&display=inline&height=119&name=image.png&originHeight=238&originWidth=598&size=26962&status=done&style=shadow&width=299",alt:"image.png"}}),a._v(" "),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/424608/1582082386169-a02a8448-9174-4af4-8dde-1a90ddf87113.png#align=left&display=inline&height=119&name=image.png&originHeight=238&originWidth=700&size=30296&status=done&style=shadow&width=350",alt:"image.png"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/424608/1582082011873-ae638104-7978-4311-8c25-6b1003fae9f8.png#align=left&display=inline&height=226&name=image.png&originHeight=638&originWidth=2044&size=223045&status=done&style=shadow&width=724",alt:"image.png"}})]),a._v(" "),t("h2",{attrs:{id:"disk-cache-memory-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disk-cache-memory-cache"}},[a._v("#")]),a._v(" disk cache & memory cache")]),a._v(" "),t("p",[a._v("看到上图，应该会有疑问，from memory cache 和 from disk cache 又分别代表的是什么呢？\n根据英文名 memory disk ，我们需要知道内存缓存和硬盘缓存两个概念；")]),a._v(" "),t("h3",{attrs:{id:"内存缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存缓存"}},[a._v("#")]),a._v(" 内存缓存")]),a._v(" "),t("blockquote",[t("p",[a._v("内存缓存即 memory cache")])]),a._v(" "),t("blockquote",[t("p",[a._v("内存缓存有两个特点 快速读取 和 时效性\n    快速读取：会将解析编译资源放入到进程中的内存，占据一定内存资源，方便下次快速读取    时效性：一旦进程关闭，进程的内存会被清空")])]),a._v(" "),t("h3",{attrs:{id:"硬盘缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬盘缓存"}},[a._v("#")]),a._v(" 硬盘缓存")]),a._v(" "),t("blockquote",[t("p",[a._v("硬盘缓存即 disk cache")])]),a._v(" "),t("blockquote",[t("p",[a._v("硬盘缓存将数据写入到磁盘文件，读取缓存需要读取硬盘文件进行 I/O 操作，然后重新解析该缓存内容，读取复杂，速度比内存缓存慢。")])]),a._v(" "),t("h3",{attrs:{id:"读取缓存时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取缓存时机"}},[a._v("#")]),a._v(" 读取缓存时机")]),a._v(" "),t("p",[t("strong",[a._v("什么时候从内存缓存读取，什么时候从硬盘缓存读取？")]),a._v("\n在浏览器中，浏览器会在 JS 和图片等文件解析执行后直接存入内存缓存中，那么当 刷新 页面时，直接从内存缓存from memory cache 中读取，而 CSS 比较大的文件则会存入硬盘文件，所以每次渲染页面都需要从磁盘读取缓存from disk cache。")]),a._v(" "),t("ul",[t("li",[a._v("根据例子解释说明")])]),a._v(" "),t("blockquote",[t("p",[a._v("打开一个网页此时是开启一个新进程，内存中还没缓存文件。所以从硬盘缓存 from disk cache 中读取，如下图")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/424608/1582083662506-32ae6dfe-7d37-44dc-b0f6-16d1165623dd.png#align=left&display=inline&height=242&name=image.png&originHeight=626&originWidth=1930&size=210605&status=done&style=shadow&width=746",alt:"image.png"}})]),a._v(" "),t("blockquote",[t("p",[a._v("当刷新网页，内存中已经有缓存缓存文件，故有的会从内存缓存 from memory cache 中读取")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/424608/1582083703931-3866d531-7912-46f4-bde8-3223a39b4993.png#align=left&display=inline&height=142&name=image.png&originHeight=404&originWidth=2126&size=147650&status=done&style=shadow&width=746",alt:"image.png"}})]),a._v(" "),t("h1",{attrs:{id:"协商缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[a._v("#")]),a._v(" 协商缓存")]),a._v(" "),t("h2",{attrs:{id:"last-modified"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-modified"}},[a._v("#")]),a._v(" Last-Modified")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("Last-Modified: Wed, "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("21")]),a._v(" Nov "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2018")]),a._v(" 05:46:58 GMT\nIf-Modified-Since: Wed, "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("21")]),a._v(" Nov "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2018")]),a._v(" 05:46:58 GMT\n")])])]),t("p",[t("strong",[a._v("具体过程如下：")])]),a._v(" "),t("ul",[t("li",[a._v("1、浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，会在 Respone 的 Header 的 Last-Modified 值设置为，该资源最后修改的时间；")]),a._v(" "),t("li",[a._v("2、第二次请求的时候，在 Request 的 Header 上加上 If-Modified-Since，值为上次请求资源的 Last-Modified；")]),a._v(" "),t("li",[a._v("3、服务器收到 If-Modified-Since 与服务器文件的 Last-Modified 比对，\n"),t("ul",[t("li",[a._v("命中：无变化则返回 304，不返回资源。浏览器收到 304 使用本地缓存；不更新 Last-Modified；")]),a._v(" "),t("li",[a._v("不命中：有变化返回200，重新更新 Last-Modified、返回 200、返回资源。")])])])]),a._v(" "),t("h2",{attrs:{id:"etag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[a._v("#")]),a._v(" ETag")]),a._v(" "),t("blockquote",[t("p",[a._v("Etag是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)。")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("ETag: "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"d5d-55b192d5e0640"')]),a._v("\nIf-None-Match: "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"d5d-55b192d5e0640"')]),a._v("\n")])])]),t("p",[t("strong",[a._v("具体过程如下：")])]),a._v(" "),t("ul",[t("li",[a._v("1、浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，会在 Respone 的 Header 的 ETag 值设置为，该资源当前资源文件的一个唯一标识；")]),a._v(" "),t("li",[a._v("2、第二次请求的时候，在 Request 的 Header 上加上 If-None-Match，值为上次请求资源的 ETag；")]),a._v(" "),t("li",[a._v("3、服务器收到 If-None-Match 与服务器文件的 ETag 比对，\n"),t("ul",[t("li",[a._v("命中：一致则返回 304，代表资源无更新，故不返回资源。浏览器将会收到 304 使用本地缓存；更新 ETag；")]),a._v(" "),t("li",[a._v("不命中：不一致返回 200，重新更新 ETag、返回 200、返回资源。")])])])]),a._v(" "),t("p",[a._v("我们可以得知具体过程与 Last-Modified 过程一致，只有有一点区别如下：")]),a._v(" "),t("ul",[t("li",[a._v("当服务器返回 304 Not Modified 的响应时，由于 ETag 重新生成过，Respone 的 Header 还会把这个ETag 返回，即使这个 ETag 跟之前的没有变化。")])]),a._v(" "),t("h2",{attrs:{id:"last-modified-etag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-etag"}},[a._v("#")]),a._v(" Last-Modified & Etag")]),a._v(" "),t("p",[a._v("Last-Modified 与 ETag 是可以一起使用的（见下图），**服务器会优先验证 **ETag，一致的情况下，才会继续比对 Last-Modified，最后才决定是否返回 304 Not Modified。")]),a._v(" "),t("p",[a._v("ETag 可以解决 Last-Modified 存在的一些问题，**既生 **Last-Modified **何生 **ETag?")]),a._v(" "),t("ul",[t("li",[a._v("文件内容不更改，但修改时间发生改变，这个时候不希望客户端认为这个文件修改了。")]),a._v(" "),t("li",[a._v("某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说 1S 内修改了 N 次)，If-Modified-Since 能检查到的粒度是 S 级的，这种修改无法判断；")]),a._v(" "),t("li",[a._v("某些服务器不能精确的得到文件的最后修改时间。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/424608/1582092084291-d6b8879e-81dd-4784-90d3-3c296e0f690d.png#align=left&display=inline&height=175&name=image.png&originHeight=350&originWidth=750&size=44047&status=done&style=none&width=375",alt:"image.png"}}),a._v(" "),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/424608/1582094474388-ddd9edc3-6734-47c7-8f62-a5833c3837f3.png#align=left&display=inline&height=63&name=image.png&originHeight=126&originWidth=2022&size=40194&status=done&style=none&width=1011",alt:"image.png"}})]),a._v(" "),t("h1",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("强缓存会优先于协商缓存，若强缓存 ( Expires / Cache-Control ) 生效，直接不发送请求直接使用本地资源；不生效接着进行协商缓存。协商缓存 ( Last-Modified / ETag ) 由服务器进行判断，若文件失效，返回新的资源，否则返回 304，不返回资源。")])])}),[],!1,null,null,null);e.default=i.exports}}]);