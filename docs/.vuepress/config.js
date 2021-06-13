module.exports = {
    lang: 'zh-CN',
    title: '桂林中学 时光驿客',
    description: '致力于制作更高品质视频的高中社团',
  
    head: [
        ['meta', { name: 'theme-color', content: '#f57005' }],
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['meta', { name: 'keywords', content: '桂林中学,桂林中学社团,摄影,摄影社团,高中社团,视频剪辑,社团,时光驿客' }]
      ],
  
    themeConfig: {
      logo: '/logo.png',
      navbar: [
        { text: '主页', link: '/' },
        { text: '作品', link: '/works/' },
        { text: '关于', link: '/about.md' },
      ],
      notFound: ['抱歉，我们好像走远了......'],
      backToHome: '返回主页',
    },
  }