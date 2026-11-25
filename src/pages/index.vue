<script setup>
definePageMeta({ alias: '/index.html' })
useSeoMeta({
  title: 'Home',
  description: 'Build strength, improve fitness, and find a training plan that fits your goals at Gym.',
  ogTitle: 'Home | Gym',
  ogDescription: 'Build strength, improve fitness, and find a training plan that fits your goals at Gym.',
})
</script>

<template>
  <main id="main-content">
<HomeHeroCarousel />

    <!-- catagory_area  -->
    <div class="catagory_area">
        <div class="container-fluid p-0">
            <div class="row no-gutters">
                <div class="col-lg-6 col-md-6">
                    <div class="single_catagory text-center overlay2 cat_bg_1" :style="{ backgroundImage: useAssetUrl('/img/catagory/1.png') }">
                        <h3>For Girl</h3>
                        <p>There are many variations of passages of lorem <br> Ipsum available, but the majority have suffered <br> alteration.</p>
                        <NuxtLink to="/contact" class="boxed-btn3">Join Now</NuxtLink>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="single_catagory text-center overlay2 cat_bg_2" :style="{ backgroundImage: useAssetUrl('/img/catagory/2.png') }">
                        <h3>For Boys</h3>
                        <p>There are many variations of passages of lorem <br> Ipsum available, but the majority have suffered <br> alteration.</p>
                        <NuxtLink to="/contact" class="boxed-btn3">Join Now</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/ catagory_area  -->

    <FeaturesSection />

    <div class="offer_area offer_bg" :style="{ backgroundImage: useAssetUrl('/img/banner/offer.png') }">
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-lg-6">
                    <div class="offer_text">
                        <h4>A Big Offer for <br> This Summer</h4>
                        <h3>50% Off</h3>
                        <p>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
                        <NuxtLink to="/contact" class="boxed-btn3">Join Now</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <PricingPlans show-title monthly />
        



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


