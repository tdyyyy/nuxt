# MIDDLEWARE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your application middleware.
The middleware lets you define custom function to be ran before rendering a page or a group of pages (layouts).

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing#middleware).
中间件允许您定义一个自定义函数运行在一个页面或一组页面渲染之前。
每一个中间件应放置在 middleware/ 目录。文件名的名称将成为中间件名称(middleware/auth.js将成为 auth 中间件)。

中间件执行流程顺序：
nuxt.config.js
匹配布局
匹配页面

一个中间件接收 context 作为第一个参数：
中间件可以异步执行,只需要返回一个 Promise 或使用第2个 callback 作为第一个参数：
