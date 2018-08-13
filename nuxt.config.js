const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
    loading: { color: '#3389e7' },
    // loading: '~components/loading.vue',
    /*
     ** Build configuration
     */
    build: {
        plugins: [
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
                    }),
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
            require('postcss-px2rem')({
                baseDpr: 2,
                remUnit: 37.5 // 转换基本单位
            })
        ]
    },
    modules: [
        '@nuxtjs/axios'
    ],
    css: [
        { src: 'iview/dist/styles/iview.css' },
        'assets/main.css'
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