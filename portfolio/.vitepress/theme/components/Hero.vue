<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <div class="profile-container">
        <img src="/profile.jpg" alt="Aluisio Paredes" class="profile-image">
      </div>
      <h1 class="hero-title">Aluisio Paredes</h1>
      <h3 class="hero-subtitle">Known as <span class="highlight">Levitate</span></h3>
      <p class="hero-description">Professional Minecraft Plugin Developer & Configurator</p>
      <div class="hero-buttons">
        <a href="#projects" class="button button-primary">View Projects</a>
        <a href="#contact" class="button button-secondary">Contact Me</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  position: relative;
  background-color: var(--vp-c-bg);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(138, 43, 226, 0.07) 0%, rgba(0, 0, 0, 0) 70%);
  z-index: 0;
}

/* Add subtle radial gradient behind profile */
.profile-container {
  position: relative;
  margin-bottom: 1.5rem;
}

.profile-container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(138, 43, 226, 0.15), transparent 70%);
  transform: translate(-50%, -50%);
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  z-index: 1;
  position: relative;
}

.profile-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid transparent;
  background: linear-gradient(var(--vp-c-bg), var(--vp-c-bg)) padding-box,
              linear-gradient(135deg, var(--vp-c-brand-gradient-1), var(--vp-c-brand-gradient-2)) border-box;
  margin: 0 auto 1.5rem auto;
  object-fit: cover;
  display: block; /* This ensures it's treated as a block element */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.hero-title {
  font-size: 3rem;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
  background: linear-gradient(135deg, #fff 30%, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.8rem;
  margin: 0 0 1.5rem 0;
  font-weight: 500;
}

.highlight {
  background: linear-gradient(135deg, var(--vp-c-brand-gradient-1), var(--vp-c-brand-gradient-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  margin: 1.5rem 0;
  color: var(--vp-c-text-alt);
}

.hero-buttons {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 16px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .profile-image {
    width: 150px;
    height: 150px;
  }
  
  .profile-container::before {
    width: 180px;
    height: 180px;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
}
</style>
