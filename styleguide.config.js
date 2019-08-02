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
            ],
        },
    },
    configureServer(app) {
        app.use(getMockMiddleware(path.join(process.cwd(), '/')));
    },
};