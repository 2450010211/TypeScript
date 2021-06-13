const path = require('path');
//配置由webpack自动创建HTML 5.3.1版本不能生成html
const HTMLWebpackPlugin = require('html-webpack-plugin');
//清除之前dist中的文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

//webpack所有配置文件都写在module.exports中
module.exports = {
    //指定入口文件
    entry: './src/index.ts',
    //指定打包文件所在目录
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        //打包后的文件名
        filename: 'bundle.js',
        //告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false,
            const: false
        }
    },
    //指定webpack打包时要用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //指定生效的文件
                test: /\.ts$/,
                //要使用的loader
                use: [
                  //配置babel
                    {
                        //指定加载器
                        loader: 'babel-loader',
                        //设置babel
                        options: {
                            //设置预定义的环境
                            presets: [
                                [
                                    //指定环境插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets: {
                                            "chrome": "88"
                                            // "ie": "11"
                                        },
                                        //指定corejs版本
                                        "corejs": "3",
                                        //使用corejs的方法，按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                //要移除的文件
                exclude: /node_modules/
            },
            //设置less文件处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    //引入postcss兼容其他版本浏览器
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 version'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    //设置引用的模块
    resolve: {
        extensions: ['.ts', '.js']
    }
};
