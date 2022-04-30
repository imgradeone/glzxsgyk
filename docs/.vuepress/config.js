const { defaultTheme } = require('vuepress')

module.exports = {
    lang: 'zh-CN',
    title: '桂林中学 时光驿客',
    description: '影像记录时光 记忆由你塑造',
  
    head: [
        ['meta', { name: 'theme-color', content: '#f57005' }],
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['meta', { name: 'keywords', content: '桂林中学时光驿客,桂林中学社团,桂林中学,高中社团,摄影,摄影社团,视频剪辑,社团,时光驿客' }],
        ['script', {'data-domain': "glzxsgyk.com", src: "https://stat.imgradeone.com/js/plausible.js"}],
    ],

    theme: defaultTheme({
      logo: '/logo.png',
      navbar: [
        { text: '主页', link: '/' },
        { text: '作品', link: '/works/' },
        { text: '关于', link: '/about.html' },
      ],
      darkMode: false,
      notFound: ['抱歉，我们好像走远了......'],
      backToHome: '返回主页',
      contributors: false,
      lastUpdatedText: "上次更新于",
    })
  }