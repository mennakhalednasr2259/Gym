<script setup>
definePageMeta({ alias: '/about.html' })
useSeoMeta({
  title: 'About us',
  description: 'Learn about Gym, our training approach, and the team supporting your fitness goals.',
  ogTitle: 'About us | Gym',
  ogDescription: 'Learn about Gym, our training approach, and the team supporting your fitness goals.',
})
</script>

<template>
  <main id="main-content">
<PageHero title="About Us" background="1" description="There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." />


    <FeaturesSection />

    <GallerySection show-more />
    <TrainerSection />

    <!-- big_offer_area start  -->
    <div class="big_offer_area" :style="{ backgroundImage: useAssetUrl('/img/banner/big_offer.png') }">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="offter_text text-center">
                        <h3>A Big Offer for <br> This Summer</h3>
                        <NuxtLink to="/contact" class="boxed-btn3">Join Now</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- big_offer_area end  -->

    <!-- JS here -->
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



    <!--contact js-->
  </main>
</template>
