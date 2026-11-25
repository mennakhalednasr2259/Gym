<script setup>
defineProps({
  showTitle: { type: Boolean, default: true },
  monthly: { type: Boolean, default: true },
})

const plans = [
  { name: 'Beginner' },
  { name: 'Expert' },
  { name: 'Pro' },
]
</script>

<template>
  <section class="priscing_area">
    <div class="container">
      <div v-if="showTitle" class="row">
        <div class="col-xl-12">
          <div class="section_title text-center mb-73">
            <h3>Our Pricing</h3>
            <p>There are many variations of passages of lorem Ipsum available, but the majority <br> have suffered alteration.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="plan in plans" :key="plan.name" class="col-lg-4 col-md-6">
          <div class="single_prising text-center">
            <div class="prising_header">
              <h3>{{ plan.name }}</h3>
              <span>{{ monthly ? '$45/m' : '$45' }}</span>
            </div>
            <div class="pricing_body">
              <ul>
                <li>24h unlimited access</li>
                <li>Trainer Advice</li>
                <li class="off-color">Locker + Bathroom</li>
                <li class="off-color">Personal trainer</li>
              </ul>
            </div>
            <div class="pricing_btn">
              <NuxtLink to="/contact" class="boxed-btn3">Join Now</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
