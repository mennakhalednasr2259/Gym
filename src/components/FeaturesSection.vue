<script setup>
const features = [
  { icon: '/img/svg_icon/1.svg', title: 'Weightlifting' },
  { icon: '/img/svg_icon/2.svg', title: 'Specific Muscles' },
  { icon: '/img/svg_icon/3.svg', title: 'Flex Your Muscles' },
  { icon: '/img/svg_icon/4.svg', title: 'Cardio Exercises' },
]
</script>

<template>
  <section class="features_area" aria-labelledby="features-title">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section_title text-center mb-73">
            <h3 id="features-title">Our Features</h3>
            <p>There are many variations of passages of lorem Ipsum available, but the majority <br> have suffered alteration.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(feature, index) in features" :key="feature.title" class="col-lg-3 col-md-6">
          <div class="single_feature text-center" :class="{ 'mb-73': index === 0 }">
            <div class="icon">
              <img :src="useAssetPath(feature.icon)" alt="" loading="lazy" decoding="async">
            </div>
            <h4>{{ feature.title }}</h4>
            <p>There are many variations of passages of lorem Ipsum available.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
