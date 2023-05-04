(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{345:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("HashMap作为程序员最常用的数据结构，包含了设计者的许多精巧构思，看完源码让人直呼我怎么没想到，快来一块学习一下。")]),s._v(" "),t("h3",{attrs:{id:"_1-有没有一种数据结构-增删改查都快"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-有没有一种数据结构-增删改查都快"}},[s._v("#")]),s._v(" 1. 有没有一种数据结构，增删改查都快？")]),s._v(" "),t("p",[s._v("我们都知道数组的查询比较快，因为地址是连续的，可以通过下标直接找到元素。不过增删较慢，每次在数组中间增删一个元素，都涉及数组拷贝。")]),s._v(" "),t("p",[s._v("HashMap设计高明之处，是用hashCode代替数组下标访问，不再要求元素存储必须连续，增删的时候也就不需要数组拷贝。")]),s._v(" "),t("p",[s._v("使用链表解决hash冲突，使用阈值默认75%控制容量，避免元素过多、hash冲突过多，退化成链表存储，影响查询性能。HashMap通常情况下，增删改查的效率都是O(1)")]),s._v(" "),t("h3",{attrs:{id:"_2-如果快速找到hashmap数组下标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-如果快速找到hashmap数组下标"}},[s._v("#")]),s._v(" 2. 如果快速找到HashMap数组下标？")]),s._v(" "),t("p",[s._v("计算机中与运算的性能要高于求余，HashMap直接用hashCode逻辑与(length-1)，得到数组下标。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("indexFor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" h "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("测试一下，hashCode分别是10（二级制是1010）和17（二级制是100001），HashMap的length是16，(length-1)的二进制就是1111，进行与运算。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/22/1723b6afbe08bda0?w=954&h=562&f=png&s=67561",alt:""}}),s._v("\n这也是要求HashMap的容量必须是2的幂次方的原因。")]),s._v(" "),t("h3",{attrs:{id:"_3-怎么计算大于当前数值的最小2的幂次方"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-怎么计算大于当前数值的最小2的幂次方"}},[s._v("#")]),s._v(" 3. 怎么计算大于当前数值的最小2的幂次方？")]),s._v(" "),t("p",[s._v("如果HashMap的初始容量时10，由于HashMap要求容量必须是2的幂次方，怎么计算出大于10的最小的2的幂次方16呢？")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// number是初始化容量10，计算出capacity=16")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" capacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("highestOneBit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("highestOneBit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("初看这段源码是不是懵逼了，图解一下就清晰了。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(">> 代表二进制右移，>> 1 表示右移一位，>> 2 表示右移两位\n>>> 代表无符号右移\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("number = 10，"),t("br"),s._v("\n先计算 i = (number-1) << 1 "),t("br"),s._v("\nnumber - 1 = 9 ，9的二进制是1001，左移一位变成 0001 0010,"),t("br"),s._v("\n然后执行 "),t("code",[s._v("highestOneBit()")]),s._v(" 方法\n最后得到的结果应该是16，如图所示")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/24/17246f2e6f382635?w=1198&h=1370&f=png&s=195960",alt:""}}),s._v("\n最后得到 0001 1111, 然后执行 "),t("code",[s._v("i - (i >>> 1)")]),s._v(", "),t("br"),s._v("\n0001 1111 转换成十进制是31，"),t("br"),s._v("\ni >>> 1 得到 1111，转换成十进制是15"),t("br"),s._v("\n31 - 15 = 16")])])}),[],!1,null,null,null);t.default=r.exports}}]);