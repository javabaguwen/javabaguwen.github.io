(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{346:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("众所周知HashMap是工作和面试中最常遇到的数据类型，但很多人对HashMap的知识止步于会用的程度，对它的底层实现原理一知半解，了解过很多HashMap的知识点，却都是散乱不成体系，今天一灯带你一块深入浅出的剖析HashMap底层实现原理。")]),s._v(" "),t("p",[s._v("看下面这些面试题，你能完整的答对几道？")]),s._v(" "),t("h2",{attrs:{id:"_1-hashmap底层数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-hashmap底层数据结构"}},[s._v("#")]),s._v(" 1. HashMap底层数据结构？")]),s._v(" "),t("p",[s._v("JDK1.7采用的是数组+链表，数组可以通过下标访问，实现快速查询，链表用来解决哈希冲突。")]),s._v(" "),t("p",[s._v("链表的查询时间复杂度是O(n)，性能较差，所以JDK1.8做了优化，引入了红黑树，查询时间复杂度是O(logn)。")]),s._v(" "),t("p",[s._v("JDK1.8采用的是数组+链表+红黑树的结构，当链表长度大于等于8，并且数组长度大于等于64时，链表才需要转换成成红黑树。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/Users/alsc/Documents/yideng-article/src/main/java/com/yideng/blog/img/image-20221002171001135.png",alt:"image-20221002171001135"}})]),s._v(" "),t("h2",{attrs:{id:"_2-hashmap的初始容量是多少"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-hashmap的初始容量是多少"}},[s._v("#")]),s._v(" 2. HashMap的初始容量是多少？")]),s._v(" "),t("p",[s._v("如果面试的时候，你回答是16，面试官肯定让你回去等通知。")]),s._v(" "),t("p",[s._v("JDK1.7的时候初始容量确实是16，但是JDK1.8的时候初始化HashMap的时候并没有指定容量大小，而是在第一次执行put数据，才初始化容量。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 负载因子大小")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" loadFactor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认负载因子大小")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DEFAULT_LOAD_FACTOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.75f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化方法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loadFactor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DEFAULT_LOAD_FACTOR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("执行new HashMap()方法初始化的时候，只指定了负载因子的大小。")]),s._v(" "),t("h2",{attrs:{id:"_3-hashmap的put方法流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-hashmap的put方法流程"}},[s._v("#")]),s._v(" 3. HashMap的put方法流程？")]),s._v(" "),t("ol",[t("li",[s._v("计算key的哈希值")]),s._v(" "),t("li",[s._v("判断数组是否为空，如果为空，就执行扩容，初始化数据大小。")]),s._v(" "),t("li",[s._v("如果数组不为空，根据哈希值找到数组所在下标")]),s._v(" "),t("li",[s._v("判断下标元素是否为null，如果为null就创建新元素")]),s._v(" "),t("li",[s._v("如果下标元素不为null，就判断是否是红黑树类型，如果是，则执行红黑树的新增逻辑")]),s._v(" "),t("li",[s._v("如果不是红黑树，说明是链表，就追加到链表末尾")]),s._v(" "),t("li",[s._v("如果判断链表长度是否大于等于8，数组长度是否大于等于64，如果不是就执行扩容逻辑")]),s._v(" "),t("li",[s._v("如果是，则需要把链表转换成红黑树")]),s._v(" "),t("li",[s._v("最后判断新增元素后，判断元素个数是否大于阈值（16*0.75=12），如果是则执行扩容逻辑，结束。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/Users/alsc/Documents/yideng-article/src/main/java/com/yideng/blog/img/HashMap-4713165.jpg",alt:"HashMap"}})]),s._v(" "),t("p",[s._v("源码如下：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// put方法入口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("put")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 计算哈希值")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("putVal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("putVal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" onlyIfAbsent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" evict"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" tab"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断数组是否为空，为空的话，则进行扩容初始化")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tab "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tab"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tab "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 计算数组下标位置，判断下标位置元素是否为null")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tab"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        tab"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 数组中已经存在元素（处理哈希冲突）")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),s._v(" k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断元素值是否一样，如果一样则替换旧值")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" hash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                e "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断元素类型是否是红黑树")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行红黑树新增逻辑")]),s._v("\n            e "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("putTreeVal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tab"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不是红黑树类型则说明是链表")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 遍历链表")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" binCount "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("binCount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 到达链表的尾部")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在尾部插入新结点")]),s._v("\n                    p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 链表结点数量达到阈值(默认为 8 )，执行 treeifyBin 方法")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个方法会根据 HashMap 数组来决定是否转换为红黑树。")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只有当数组长度大于或者等于 64 的情况下，才会执行转换红黑树操作，以减少搜索时间。否则，就是只是对数组扩容。")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("binCount "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TREEIFY_THRESHOLD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n                        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("treeifyBin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tab"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断链表中结点的key值与插入的元素的key值是否相等")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" hash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 相等，跳出循环")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用于遍历桶中的链表，与前面的e = p.next组合，可以遍历链表")]),s._v("\n                p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表示在数组中找到key值、哈希值与插入元素相等的结点")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录e的value")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),s._v(" oldValue "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// onlyIfAbsent为false或者旧值为null")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("onlyIfAbsent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" oldValue "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用新值替换旧值")]),s._v("\n                e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 访问后回调")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("afterNodeAccess")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回旧值")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" oldValue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录修改次数")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("modCount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 元素个数大于阈值则扩容")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" threshold"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 插入后回调")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("afterNodeInsertion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("evict"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br")])]),t("h2",{attrs:{id:"_4-hashmap容量大小为什么要设置成2的倍数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-hashmap容量大小为什么要设置成2的倍数"}},[s._v("#")]),s._v(" 4. HashMap容量大小为什么要设置成2的倍数？")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" index "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("为了更快的计算key所在的数组下标位置。")]),s._v(" "),t("p",[s._v("当数组长度（n）是2的倍数的时候，就可以直接通过逻辑与运算（&）计算下标位置，比取模速度更快。")]),s._v(" "),t("h2",{attrs:{id:"_5-hashmap为什么是线程不安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-hashmap为什么是线程不安全"}},[s._v("#")]),s._v(" 5. HashMap为什么是线程不安全？")]),s._v(" "),t("p",[s._v("原因就是HashMap的所有修改方法都没有加锁，导致在多线程情况下，无法保证数据一致性和安全性。")]),s._v(" "),t("p",[s._v("比如：一个线程删除了一个key，由于没有加锁，其他线程无法及时感知到，还继续能查到这个key，无法保证数据的一致性。")]),s._v(" "),t("p",[s._v("比如：一个线程添加完一个元素，由于没有加锁，其他线程无法及时感知到，另一个线程正在扩容，扩容后就把上一个线程添加的元素弄丢了，无法保证数据的安全性。")]),s._v(" "),t("h2",{attrs:{id:"_6-解决哈希冲突方法有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-解决哈希冲突方法有哪些"}},[s._v("#")]),s._v(" 6. 解决哈希冲突方法有哪些？")]),s._v(" "),t("p",[s._v("常见有链地址法、线性探测法、再哈希法等。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("链地址法")]),s._v(" "),t("p",[s._v("就是把发生哈希冲突的值组成一个链表，HashMap就是采用的这种。")])]),s._v(" "),t("li",[t("p",[s._v("线性探测法")]),s._v(" "),t("p",[s._v("发生哈希冲突后，就继续向下遍历，直到找到空闲的位置，ThreadLocal就是采用的这种，以后再详细讲。")])]),s._v(" "),t("li",[t("p",[s._v("再哈希法")]),s._v(" "),t("p",[s._v("使用一种哈希算法发生了冲突，就换一种哈希算法，直到不冲突为止（就是这么聪明）。")])])]),s._v(" "),t("h2",{attrs:{id:"_7-jdk1-8扩容流程有什么优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-jdk1-8扩容流程有什么优化"}},[s._v("#")]),s._v(" 7. JDK1.8扩容流程有什么优化？")]),s._v(" "),t("p",[s._v("在JDK1.7扩容的时候，会遍历原数组，重新哈希，对新数组长度逻辑与，计算出数据下标，然后放到新数组中，比较麻烦耗时。")]),s._v(" "),t("p",[s._v("在JDK1.8扩容的时候，会遍历原数组，然后统计出两组数据，一组是新数组的下标位置不变，另一组是新数组的下标位置等于原数组的下标位置加上原数组的长度。")]),s._v(" "),t("p",[s._v("比如：数组长度由16扩容到32，哈希值是0和32的元素，在新旧数组中下标位置不变，都是下标为0的位置。而哈希值是16和48的元素，在新数组的位置=原数组的下标+原数组的长度，也就是下标为16的位置。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/Users/alsc/Documents/yideng-article/src/main/java/com/yideng/blog/img/image-20221002214315149.png",alt:"image-20221002214315149"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);