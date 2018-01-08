# Vue版-2017网易云音乐陪你温暖同行

网易云音乐2017年度h5页面-vue实现


#### 目的
- 在空闲的时间重新学习并使用vue.js的各种api
- 制作根据一个数据源(假的前后端分离) 的 vue版-网易云音乐2017年度h5页面

#### 技术栈

- Vue2：采用最新Vue2的语法
- Vuex：管理公共组件状态量
- vue-router：管理单页面应用路由
- sass：css预处理语言
- Webpack：自动化构建工具，主要配置vue-cli脚手架提供。
- ES5：采用ES5语法。
- CSS3：CSS3动画及样式。


#### 环境搭建（安装运行前请确定已安装node环境）

``` bash
- 环境安装: npm install

- 启动服务(:8080): npm run dev

- 发布代码: npm run build

- 代码检查: npm run build --report
```

#### 项目构成

<pre>
├── build                   // 构建服务和webpack配置
├── config                     // 项目不同环境的配置
├── index.html                     // 项目入口文件
├── package.json                   // 项目配置文件
├── static                   // 放置静态资源( 公共css js images资源 )
├── src                   // 生产目录
│   ├── views                   // 各个视图
│   ├── router                   // 路由配置器文件夹
│   ├── App.vue                   // 主页面
│   ├── main.js                   // webpack 预编译入口
</pre>


#### 效果图片

![全部页面的gif](https://github.com/lxs24sxl/readme_add_pic/raw/master/images/year2017/year2017_result1.gif)

![pc页面的图片](https://github.com/lxs24sxl/readme_add_pic/raw/master/images/year2017/year2017_result_web.PNG)


#### 开发进度

> | 2018-01-09

- 添加背景音乐和pc端代理页面

> | 2018-01-08

- 添加m-p14/m-ending/m-video页面、动画及数据绑定
- 处理页面跳转逻辑

> | 2018-01-07

- 添加m-p04/m-p05/m-p06/m-p07/m-p08页面、动画及数据绑定
- 添加m-p09/m-p10/m-p12/m-p13页面、动画及数据绑定

> | 2018-01-06

- 处理cover/night/m-p01/m-p03的数据绑定
- 整合样式文件和添加路由

> | 2018-01-05

- 添加m-p01和m-p02页面及动画

> | 2018-01-04

- 添加cover和night页面及动画


#### 最后

1. 新手前端上路~~努力学习中,以后再回来看自己的垃圾代码。 
