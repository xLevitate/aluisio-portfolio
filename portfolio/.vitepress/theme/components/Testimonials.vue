<template>
  <section id="testimonials" class="section">
    <div class="section-inner">
      <h2 class="section-title">Client Testimonials</h2>
      <div class="testimonials-grid">
        <div v-for="(testimonial, index) in displayedTestimonials" :key="index" class="testimonial-card">
          <div class="testimonial-card-inner">
            <div class="quote-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11H6.21C6.48 9.84 7.79 9 9 9V7C7.52 7 6.22 7.54 5.29 8.47C4.16 9.6 3.56 11.19 3.5 13C3.44 14.72 4.13 16.39 5.46 17.5C6.69 18.53 8.23 19 9 19C10.1055 19 11.1748 18.5629 11.9624 17.7877C12.75 17.0126 13.1944 15.9542 13.1944 14.85C13.1944 13.7458 12.75 12.6874 11.9624 11.9123C11.1748 11.1371 10.1055 10.7 9 10.7" fill="currentColor" fillOpacity="0.4"/>
                <path d="M22 11H18.21C18.48 9.84 19.79 9 21 9V7C19.52 7 18.22 7.54 17.29 8.47C16.16 9.6 15.56 11.19 15.5 13C15.44 14.72 16.13 16.39 17.46 17.5C18.69 18.53 20.23 19 21 19C22.1055 19 23.1748 18.5629 23.9624 17.7877C24.75 17.0126 25.1944 15.9542 25.1944 14.85C25.1944 13.7458 24.75 12.6874 23.9624 11.9123C23.1748 11.1371 22.1055 10.7 21 10.7" fill="currentColor" fillOpacity="0.4"/>
              </svg>
            </div>
            <div class="testimonial-content">"{{ testimonial.content }}"</div>
            <div class="testimonial-author">
              - {{ testimonial.author }}
            </div>
            <a v-if="testimonial.link" :href="testimonial.link" class="testimonial-link" target="_blank" rel="noopener">
              View on Discord
              <span class="link-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
      <div v-if="hasMoreTestimonials" class="testimonials-load-more">
        <button @click="toggleShowMore" class="button button-secondary load-more-button">
          {{ showAllTestimonials ? 'Show Less' : 'View More Testimonials' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const testimonials = [
  {
    content: "Levitate was fantastic! He helped optimize my server, and overall it was wonderful. My server runs a lot better now, 10/10 would recommend :)",
    author: "Zekern",
    link: "https://discord.gg/devroom"
  },
  {
    content: "I'm pleased to work with this man, he did all my request 10/10 he deserved that $10 Tip I left him ❤️❤️",
    author: "orovoyager69",
    link: "https://discord.gg/devroom"
  },
  {
    content: "great setup dev. worked hard on my server and would do business with again 10/10",
    author: "acehighroller",
    link: "https://discord.gg/devroom"
  },
  {
    content: "Fixed all my problems, 100% recommended.",
    author: "lenny404",
    link: "https://discord.gg/devroom"
  },
  {
    content: "Even though I responded late, you still helped me accomplish what I wanted. Highly recommended.",
    author: "galen86",
    link: "https://discord.gg/devroom"
  },
  {
    content: "Very nice configurator, I would recommand him!",
    author: "foxtray",
    link: "https://discord.gg/devroom"
  },
  {
    content: "Pleasure to work with, set up my LuckPerms exactly how I wanted it to be, cheap, fast and awesome service! 10/10",
    author: "Lucas",
    link: "https://discord.gg/devroom"
  },
  {
    content: "Good work and fast. Rlly nice guy, he undestood everything.",
    author: "_raawll_",
    link: "https://discord.gg/devroom"
  },
  {
    content: "Perfect service, helped me out with incredible response times. He was kind and responded to all of my messages with a good attitude and looked foward to working together!",
    author: "xxmist_",
    link: "https://discord.gg/devroom"
  },
  {
    content: "pretty good although problem not solved but he help me with other hard to solve problems!! nice tech recommended",
    author: "gsmirror",
    link: "https://discord.gg/devroom"
  }
];

const initialTestimonialCount = 6;
const showAllTestimonials = ref(false);

const displayedTestimonials = computed(() => {
  return showAllTestimonials.value ? testimonials : testimonials.slice(0, initialTestimonialCount);
});

const hasMoreTestimonials = computed(() => {
  return testimonials.length > initialTestimonialCount;
});

function toggleShowMore() {
  showAllTestimonials.value = !showAllTestimonials.value;
}
</script>

<style scoped>
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 2.5rem;
}

.testimonial-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
}

.testimonial-card-inner {
  height: 100%;
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--card-shadow);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.testimonial-card-inner:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover), 0 0 15px rgba(138, 43, 226, 0.2);
  border-color: rgba(138, 43, 226, 0.15);
}

.quote-icon {
  color: var(--vp-c-brand);
  opacity: 0.4;
  margin-bottom: 1rem;
}

.testimonial-content {
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  position: relative;
}

.testimonial-author {
  font-weight: 600;
  color: var(--vp-c-text);
  margin-bottom: 0.5rem;
}

.testimonial-link {
  display: inline-flex;
  align-items: center;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: auto;
  transition: color 0.3s ease;
}

.link-arrow {
  margin-left: 6px;
  transition: transform 0.3s ease;
}

.testimonial-link:hover {
  color: var(--vp-c-brand-light);
}

.testimonial-link:hover .link-arrow {
  transform: translateX(4px);
}

.testimonials-load-more {
  margin-top: 2.5rem;
  text-align: center;
}

.load-more-button {
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

@media (max-width: 900px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
