const siteMetadata = {
  title: '이언상.blog',
  author: '이언상',
  avatar: 'https://avatars.githubusercontent.com/u/32788900?v=4',
  headerTitle: 'lee-eonsang.com',
  description: '학습한 내용이나 생각을 정리합니다.',
  language: 'ko-KR',
  theme: 'system', // system, dark or light
  siteUrl: 'https://lee-eonsang.com',
  siteRepo: '',
  siteLogo: '/static/images/logo.png',
  socialBanner: '',
  email: '2eonhworking@gmail.com',
  github: 'https://github.com/eonsang',
  twitter: '',
  facebook: '',
  youtube: '',
  linkedin: '',
  locale: 'ko',
  analytics: {
    googleAnalyticsId: 'G-VPS5LB44GX',
  },
  comment: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // Place the comment box above the comments. options: bottom, top
      inputPosition: 'bottom',
      // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
      lang: 'ko',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
