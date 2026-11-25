<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  background: {
    type: [String, Number],
    default: '1',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="bradcam_area">
    <div class="single_bradcam d-flex align-items-center overlay" :class="`bradcam_bg_${background}`" :style="{ backgroundImage: useAssetUrl('/img/banner/bradcam_' + background + '.png') }">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-xl-9">
            <div class="bradcam_text text-center">
              <h3>{{ title }}</h3>
              <p v-if="description">{{ description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
