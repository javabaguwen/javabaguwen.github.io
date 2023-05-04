(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{342:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("我们平时开发中好像很少使用到BlockingQueue（阻塞队列），比如我们想要存储一组数据的时候会使用ArrayList，想要存储"),t("strong",[s._v("键值对")]),s._v("数据会使用HashMap，在什么场景下需要用到BlockingQueue呢？")]),s._v(" "),t("h2",{attrs:{id:"_1-blockingqueue的应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-blockingqueue的应用场景"}},[s._v("#")]),s._v(" 1. BlockingQueue的应用场景")]),s._v(" "),t("p",[s._v("当我们处理完一批数据之后，需要把这批数据发给下游方法接着处理，但是下游方法的处理速率不受控制，可能时快时慢。如果下游方法的处理速率较慢，会拖慢当前方法的处理速率，这时候该怎么办呢？")]),s._v(" "),t("p",[s._v("你可能想到使用线程池，是个办法，不过需要创建很多线程，还要考虑下游方法支不支持并发，如果是CPU密集任务，可能多线程比单线程处理速度更慢，因为需要频繁上下文切换。")]),s._v(" "),t("p",[s._v("这时候就可以考虑使用BlockingQueue，BlockingQueue最典型的应用场景就是上面这种生产者-消费者模型。生产者往队列中放数据，消费者从队列中取数据，中间使用BlockingQueue做缓冲队列，也就解决了生产者和消费者速率不同步的问题。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/Users/alsc/Documents/yideng-article/src/main/java/com/yideng/blog/img/image-20221018104056425.png",alt:"image-20221018104056425"}})]),s._v(" "),t("p",[s._v("你可能联想到了消息队列（MessageQueue），消息队列相当于分布式阻塞队列，而BlockingQueue相当于本地阻塞队列，只作用于本机器。对应的是分布式缓存（比如：Redis、Memcache）和本地缓存（比如：Guava、Caffeine）。")]),s._v(" "),t("p",[s._v("另外很多框架中都有BlockingQueue的影子，比如线程池中就用到BlockingQueue做任务的缓冲。消息队列中发消息、拉取消息的方法也都借鉴了BlockingQueue，使用起来很相似。")]),s._v(" "),t("p",[s._v("今天就一块深入剖析一下Queue的底层源码。")]),s._v(" "),t("h2",{attrs:{id:"_2-blockingqueue的用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-blockingqueue的用法"}},[s._v("#")]),s._v(" 2. BlockingQueue的用法")]),s._v(" "),t("p",[s._v("BlockingQueue的用法非常简单，就是放数据和取数据。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @apiNote BlockingQueue示例\n * @author 一灯架构\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlockingQueueDemo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InterruptedException")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 创建队列，设置容量是10")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" queue "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayBlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 往队列中放数据")]),s._v("\n        queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("put")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3. 从队列中取数据")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("take")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("为了满足不同的使用场景，BlockingQueue设计了很多的放数据和取数据的方法。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("操作")]),s._v(" "),t("th",[s._v("抛出异常")]),s._v(" "),t("th",[s._v("返回特定值")]),s._v(" "),t("th",[s._v("阻塞")]),s._v(" "),t("th",[s._v("阻塞一段时间")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("放数据")]),s._v(" "),t("td",[t("code",[s._v("add")])]),s._v(" "),t("td",[t("code",[s._v("offer")])]),s._v(" "),t("td",[t("code",[s._v("put")])]),s._v(" "),t("td",[t("code",[s._v("offer(e, time, unit)")])])]),s._v(" "),t("tr",[t("td",[s._v("取数据")]),s._v(" "),t("td",[t("code",[s._v("remove")])]),s._v(" "),t("td",[t("code",[s._v("poll")])]),s._v(" "),t("td",[t("code",[s._v("take")])]),s._v(" "),t("td",[t("code",[s._v("poll(time, unit)")])])]),s._v(" "),t("tr",[t("td",[s._v("查看数据（不删除）")]),s._v(" "),t("td",[t("code",[s._v("element()")])]),s._v(" "),t("td",[t("code",[s._v("peek()")])]),s._v(" "),t("td",[s._v("不支持")]),s._v(" "),t("td",[s._v("不支持")])])])]),s._v(" "),t("p",[s._v("这几组方法的不同之处就是：")]),s._v(" "),t("ol",[t("li",[s._v("当队列满了，再往队列中放数据，add方法抛异常，offer方法返回false，put方法会一直阻塞（直到有其他线程从队列中取走数据），offer方法阻塞指定时间然后返回false。")]),s._v(" "),t("li",[s._v("当队列是空，再从队列中取数据，remove方法抛异常，poll方法返回null，take方法会一直阻塞（直到有其他线程往队列中放数据），poll方法阻塞指定时间然后返回null。")]),s._v(" "),t("li",[s._v("当队列是空，再去队列中查看数据（并不删除数据），element方法抛异常，peek方法返回null。")])]),s._v(" "),t("p",[s._v("工作中使用最多的就是offer、poll阻塞指定时间的方法。")]),s._v(" "),t("h2",{attrs:{id:"_3-blockingqueue实现类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-blockingqueue实现类"}},[s._v("#")]),s._v(" 3. BlockingQueue实现类")]),s._v(" "),t("p",[s._v("BlockingQueue常见的有下面5个实现类，主要是应用场景不同。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("ArrayBlockingQueue")]),s._v(" "),t("p",[s._v("基于数组实现的阻塞队列，创建队列时需指定容量大小，是有界队列。")])]),s._v(" "),t("li",[t("p",[s._v("LinkedBlockingQueue")]),s._v(" "),t("p",[s._v("基于链表实现的阻塞队列，默认是无界队列，创建可以指定容量大小")])]),s._v(" "),t("li",[t("p",[s._v("SynchronousQueue")]),s._v(" "),t("p",[s._v("一种没有缓冲的阻塞队列，生产出的数据需要立刻被消费")])]),s._v(" "),t("li",[t("p",[s._v("PriorityBlockingQueue")]),s._v(" "),t("p",[s._v("实现了优先级的阻塞队列，基于数据显示，是无界队列")])]),s._v(" "),t("li",[t("p",[s._v("DelayQueue")]),s._v(" "),t("p",[s._v("实现了延迟功能的阻塞队列，基于PriorityQueue实现的，是无界队列")])])]),s._v(" "),t("h2",{attrs:{id:"_4-blockingqueue源码解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-blockingqueue源码解析"}},[s._v("#")]),s._v(" 4. BlockingQueue源码解析")]),s._v(" "),t("p",[s._v("BlockingQueue的5种子类实现方式大同小异，这次就以最常用的ArrayBlockingQueue做源码解析。")]),s._v(" "),t("h3",{attrs:{id:"_4-1-arrayblockingqueue类属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-arrayblockingqueue类属性"}},[s._v("#")]),s._v(" 4.1 ArrayBlockingQueue类属性")]),s._v(" "),t("p",[s._v("先看一下ArrayBlockingQueue类里面有哪些属性：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用来存放数据的数组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 下次取数据的数组下标位置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" takeIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 下次放数据的数组下标位置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" putIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前已有元素的个数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 独占锁，用来保证存取数据安全")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ReentrantLock")]),s._v(" lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取数据的条件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Condition")]),s._v(" notEmpty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 放数据的条件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Condition")]),s._v(" notFull"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("ArrayBlockingQueue底层使用数组来存储数据，其中4组存取数据的方法实现也是大同小异，本次以put和take方法进行解析。")]),s._v(" "),t("h3",{attrs:{id:"_4-2-put方法源码解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-put方法源码解析"}},[s._v("#")]),s._v(" 4.2 put方法源码解析")]),s._v(" "),t("p",[t("img",{attrs:{src:"/Users/alsc/Documents/yideng-article/src/main/java/com/yideng/blog/img/image-20221003220940753.png",alt:"image-20221003220940753"}})]),s._v(" "),t("p",[s._v("无论是放数据还是取数据都是从队头开始，逐渐往队尾移动，分别是使用两个指针putIndex和takeIndex实现的。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 放数据，如果队列已满，就一直阻塞，直到有其他线程从队列中取走数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("put")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InterruptedException")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 校验元素不能为空")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("checkNotNull")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ReentrantLock")]),s._v(" lock "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加锁，加可中断的锁")]),s._v("\n    lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lockInterruptibly")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果队列已满，就一直阻塞，直到被唤醒")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            notFull"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("await")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果队列未满，就往队列添加元素")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("enqueue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("finally")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结束后，别忘了释放锁")]),s._v("\n        lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unlock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实际往队列添加数据的方法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("enqueue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取数组")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" items "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// putIndex 表示本次插入的位置")]),s._v("\n    items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("putIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ++putIndex 计算下次插入的位置")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果本次插入的位置，正好是队尾，下次插入就从 0 开始")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("putIndex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        putIndex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 元素数量加一")]),s._v("\n    count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 唤醒因为队列空等待的线程")]),s._v("\n    notEmpty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("signal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])]),t("p",[s._v("源码中有个有意思的设计，添加元素的时候如果已经到了队尾，下次就从队头开始添加，相当于做成了一个循环队列。")]),s._v(" "),t("p",[s._v("像下面这样：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/Users/alsc/Documents/yideng-article/src/main/java/com/yideng/blog/img/image-20221003222232640.png",alt:"image-20221003222232640"}})]),s._v(" "),t("h3",{attrs:{id:"_4-3-take方法源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-take方法源码"}},[s._v("#")]),s._v(" 4.3 take方法源码")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取数据，如果队列为空，就一直阻塞，直到有其他线程往队列中放数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("take")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InterruptedException")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ReentrantLock")]),s._v(" lock "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加锁，加可中断的锁")]),s._v("\n    lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lockInterruptibly")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果队列为空，就一直阻塞，直到被唤醒")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            notEmpty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("await")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果队列不为空，就从队列取数据")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dequeue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("finally")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结束后，别忘了释放锁")]),s._v("\n        lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unlock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实际从队列取数据的方法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dequeue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取数组")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" items "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// takeIndex 表示本次取数据的位置，是上一次取数据时计算好的")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("takeIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取完之后，就把队列该位置的元素删除")]),s._v("\n    items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("takeIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ++takeIndex 计算下次取数据的位置")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果本次取数据的位置，正好是队尾，下次就从 0 开始取数据")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("takeIndex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        takeIndex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 元素数量减一")]),s._v("\n    count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("itrs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        itrs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("elementDequeued")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 唤醒被队列满所阻塞的线程")]),s._v("\n    notFull"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("signal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br")])]),t("h3",{attrs:{id:"_4-4-总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-总结"}},[s._v("#")]),s._v(" 4.4 总结")]),s._v(" "),t("ol",[t("li",[s._v("ArrayBlockingQueue基于数组实现的阻塞队列，创建队列时需指定容量大小，是有界队列。")]),s._v(" "),t("li",[s._v("ArrayBlockingQueue底层采用循环队列的形式，保证数组位置可以重复使用。")]),s._v(" "),t("li",[s._v("ArrayBlockingQueue存取都采用ReentrantLock加锁，保证线程安全，在多线程环境下也可以放心使用。")]),s._v(" "),t("li",[s._v("使用ArrayBlockingQueue的时候，预估好队列长度，保证生产者和消费者速率相匹配。")])]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("我是「一灯架构」，如果本文对你有帮助，欢迎各位小伙伴点赞、评论和关注，感谢各位老铁，我们下期见")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);