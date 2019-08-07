const path = require('path');
const { version } = require('./package');
const getMockMiddleware = require('./lib/mockMiddleware');

module.exports = {
    components: 'src/components/**/[A-Z]*.jsx',
    title: "前端组件库",
    defaultExample: false,
    moduleAliases: {
        'rsg-example': path.resolve(__dirname, 'src'),
    },
    version,
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    loader: 'style-loader!css-loader?modules',
                },
                {
                    test: /\.less$/,
                    exclude: /node_modules/,
                    loader: 'style-loader!css-loader?modules!less-loader',
                },
                {//antd样式处理
                    test: /\.css$/,
                    exclude: /src/,
                    use: [
                        { loader: "style-loader", },
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1
                            }
                        }
                    ]
                },
                {//antd样式处理
                    test: /\.less$/,
                    exclude: /src/,
                    use: [
                        { loader: "style-loader", },
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: "less-loader",
                            options: {
                                javascriptEnabled: true
                            }
                        }
                    ]
                },
            ],
        },
    },
    sections: [
        {
            name: '简介',
            content: 'docs/introduction.md'
        },
        {
            name: '文档',
            sections: [
                {
                    name: '安装',
                    content: 'docs/installation.md',
                },
                {
                    name: '配置',
                    content: 'docs/configuration.md'
                },
                {
                    name: '在线演示',
                    external: true,
                    href: 'http://example.com'
                }
            ]
        },
        {
            name: 'UI 组件',
            components: 'src/components/**/[A-Z]*.jsx',
            exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
            usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
        }
    ],
    configureServer(app) {
        app.use(getMockMiddleware(path.join(process.cwd(), '/')));
    },

};