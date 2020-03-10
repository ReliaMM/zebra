const path = require("path");

module.exports = {
    title: '大斑马的小屋',
    description: '大斑马的小屋',
    dest: 'dist',
    themeConfig: {
        docsDir: "docs",
        logo: '/assets/img/zebra-3.png',
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '分享小屋',
                items: [
                    { text: 'Vue', link: '/share/vue/Vuex 原理' },
                    { text: 'JS', link: '/share/js/五个 JavaScript 小技巧' },
                    { text: '浏览器', link: '/share/browser/浏览器缓存之强缓存与协商缓存' },
                    { text: '安全', link: '/share/security/最基础的 Web 安全问题' },
                    { text: '前端监控', link: '/share/monitor/基于 CentOS 7 搭建异常监控 Sentry' },
                ],
            }
        ],

        sidebar: {
            '/share/vue/': [{
                title: 'Vue',
                collapsable: true,
                children: [
                    'Vuex 原理',
                    'vue-router 原理'
                ]
            }],
            '/share/js/': [{
                title: 'JS',
                collapsable: true,
                children: [
                    '五个 JavaScript 小技巧',
                    '幸福小技巧',
                    'JS条件语句',
                    'JS引擎的执行机制 Event Loop',
                ]
            }],
            '/share/browser/': [{
                title: '浏览器',
                collapsable: true,
                children: [
                    '浏览器缓存之强缓存与协商缓存',
                ]
            }],
            '/share/security/': [{
                title: '安全',
                collapsable: true,
                children: [
                    '最基础的 Web 安全问题',
                ]
            }],
            '/share/monitor/': [{
                title: '前端监控',
                collapsable: true,
                children: [
                    '基于 CentOS 7 搭建异常监控 Sentry',
                ]
            }]
        },
        configureWebpack: {
            resolve: {
                alias: {
                    '@': path.join(__dirname, 'public', 'assets')
                }
            }
        },
        head: [
            [
                "link",
                {
                    rel: "icon",
                    href: `/assets/img/zebra-3.png`
                }
            ],
        ]
    }
}