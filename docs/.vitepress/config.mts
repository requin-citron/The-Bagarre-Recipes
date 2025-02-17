import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import githubAlertsPlugin from './plugins/githubAlertsPlugin';
import youtubeEmbedPlugin from './plugins/youtubeEmbedPlugin';
import lineNumberPlugin from './plugins/lineNumbers';
/*import { linkToCardPlugin } from '@luckrya/markdown-it-link-to-card';
import type { LinkToCardPluginOptions } from '@luckrya/markdown-it-link-to-card';*/




// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "The Bagarre Recipes",
    srcDir: 'src',
    description: "The Bagarre Recipes vise à etre un wiki de bagarre gratuit sur différent sujets en rapport avec la bagarre",
    cleanUrls: true,
    lastUpdated: true,
    sitemap: {
        hostname: 'https://bagarre.kleman.pw/'
    },
    head: [
        ['meta', { name: 'theme-color', content: '#1b1b1f' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' }],
        ['link', { rel: 'icon', href: '/images/favicon.ico' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/images/site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: '/images/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0' }],
        ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-211RDJSM3Y' }],
        ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-211RDJSM3Y');" ]
    ],
    transformHead: ({ pageData }) => {
        const pageTitle = pageData.title ? `${pageData.title} | The Bagarre Recipes` : 'The Bagarre Recipes';
        const pageDescription = pageData.description || 'Comprehensive cybersecurity guides and strategies for ethical hacking and penetration testing';
        return [
            ['title', {}, pageTitle],
            ['meta', { property: 'og:title', content: pageTitle }],
            ['meta', { property: 'og:description', content: pageDescription }],
            ['meta', { property: 'og:image', content: 'https://thehacker.recipes/images/social-preview.png' }],
            ['meta', { name: 'twitter:title', content: pageTitle }],
            ['meta', { name: 'twitter:image', content: 'https://thehacker.recipes/images/social-preview.png' }],
            ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
            ['meta', { name: 'twitter:description', content: pageDescription }]
        ];
    },
    themeConfig: {
        logo: {
            dark: '/images/logo.svg',
            light: '/images/logo.svg'
        },
        /*carbonAds: {
          code: 'SOMETHING',
          placement: 'idontknow'
        },*/
        search: {
            provider: 'local'
        },
        nav: [
            //{ text: 'Tools', link: 'https://tools.thehacker.recipes/' },
        ],
        outline: "deep",
        sidebar: [
            {
                "text": "Sol",
                "collapsed": false,
                "items": [
                    {
                        "text": "Butterfly",
                        "link": "/sol/butterfly/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "Renversement",
                                "link": "/sol/butterfly/renversement/index.md",
                            }
                        ]
                    },
                    {
                        "text": "Dos",
                        "collapsed": true,
                        "link": "/sol/dos/index.md",
                        "items": [
                            {
                                "text": "Soumission",
                                "link": "/sol/dos/soumission/index.md"
                            }
                        ]
                    },
                    {
                        "text": "Garde fermée",
                        "collapsed": true,
                        "link": "/sol/garde-ferme/index.md",
                        "items": [
                            {
                                "text": "Soumission",
                                "link": "/sol/garde-ferme/soumission/index.md"
                            }
                        ]
                    },
                    {
                        "text": "K guard",
                        "collapsed": true,
                        "link": "/sol/k-guard/index.md",
                        "items": [
                            {
                                "text": "Soumission",
                                "link": "/sol/k-guard/soumission/index.md"
                            }
                        ]
                    },
                    {
                        "text": "Knee slide",
                        "collapsed": true,
                        "link": "/sol/knee-slide/index.md",
                        "items": [
                            {
                                "text": "Défense",
                                "link": "/sol/knee-slide/defense/index.md"
                            }
                        ]
                    },
                    {
                        "text": "Monté",
                        "collapsed": true,
                        "link": "/sol/monte/index.md",
                        "items": [
                            {
                                "text": "Prise de dos",
                                "link": "/sol/monte/prise-de-dos/index.md"
                            },
                            {
                                "text": "Soumission",
                                "link": "/sol/monte/soumission/index.md"
                            }
                        ]
                    },
                    {
                        "text": "Passage de garde",
                        "collapsed": true,
                        "link": "/sol/passage-de-garde/index.md",
                        "items": [
                            {
                                "text": "Kimura trap",
                                "link": "/sol/passage-de-garde/kimura-trap.md"
                            },
                            {
                                "text": "Over under",
                                "link": "/sol/passage-de-garde/over-under.md"
                            }
                        ]
                    },
                    {
                        "text": "Reverse delariva",
                        "collapsed": true,
                        "link": "/sol/reverse-delariva/index.md",
                        "items": [
                            
                        ]
                    },
                    {
                        "text": "Side Control",
                        "collapsed": true,
                        "link": "/sol/side-control/index.md",
                        "items": [
                            {
                                "text": "Défense",
                                "collapsed": true,
                                "link": "/sol/side-control/defense/index.md",
                                "items": [
                                    {
                                        "text": "Arm bar",
                                        "link": "/sol/side-control/defense/arm-bar.md"
                                    },
                                    {
                                        "text": "Ghost escape",
                                        "link": "/sol/side-control/defense/ghost-escape.md"
                                    },
                                    {
                                        "text": "Kimura escape",
                                        "link": "/sol/side-control/defense/kimura-escape.md"
                                    },
                                    {
                                        "text": "Renversement",
                                        "link": "/sol/side-control/defense/renversement.md"
                                    }
                                ]
                            },
                            {
                                "text": "Rétention",
                                "collapsed": true,
                                "link": "/sol/side-control/retention/index.md",
                                "items": [
                                    {
                                        "text": "Genoux poitrine",
                                        "link": "/sol/side-control/retention/genoux-poitrine.md"
                                    }
                                ]
                            },
                            {
                                "text": "soumission",
                                "collapsed": true,
                                "link": "/sol/side-control/soumission/index.md",
                                "items": [
                                    {
                                        "text": "Americana",
                                        "link": "/sol/side-control/soumission/americana.md"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "Side nord sud",
                        "collapsed": true,
                        "link": "/sol/side-nord-sud/index.md",
                        "items": [
                            {
                                "text": "soumission",
                                "collapsed": true,
                                "link": "/sol/side-nord-sud/soumission/index.md",
                                "items": [
                                    {
                                        "text": "Tarikoplata",
                                        "link": "/sol/side-nord-sud/soumission/tarikoplata.md"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "Turtle",
                        "collapsed": true,
                        "link": "/sol/turtle/index.md",
                        "items": [
                            {
                                "text": "Prise de dos",
                                "collapsed": true,
                                "link": "/sol/turtle/prise-de-dos/index.md",
                                "items": [
                                    {
                                        "text": "Tirer sur soi",
                                        "link": "/sol/turtle/prise-de-dos/tirer-sur-soi.md"
                                    }
                                ]
                            },
                            {
                                "text": "soumission",
                                "collapsed": true,
                                "link": "/sol/turtle/soumission/index.md",
                                "items": [
                                    {
                                        "text": "D'arce",
                                        "link": "/sol/turtle/soumission/darce.md"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "text": "Lutte",
                "link": "/lutte/index.md",
                "collapsed": false,
                "items": [
                    {
                        "text": "Collar-tie",
                        "collapsed": true,
                        "link": "/lutte/collar-tie/index.md",
                        "items": [
                            {
                                "text": "Défense",
                                "collapsed": true,
                                "link": "/lutte/collar-tie/defense/index.md",
                                "items": [
                                    {
                                        "text": "Russian tie",
                                        "link": "/lutte/collar-tie/defense/russian-tie.md"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "Double legs",
                        "collapsed": true,
                        "link": "/lutte/double-legs/index.md",
                        "items": [
                            {
                                "text": "Défense",
                                "link": "/lutte/double-legs/defense.md"
                                
                            }
                        ]
                    },
                    {
                        "text": "Single leg",
                        "collapsed": true,
                        "link": "/lutte/single-leg/index.md",
                        "items": [
                            {
                                "text": "Défense",
                                "collapsed": true,
                                "link": "/lutte/single-leg/defense/index.md",
                                "items": [
                                    {
                                        "text": "3/4 nelson",
                                        "link": "/lutte/single-leg/defense/3-4-nelson.md"
                                    } 
                                ]
                            },
                            {
                                "text": "Takedown",
                                "collapsed": true,
                                "link": "/lutte/single-leg/takedown/index.md",
                                "items": [
                                    {
                                        "text": "Je ne sais pas comment ca s'appelle",
                                        "link": "/lutte/single-leg/takedown/je-ne-sais-pas-comment-ca-sappelle.md"
                                    } 
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "text": "Contributing to TBR",
                "collapsed": false,
                "items": [
                    {
                        "text": "Write 📝",
                        "link": "/contributing/write.md"
                    },
                    {
                        "text": "Donate ❤️",
                        "link": "/contributing/donate.md"
                    },
                    {
                        "text": "Buy ads 🌟",
                        "link": "/contributing/ads.md"
                    }
                ]
            },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/requin-citron/The-Bagarre-Recipes' },

        ],
        editLink: {
            text: "Contribute to this page",
            pattern: 'https://github.com/requin-citron/The-Bagarre-Recipes/edit/main/docs/src/:path'
        }
    },
    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin);
            md.use(githubAlertsPlugin);
            md.use(youtubeEmbedPlugin);
            md.use(lineNumberPlugin);
            /*md.use<LinkToCardPluginOptions>(linkToCardPlugin, {
                width: '100%',
            });*/
        }
    },
})
