module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'travel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: ['plugins/element-ui.js', 'plugins/i18n.js', 'plugins/vee-validate.js'],
  css: [
      {
          src: 'element-ui/lib/theme-chalk/index.css',
          lang: 'css',
      },
      {
          src: 'assets/scss/style.scss',
          lang: 'scss',
      }
  ],
    /*
    ** Build configuration
    */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
