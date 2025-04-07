export default {
  title: "Aluisio Paredes | Levitate",
  description: "Professional Minecraft plugin developer and configurator",
  lang: "en-US",
  
  // Force dark mode
  appearance: "dark",
  
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#0f0f0f" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:title", content: "Aluisio Paredes | Levitate" }],
    ["meta", { name: "og:description", content: "Professional Minecraft plugin developer and configurator" }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
  ],
  
  // Site-wide configuration
  themeConfig: {
    // Disable default VitePress navigation
    nav: [],
    
    // Disable the sidebar
    sidebar: false,
    
    // Disable search
    search: {
      provider: 'none'
    },
    
    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xLevitate' },
    ]
  }
}
