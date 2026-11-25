<script setup>
import { ref, watch } from 'vue'

const route = useRoute()
const query = ref(typeof route.query.q === 'string' ? route.query.q : '')

watch(() => route.query.q, (value) => {
  query.value = typeof value === 'string' ? value : ''
})

function search() {
  const value = query.value.trim()
  return navigateTo({ path: '/blog', query: value ? { q: value } : {} })
}
</script>

<template>
  <form role="search" @submit.prevent="search">
    <div class="form-group">
      <div class="input-group mb-3">
        <label class="sr-only" for="blog-search">Search articles</label>
        <input
          id="blog-search"
          v-model="query"
          class="form-control"
          type="search"
          name="q"
          placeholder="Search Keyword"
        >
        <div class="input-group-append">
          <button class="btn" type="submit" aria-label="Search articles">
            <i class="ti-search" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
    <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Search</button>
  </form>
</template>
