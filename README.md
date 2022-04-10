# Nova Style Guide

## 为什么要创建这个项目

因为在看别人的代码规范的时候，我发现 O2 和 vue 的规范都是自己搭建的博客服务，我觉得非常的适合，因为我们这个项目，不只是我们的代码规范，我的理想是，这个项目将会拿来做我们的知识储备项目，我们每个人都可以来建设这个项目，为它添砖加瓦。

此项目主要来记录团队内部的文档和一些知识：

- [前端规范](#todo)
- [后端规范](#todo)
- [Blog](#todo)
- [项目](#todo)
  - [nova](#todo)
  - [hydra](#todo)
  - [IUR](#todo)

## 怎样添砖加瓦

未来可能做线上编辑，就看有没有人想挑战一扳手。

### 1. 克隆项目

执行 `git clone ...` 克隆项目到本地。

### 2. 添加或修改文章

如果你想要写一篇文章，直接去`doc/blog`文件夹下，新建一个`mdx`文件即可，注意，是 **mdx** 文件，他的语法与 `md` 的语法一样，只不过可以在最上方添加一些描述信息，方便我们展示。如果你不清楚 `md` 语法，可以参考[这篇文章](#todo)。然后选择一个你喜欢的编辑器，就可以开始写自己的文章了。

如果你想修改或者添加规范文档，可以去 `doc` 目录下对应的 guide 文件夹里面添加或修改文档。

完成修改之后，只需要将修改的文件推送到远程仓库即可。

### 3. 修改项目

如果对项目的主题风格有自己的想法，或者有一些自己的建议，可以直接修改代码。

#### 3.1 安装依赖

```shell
# 建议先安装gatsby，当然不安装也是可以的
npm install -g gatsby-cli

# 然后执行
yarn install
# 或者
npm install
```

#### 3.2 开始开发

执行下述命令启动开发服务：

```shell
# 如果安装了gatsby-cli
gatsby develop

# 其他方式
npm run develop
# 或者
yarn develop
```

本项目使用 React + TypeScript 语言，对这个感兴趣的可以研究一下，也可以去查看[官方文档](https://www.gatsbyjs.com/docs/tutorial/)，然后还使用了 `graphQL` 来获取本地的 doc 文档，至于怎么书写 graphql 可以在启动服务之后去[http://localhost:8000/__graphql](http://localhost:8000/__graphql)里面点点点，然后复制语句就行。

修改完成代码之后，直接提交就可以了。这里不做 flow 管理，当然你也可以这样做。

#### 3.3 打包

```shell
npm run build
# 或者
yarn build
```

## 关于项目

项目使用 React + TypeScript + GraphQL。

### 样式

全局样式文件在 `src/styles/global.css` 中，如果有变量或者需要覆盖 HTML 原生样式的代码，在这个文件中定义。

针对组件自身的样式，可以在 TSX 中写，或者定义一个 `index.modules.css` 文件，注意，一定是 `xxx.modules.css` 名称格式的 css 文件，`xxx.css` 是没得效果的。然后在 TSX 中 import 这个 CSS 文件就 ok 了。

### 路由

Gatsby 是不需要像 VUE 一样配置路由的，如果你在 `pages` 下创建了一个新的 `new-page.tsx` 文件，直接在浏览器地址中访问这个路径就可以了。对于 doc 文档，在GraphQL 中选上 `slug` 属性就可以了，Gatsby 会自动创建路由。
