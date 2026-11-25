<script setup>
definePageMeta({ alias: '/gallery.html' })
useSeoMeta({
  title: 'Gallery',
  description: 'See Gym training, facilities, and community in the photo gallery.',
  ogTitle: 'Gallery | Gym',
  ogDescription: 'See Gym training, facilities, and community in the photo gallery.',
})
</script>

<template>
  <main id="main-content">
<PageHero title="gallery" background="3" />

    <GallerySection />

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
