const appBaseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['~/../scss/style.scss', '~/../scss/app.scss'],
  compatibilityDate: '2026-11-18',
  app: {
    baseURL: appBaseURL,
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Gym',
      titleTemplate: '%s | Gym',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: `${appBaseURL}img/favicon.png` },
        { rel: 'stylesheet', href: `${appBaseURL}css/bootstrap.min.css` },
        { rel: 'stylesheet', href: `${appBaseURL}css/font-awesome.min.css` },
        { rel: 'stylesheet', href: `${appBaseURL}css/themify-icons.css` },
        { rel: 'stylesheet', href: `${appBaseURL}css/flaticon.css` },
      ],
    },
  },
})



