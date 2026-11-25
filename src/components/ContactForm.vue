<script setup>
import { reactive, ref } from 'vue'

const fields = reactive({ name: '', email: '', subject: '', message: '' })
const status = ref('')

function submitContactForm() {
  status.value = 'Message delivery is not configured yet. Your information has not been sent.'
}
</script>

<template>
  <form class="form-contact contact_form" @submit.prevent="submitContactForm">
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <label class="sr-only" for="contact-message">Message</label>
          <textarea
            id="contact-message"
            v-model.trim="fields.message"
            class="form-control w-100"
            name="message"
            cols="30"
            rows="9"
            placeholder="Enter your message"
            minlength="10"
            maxlength="5000"
            required
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="sr-only" for="contact-name">Your name</label>
          <input id="contact-name" v-model.trim="fields.name" class="form-control" name="name" type="text" placeholder="Enter your name" autocomplete="name" minlength="2" maxlength="100" required>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="sr-only" for="contact-email">Email address</label>
          <input id="contact-email" v-model.trim="fields.email" class="form-control" name="email" type="email" placeholder="Email address" autocomplete="email" maxlength="254" required>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <label class="sr-only" for="contact-subject">Subject</label>
          <input id="contact-subject" v-model.trim="fields.subject" class="form-control" name="subject" type="text" placeholder="Subject" minlength="3" maxlength="150" required>
        </div>
      </div>
    </div>
    <div class="form-group mt-3">
      <button type="submit" class="button button-contactForm boxed-btn">Send</button>
      <p class="form-status" role="status" aria-live="polite">{{ status }}</p>
    </div>
  </form>
</template>
