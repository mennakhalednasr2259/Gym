<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const slides = [
  { title: 'Body Shape', background: 'slider_bg_1', image: '/img/banner/banner.png' },
  { title: 'Strength', background: 'slider_bg_2', image: '/img/banner/banner2.png' },
  { title: 'Body Shape', background: 'slider_bg_1' },
  { title: 'Strength', background: 'slider_bg_2' },
]
const activeSlide = ref(0)
const isPaused = ref(false)
const isHovered = ref(false)
const focusWithin = ref(false)
const prefersReducedMotion = ref(false)
let timer
let motionPreference

function goTo(index) {
  activeSlide.value = (index + slides.length) % slides.length
}

function updateTimer() {
  window.clearInterval(timer)
  if (!isPaused.value && !isHovered.value && !focusWithin.value && !prefersReducedMotion.value) {
    timer = window.setInterval(() => goTo(activeSlide.value + 1), 5000)
  }
}

function toggleAutoplay() {
  isPaused.value = !isPaused.value
  updateTimer()
}

function onFocusOut(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    focusWithin.value = false
    updateTimer()
  }
}

function onMotionPreferenceChange(event) {
  prefersReducedMotion.value = event.matches
  updateTimer()
}

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  prefersReducedMotion.value = motionPreference.matches
  motionPreference.addEventListener('change', onMotionPreferenceChange)
  updateTimer()
})

onBeforeUnmount(() => {
  window.clearInterval(timer)
  motionPreference?.removeEventListener('change', onMotionPreferenceChange)
})
</script>

<template>
  <section
    class="slider_area"
    aria-label="Gym highlights"
    aria-roledescription="carousel"
    @mouseenter="isHovered = true; updateTimer()"
    @mouseleave="isHovered = false; updateTimer()"
    @focusin="focusWithin = true; updateTimer()"
    @focusout="onFocusOut"
  >
    <div class="single_slider d-flex align-items-center overlay" :class="slides[activeSlide].background" :style="{ backgroundImage: useAssetUrl(slides[activeSlide].image) }" :aria-live="isPaused || isHovered || focusWithin ? 'polite' : 'off'">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-xl-12">
            <div class="slider_text text-center">
              <span>Build Up Your</span>
              <h3>{{ slides[activeSlide].title }}</h3>
              <p>Build Your Body and Fitness with Professional Touch</p>
              <NuxtLink to="/contact" class="boxed-btn3">Join Us</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-carousel-controls">
        <button type="button" aria-label="Previous slide" @click="goTo(activeSlide - 1)">‹</button>
        <button
          v-for="(_, index) in slides"
          :key="index"
          type="button"
          :aria-label="`Show slide ${index + 1}`"
          :aria-current="activeSlide === index ? 'true' : undefined"
          @click="goTo(index)"
        >{{ index + 1 }}</button>
        <button type="button" aria-label="Next slide" @click="goTo(activeSlide + 1)">›</button>
        <button type="button" :aria-label="isPaused ? 'Play slides' : 'Pause slides'" @click="toggleAutoplay">{{ isPaused ? '▶' : 'Ⅱ' }}</button>
      </div>
    </div>
  </section>
</template>
