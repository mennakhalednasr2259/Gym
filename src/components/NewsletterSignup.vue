<script setup>
import { ref } from 'vue'

defineProps({
  variant: {
    type: String,
    default: 'footer',
    validator: value => ['footer', 'sidebar'].includes(value),
  },
})

const email = ref('')
const status = ref('')

function submitNewsletter() {
  status.value = 'Newsletter sign-up is not connected yet. Your email has not been sent.'
}
</script>

<template>
  <form :class="variant === 'footer' ? 'newsletter_form' : ''" @submit.prevent="submitNewsletter">
    <div :class="variant === 'sidebar' ? 'form-group' : ''">
      <label class="sr-only" :for="`newsletter-${variant}`">Email address</label>
      <input
        :id="`newsletter-${variant}`"
        v-model.trim="email"
        :class="variant === 'sidebar' ? 'form-control' : ''"
        type="email"
        name="email"
        placeholder="Enter your email"
        autocomplete="email"
        maxlength="254"
        required
      >
    </div>
    <button v-if="variant === 'footer'" type="submit">Subscribe</button>
    <button v-else class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Subscribe</button>
    <p class="form-status" role="status" aria-live="polite">{{ status }}</p>
  </form>
</template>
