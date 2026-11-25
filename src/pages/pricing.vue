<script setup>
definePageMeta({ alias: '/pricing.html' })
useSeoMeta({
  title: 'Membership plans',
  description: 'Explore Gym membership plans and choose the option that works for you.',
  ogTitle: 'Membership plans | Gym',
  ogDescription: 'Explore Gym membership plans and choose the option that works for you.',
})
</script>

<template>
  <main id="main-content">
<PageHero title="Pricing" background="2" description="There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." />

    <PricingPlans :show-title="false" :monthly="false" />
        

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

    <FeaturesSection />
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

