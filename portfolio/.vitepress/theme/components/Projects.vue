<template>
  <section id="projects" class="section">
    <div class="section-inner">
      <h2 class="section-title">Past Projects</h2>
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <div class="project-image-container">
            <img :src="project.image" :alt="project.title" class="project-image">
            <div class="project-overlay"></div>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <a :href="project.link" class="project-link" target="_blank" rel="noopener">
              {{ project.linkText || 'Learn More' }}
              <span class="link-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "EssentialsX Messages Config",
    image: "/project1.jpg",
    description: "A clean messages configuration for EssentialsX.",
    link: "https://builtbybit.com/resources/essentialsx-premium-config.30026/",
    linkText: "View on BuiltByBit"
  },
  {
    title: "LuckPerms Config",
    image: "/project2.jpg",
    description: "A permissions setup with multiple ranks, and prefixes.",
    link: "https://beta-website.com",
    linkText: "View Details"
  },
  {
    title: "Velocity Proxy Setup",
    image: "/project3.jpg",
    description: "A proxy setup with an MOTD, Anti-Bot, etc.",
    link: "https://builtbybit.com/resources/velocity-proxy-premium-setup.37429/",
    linkText: "View on BuiltByBit"
  },
  {
    title: "TAB Configuration",
    image: "/project1.jpg",
    description: "A clean tablist and scoreboard config.",
    link: "https://builtbybit.com/resources/tablist-scoreboard-premium-config.36616/",
    linkText: "View on BuiltByBit"
  },
  {
    title: "Lobby Setup",
    image: "/project2.jpg",
    description: "A simple and reliable lobby setup.",
    link: "https://builtbybit.com/resources/levitates-lobby-hub-premium-setup.39786/",
    linkText: "View on BuiltByBit"
  },
  {
    title: "PlayerGradients",
    image: "/project3.jpg",
    description: "A plugin that allows players to customize their name.",
    link: "https://builtbybit.com/resources/playergradients-premium-plugin.34503/",
    linkText: "View on BuiltByBit"
  },
  {
    title: "SeedBombs",
    image: "/project1.jpg",
    description: "A plugin that allows players to plant custom seeds.",
    link: "https://builtbybit.com/resources/seedbombs-premium-plugin.33416/",
    linkText: "View on BuiltByBit"
  },
  {
    title: "ShopGUIPlus Config",
    image: "/project2.jpg",
    description: "A minimalistic shop configuration for ShopGUIPlus.",
    link: "https://builtbybit.com/resources/shopguiplus-premium-config.37157/",
    linkText: "View on BuiltByBit"
  },
  {
    title: "Voting Menu",
    image: "/project3.jpg",
    description: "A clean voting menu config for DeluxeMenus.",
    link: "https://builtbybit.com/resources/vote-menu-premium-config.31754/",
    linkText: "View on BuiltByBit"
  }
];
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 2.5rem;
}

.project-card {
  background-color: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover), 0 0 15px rgba(138, 43, 226, 0.2);
  border-color: rgba(138, 43, 226, 0.15);
}

.project-image-container {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, rgba(24, 24, 24, 0.8) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .project-image {
  transform: scale(1.08);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  z-index: 1;
}

.project-title {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.project-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, var(--vp-c-brand-gradient-1), var(--vp-c-brand-gradient-2));
  transition: width 0.3s ease;
}

.project-card:hover .project-title::after {
  width: 60px;
}

.project-description {
  color: var(--vp-c-text-alt);
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  flex-grow: 1;
}

.project-link {
  display: inline-flex;
  align-items: center;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  margin-top: auto;
  transition: color 0.3s ease;
}

.link-arrow {
  margin-left: 6px;
  transition: transform 0.3s ease;
}

.project-link:hover {
  color: var(--vp-c-brand-light);
}

.project-link:hover .link-arrow {
  transform: translateX(4px);
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
