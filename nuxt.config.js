const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: '杂货铺',
        meta: [
            { charset: 'utf-8' },
            // { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/my-favicon.ico' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    // loading: { color: '#3389e7' },
    loading: '~/components/Loading',
    /*
     ** Build configuration
     */
    build: {
        filenames: {
            vendor: 'vendor.[hash].js',
            app: 'app.[chunkhash].js'
        },
        plugins: [
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'vendor',
            //     minChunks: function(module) {
            //         // a module is extracted into the vendor chunk if...
            //         return (
            //             // it's inside node_modules
            //             /node_modules/.test(module.context) &&
            //             // and not a CSS file (due to extract-text-webpack-plugin limitation)
            //             !/\.css$/.test(module.request)
            //         )
            //     }
            // }),
            // new webpack.DefinePlugin({
            //     'process.VERSION': require('./package.json').version
            // }),
            // new UglifyJsPlugin({
            //     uglifyOptions: {
            //         compress: {
            //             warnings: false
            //         }
            //     },
            //     sourceMap: true,
            //     parallel: true
            // }),
            // new CompressionPlugin({
            //     asset: '[path].gz[query]', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
            //     algorithm: 'gzip', //算法
            //     test: new RegExp(
            //         '\\.(js|css)$' //压缩 js 与 css
            //     ),
            //     threshold: 10240, //只处理比这个值大的资源。按字节计算
            //     minRatio: 0.8 //只有压缩率比这个值小的资源才会被处理
            // })
            // css 压缩代码，将下面代码注释掉
            // new OptimizeCSSPlugin({
            //     cssProcessorOptions: config.build.productionSourceMap ? { safe: true, map: { inline: false } } : { safe: true }
            // })
        ],
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev) {
                config.plugins.concat([
                    // new BundleAnalyzerPlugin(),
                    new ExtractTextPlugin({
                        filename: 'css/common.[chunkhash].css'
                    }),
                    new OptimizeCSSPlugin({
                        cssProcessorOptions: {
                            safe: true
                        }
                    }),
                    new FriendlyErrorsPlugin()
                ])
            } else {
                config.plugins.concat([
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            compress: {
                                warnings: false
                            }
                        },
                        sourceMap: true,
                        parallel: true
                    }),
                    new ExtractTextPlugin({
                        filename: 'css/common.[chunkhash].css'
                    }),
                    new OptimizeCSSPlugin({
                        cssProcessorOptions: {
                            safe: true
                        }
                    })
                ])
            }
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        postcss: [
            require('autoprefixer')({
                browsers: ['iOS >= 7', 'Android >= 4.0']
            }),
            require('postcss-px2rem')({
                baseDpr: 2,
                remUnit: 37.5 // 转换基本单位
            })
        ],
        vendor: [
            '~/plugins/iview.js',
            'axios'
        ],
        extractCSS: { allChunks: true }
    },
    modules: [
        '@nuxtjs/axios'
    ],
    css: [
        { src: 'iview/dist/styles/iview.css' },
        { src: 'assets/main.scss', lang: 'sass' }
    ],
    plugins: [
        { src: '~plugins/iview.js', ssr: true },
        '~plugins/filter.js'
    ],
    axios: {
        baseURL: 'https://www.apiopen.top'
    },
    router: {
        middleware: 'redirect'
    }
}