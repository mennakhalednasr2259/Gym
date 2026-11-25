<script setup>
const trainers = [
  { name: 'Jessica Mino', role: 'Woman Trainer', image: '/img/team/1.png' },
  { name: 'Amit Khan', role: 'Men Trainer', image: '/img/team/2.png' },
  { name: 'Paulo Rolac', role: 'Men Trainer', image: '/img/team/3.png' },
]
</script>

<template>
  <section class="team_area team_bg_1 overlay2" :style="{ backgroundImage: useAssetUrl('/img/banner/trainer_bg.png') }" aria-labelledby="trainers-title">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section_title text-center mb-73">
            <h3 id="trainers-title">Our Trainers</h3>
            <p>There are many variations of passages of lorem Ipsum available, but the majority <br> have suffered alteration.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="trainer in trainers" :key="trainer.name" class="col-lg-4 col-md-6">
          <article class="single_team">
            <div class="team_thumb">
              <img :src="useAssetPath(trainer.image)" :alt="`${trainer.name}, ${trainer.role}`" loading="lazy" decoding="async">
              <div class="team_hover">
                <div class="hover_inner text-center">
                  <ul aria-label="Social profiles">
                    <li><span aria-hidden="true"><i class="fa fa-facebook" /></span></li>
                    <li><span aria-hidden="true"><i class="fa fa-twitter" /></span></li>
                    <li><span aria-hidden="true"><i class="fa fa-instagram" /></span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="team_title text-center">
              <h3>{{ trainer.name }}</h3>
              <p>{{ trainer.role }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
