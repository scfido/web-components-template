# 简介

本项目为Web前端组件开发模板库。  
实现功能：

- 集成Markdown文档展示控件和说明
- mock http请求
- 集成单元测试(未完成)

## 目录结构

每个组件都放在`src\components`目录，以Button组件为例结构如下：

```txt
src
└── components
    └── button
        ├── index.js                //导出文件，方便引用
        ├── Button.jsx              //组件代码
        ├── readme.md               //组件说明文档
        └── __test__
            └── button.test.js      //单元测试
```

*特别提醒：组件命首字母必须大写，扩展名为jsx。*

## 使用

### 快速开始

```sh
yarn
yarn doc
```

成功后浏览<http://localhost:6060>查看组件运行效果和说明文档

## 参考资料

[React Styleguidist](https://react-styleguidist.js.org)
