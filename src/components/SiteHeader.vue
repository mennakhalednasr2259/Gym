<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from '#imports'

const route = useRoute()
const menuOpen = ref(false)
const isSticky = ref(false)
const updateSticky = () => { isSticky.value = window.scrollY > 100 }
watch(() => route.fullPath, () => { menuOpen.value = false })
onMounted(() => { updateSticky(); window.addEventListener('scroll', updateSticky, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', updateSticky))
</script>

<template>
  <header>
    <div class="header-area">
      <div id="sticky-header" class="main-header-area" :class="{ sticky: isSticky }">
        <div class="container-fluid">
          <div class="header_bottom_border">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-1 col-7">
                <div class="logo"><NuxtLink to="/" aria-label="Gym home"><img :src="useAssetPath('/img/logo.png')" alt="Gym home"></NuxtLink></div>
              </div>
              <div class="col-xl-7 col-lg-8">
                <div class="main-menu d-none d-lg-block">
                  <nav aria-label="Main navigation"><ul id="navigation">
                    <li><NuxtLink to="/">home</NuxtLink></li><li><NuxtLink to="/about">about</NuxtLink></li><li><NuxtLink to="/pricing">pricing</NuxtLink></li><li><NuxtLink to="/gallery">gallery</NuxtLink></li>
                    <li><NuxtLink to="/blog">blog <i class="ti-angle-down" aria-hidden="true"></i></NuxtLink><ul class="submenu"><li><NuxtLink to="/blog">blog</NuxtLink></li><li><NuxtLink to="/single-blog">single-blog</NuxtLink></li></ul></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                  </ul></nav>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 d-none d-lg-block"><div class="Appointment"><div class="book_btn"><NuxtLink to="/contact">Join Us</NuxtLink></div></div></div>
              <div class="col-5 d-lg-none mobile-menu-control"><button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="mobile-navigation" @click="menuOpen = !menuOpen"><span aria-hidden="true">☰</span><span>{{ menuOpen ? 'Close menu' : 'Open menu' }}</span></button></div>
              <div v-if="menuOpen" id="mobile-navigation" class="mobile-navigation col-12 d-lg-none"><nav aria-label="Mobile navigation"><NuxtLink to="/">home</NuxtLink><NuxtLink to="/about">about</NuxtLink><NuxtLink to="/pricing">pricing</NuxtLink><NuxtLink to="/gallery">gallery</NuxtLink><NuxtLink to="/blog">blog</NuxtLink><NuxtLink to="/single-blog">single-blog</NuxtLink><NuxtLink to="/contact">Contact</NuxtLink><NuxtLink to="/contact">Join Us</NuxtLink></nav></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
