<template>
  <section id="about" class="section">
    <div class="section-inner">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <p class="about-text">
          I'm a skilled Minecraft plugin developer with extensive experience in creating custom solutions for servers of all sizes. 
          I specialize in developing high-performance, lightweight plugins that enhance gameplay and administration capabilities.
          With a focus on clean code and efficient design, I deliver professional-grade plugins that stand the test of time.
        </p>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 14H4V8H20M20 19H4V17H20M20 5H4V3H20M2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2C0.89543 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 class="service-title">Plugin Development</h3>
            <p class="service-description">Custom plugins tailored to your server's specific needs, built with performance and reliability in mind.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.5C11.0717 15.5 10.1815 15.1313 9.52513 14.4749C8.86875 13.8185 8.5 12.9283 8.5 12C8.5 11.0717 8.86875 10.1815 9.52513 9.52513C10.1815 8.86875 11.0717 8.5 12 8.5C12.9283 8.5 13.8185 8.86875 14.4749 9.52513C15.1313 10.1815 15.5 11.0717 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1313 12.9283 15.5 12 15.5ZM19.43 12.97C19.47 12.65 19.5 12.33 19.5 12C19.5 11.67 19.47 11.34 19.43 11L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.66 15.5 5.32 14.87 5.07L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.5 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11C4.53 11.34 4.5 11.67 4.5 12C4.5 12.33 4.53 12.65 4.57 12.97L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.5 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.5 18.67 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 class="service-title">Plugin Configuration</h3>
            <p class="service-description">Expert configuration services to optimize your existing plugins and make them work seamlessly together.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 class="service-title">Technical Support</h3>
            <p class="service-description">Ongoing support and maintenance to ensure your server runs smoothly and efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  margin-top: 2rem;
}

.about-text {
  max-width: 800px;
  margin: 0 auto 2.5rem auto;
  font-size: 1.1rem;
  text-align: center;
  color: var(--vp-c-text);
  line-height: 1.8;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.service-card {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--vp-c-brand-gradient-1), var(--vp-c-brand-gradient-2));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover), 0 0 15px rgba(138, 43, 226, 0.2);
  border-color: rgba(138, 43, 226, 0.15);
  background-color: var(--card-bg-lighter);
}

.service-card:hover::before {
  opacity: 1;
}

.service-icon {
  color: var(--vp-c-brand);
  margin-bottom: 1.2rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(138, 43, 226, 0.1);
  border-radius: 8px;
}

.service-title {
  color: var(--vp-c-brand);
  font-size: 1.4rem;
  margin: 0 0 1rem 0;
  position: relative;
}

.service-description {
  color: var(--vp-c-text-alt);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 900px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .about-text {
    text-align: left;
  }
}
</style>
