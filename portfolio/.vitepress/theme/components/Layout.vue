<template>
  <div class="custom-layout">
    <Hero />
    <About />
    <Testimonials />
    <Projects />
    <PastServers />
    <Contact />
  </div>
</template>

<script setup>
import Hero from './Hero.vue'
import About from './About.vue'
import Testimonials from './Testimonials.vue'
import Projects from './Projects.vue'
import PastServers from './PastServers.vue'
import Contact from './Contact.vue'
</script>

<style>
.custom-layout {
  width: 100%;
  min-height: 100vh;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text);
}
</style>
