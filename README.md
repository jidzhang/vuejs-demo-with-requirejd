# vuejs-demo-with-requirejd

## 使用的技术
1. vuejs 很棒的前端框架, 实现了数据双向绑定, 强大的自定义组件
2. jQuery 主要是用了里面的 ajax 方法, 没有选用 vue-resource, 貌似 vuejs 的作者也不提倡用 vue-resource了.
3. requirejs 用于 js 模块化加载, 这个主要是考虑到如果一个页面上有多个功能点, 可以在功能上对页面拆分和单独实现.
	即使是多页面应用, 可能也是有好处的.

## 问题
目前对 vuejs 的应用还不是很深入, 就我现在的实践, 这些技术已经可以进行多页面开发了, 如果是做单页面应用可能会有一点问题.
这也是我下一步的计划.

## 计划
[ ] 把 jQuery 替换掉, 用一下 axios 吧,据说很牛的一个库.
[ ] 更多地利用 vuejs 的自定义组件去实现功能
[ ] 更多地尝试ES6语法
[ ] 搞清楚在单页应用和多页应用时怎么配置 webpack
[ ] 开始弄明白: vue-router 和 vuex. vue-router应该简单些!

## 现在的技术路线
1. 封装 ajax 方法, 定义一个统一的接口 doPost(packageName, serviceName, param, callback);
2. vuejs负责页面的显示和交互, 在用 vuejs 的时候可以用定义组件的方式, 但是没有像官方提供的编写.vue 文件的方式.
	主要是还没搞定 webpack 自动编译和打包的问题! 网上也有解决方案的, 比如 vue-custom-component 直接在浏览器内把 vue 文件编译为
	能执行的 js 和 css文件.
3. requirejs 负责加载 js 文件和加载纯文本, 因为vue 的模板我写在了一个单独的文件中, 通过 requirejs 把模板文件内联到 js 文件中.
	算是曲线救国了!

## 关于第三方插件
对于 jQuery 插件和 bootstrap 插件, 由于市面上的插件太多太丰富了, 最好不要用 requirejs 去做按需加载, 会出很多小问题.
所以, 我决定对于这些库都采用通常的用法, 直接在页面里面引用.
