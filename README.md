## Base Library

### RUN

```bash
npm install
npm start
```

### COMMANDS

* `npm run dev`: 启动开发模式，并watch文件变更，自动重新打包代码
* `npm run build`: 打包插件演示示例
* `npm run demo`: 启动本地服务，并watch文件变更，实时更新demo效果
* `npm run lib`: 打包出用于生产环境的插件代码
* `npm run lint`: 对src目录进行eslint校验
* `npm run doc:dev`: 开发组件文档
* `npm run doc:build`: 编译生成组件文档

_**补充**：编译文档需先安装[docz](https://www.docz.site/docs/project-configuration)，运行 `npm install docz -g`。_

### 目录说明

```bash
|-- base-library       插件更目录（通常package.json中的name相同）
  |-- config           放置插件开发配置
    |-- base.js        通用配置
    |-- demo.js        用于编译运行插件演示示例
    |-- dev.js         用户编译输出开发环境使用的插件文件
    |-- lib.js         用户编译输出生产环境的插件代码
  |-- demo             编辑输出的插件演示代码目录
  |-- example          插件演示示例源码目录
  |-- src              插件自身源码目录
    |-- index.js       插件入口（与webpackConfig中的entry对应）
    |-- index.less     插件样式
  |-- index.mdx        组件文档
```
