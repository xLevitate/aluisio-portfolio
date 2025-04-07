<template>
  <section id="past-servers" class="section">
    <div class="section-inner">
      <h2 class="section-title">Past Servers</h2>
      <div class="servers-grid">
        <div v-for="(server, index) in servers" :key="index" class="server-card">
          <!--<div class="server-image-container">
            <img :src="server.image" :alt="server.name" class="server-image">
            <div class="server-overlay"></div>
          </div>-->
          <div class="server-content">
            <h3 class="server-name">{{ server.name }}</h3>
            <div class="server-meta">
              <div class="server-role">{{ server.role }}</div>
              <div class="server-timeperiod">{{ server.period }}</div>
            </div>
            <p class="server-description">{{ server.description }}</p>
            <a v-if="server.link" :href="server.link" class="server-link" target="_blank" rel="noopener">
              Visit Server
              <span class="link-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const servers = [
  {
    name: "SinisterSMP",
    image: "/server1.jpg",
    role: "Owner, Manager & Developer",
    period: "Sep. 2024 - Present",
    description: "Managing all aspects of the server including development, staff management, and community building. Created custom plugins and configurations.",
    link: "#"
  },
  {
    name: "TriumphMC",
    image: "/server2.jpg",
    role: "Owner & Manager",
    period: "Sep. 2023 - Oct. 2023",
    description: "Owned and managed all server operations. Developed server infrastructure and oversaw community growth.",
    link: "#"
  },
  {
    name: "OPRealms",
    image: "/server3.jpg",
    role: "Manager & Developer",
    period: "Apr. 2023 - Oct. 2023",
    description: "Managed server operations and developed custom plugins. Created specialized configurations and optimized performance.",
    link: "#"
  },
  {
    name: "InfuseSMP",
    image: "/server1.jpg",
    role: "Developer",
    period: "Mar. 2023 - Jul. 2023",
    description: "Developed custom plugins and configurations to enhance gameplay. Optimized server performance and fixed technical issues.",
    link: "#"
  },
  {
    name: "TavernMC",
    image: "/server2.jpg",
    role: "Developer",
    period: "May. 2023 - Jun. 2023",
    description: "Created specialized plugins and configurations. Implemented custom features to improve player experience.",
    link: "#"
  }
];
</script>

<style scoped>
.servers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 2.5rem;
}

.server-card {
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

.server-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover), 0 0 15px rgba(138, 43, 226, 0.2);
  border-color: rgba(138, 43, 226, 0.15);
}

.server-image-container {
  height: 140px;
  overflow: hidden;
  position: relative;
}

.server-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.server-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, rgba(24, 24, 24, 0.8) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.server-card:hover .server-image {
  transform: scale(1.08);
}

.server-card:hover .server-overlay {
  opacity: 1;
}

.server-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  z-index: 1;
}

.server-name {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.server-name::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, var(--vp-c-brand-gradient-1), var(--vp-c-brand-gradient-2));
  transition: width 0.3s ease;
}

.server-card:hover .server-name::after {
  width: 60px;
}

.server-meta {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.server-role {
  font-weight: 500;
  color: var(--vp-c-brand);
  margin-bottom: 0.25rem;
}

.server-timeperiod {
  font-size: 0.9rem;
  color: var(--vp-c-text-alt);
}

.server-description {
  color: var(--vp-c-text-alt);
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  flex-grow: 1;
}

.server-link {
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

.server-link:hover {
  color: var(--vp-c-brand-light);
}

.server-link:hover .link-arrow {
  transform: translateX(4px);
}

@media (max-width: 900px) {
  .servers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .servers-grid {
    grid-template-columns: 1fr;
  }
}
</style>
