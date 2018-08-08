module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: '杂货铺',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/my-favicon.ico' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    modules: [
        '@nuxtjs/axios'
    ],
    css: [
        { src: 'iview/dist/styles/iview.css' }
    ],
    plugins: [
        { src: '~plugins/iview.js', ssr: true }
    ],
    axios: {
        baseURL: 'https://www.apiopen.top'
    }
}