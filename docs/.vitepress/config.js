export default {
  title: "Levitate's Plugins",
  description: 'Documentation for my Minecraft plugins',
  
  themeConfig: {
    // Site logo and title
    siteTitle: "Levitate's Plugins",
    
    // Top navigation bar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Plugins', link: '/plugins/' },
      { text: 'GitHub', link: 'https://github.com/xLevitate' }
    ],
    
    // Sidebar configuration with separate sections for each plugin
    sidebar: {
      '/plugins/': [
        {
          text: 'Plugins',
          items: [
            { text: 'Overview', link: '/plugins/' }
          ]
        },
        {
          text: 'CrestReferrals',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/plugins/crestreferrals/' },
            { text: 'Installation', link: '/plugins/crestreferrals/installation' },
            { text: 'Commands', link: '/plugins/crestreferrals/commands' },
            { text: 'Configuration', link: '/plugins/crestreferrals/configuration' },
            { text: 'API', link: '/plugins/crestreferrals/api' },
          ]
        },
        {
          text: 'CrestPvPToggle',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/plugins/crestpvptoggle/' },
            { text: 'Installation', link: '/plugins/crestpvptoggle/installation' },
            { text: 'Commands', link: '/plugins/crestpvptoggle/commands' },
            { text: 'Configuration', link: '/plugins/crestpvptoggle/configuration' },
            { text: 'API', link: '/plugins/crestpvptoggle/api' },
          ]
        }
      ]
    },
    
    // Footer
    footer: {
      copyright: 'Copyright © 2025 Levitate'
    },
    
    // Enable search
    search: {
      provider: 'local'
    }
  }
}
