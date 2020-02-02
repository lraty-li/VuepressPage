module.exports = {
    title: 'blog',
    description: 'Just playing around',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link',{rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
      ['meta',{charset:'utf-8'}],
      ['meta',{name:"viewport",content:"width=device-width, initial-scale=1.0"}]
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },

    themeConfig: {
      nav:[ // 导航栏配置
        {text: 'Gayhub', link: 'https://github.com/lraty-li' },
        {
          text:'收藏',
          ariaLabel:'收藏', 
          items:
          [
            {text:'漫画', link:'/Loved/Comics'},
            {text:'动画', link:'/Loved/Animate'},
          ]
        },

      ],
      sidebar: {
        '/Loved/':[         
            {
                title: '收藏',   // 一级菜单名称
                collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                sidebarDepth: 0,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                children: [
                    ['Comics','漫画'],
                    ['Music.md', '音乐'], 
                    ['Animate.md', '动画'],
                ]
            }
        ],
        '/':['/Guide.md'],
      }
  }, 
  plugins: [
    // 你可以多次使用这个插件
    [
      'vuepress-plugin-container',
      {
        type: 'Intro',
        before: info => `<div class="Intro"><div class="title">${info}</div>`,
        after: '</div>',
      },
    ],

    [
      'vuepress-plugin-container',
      {
        type:'comment',
        defaultTitle:'吐槽',
        before:info=>`<details class='comment'><summary>${info}</summary>`,
        after:'</details>',
      }
    ],

    //这是 VuePress 默认主题使用这个插件的方式
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示',
        },
      },
    ],
  ],
  
}
