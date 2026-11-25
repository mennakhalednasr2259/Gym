<script setup>
definePageMeta({ alias: '/contact.html' })
useSeoMeta({
  title: 'Contact us',
  description: 'Contact Gym with questions about training, membership, and visiting the club.',
  ogTitle: 'Contact us | Gym',
  ogDescription: 'Contact Gym with questions about training, membership, and visiting the club.',
})
</script>

<template>
  <main id="main-content">
<PageHero title="contact" background="2" />

    <!-- ================ contact section start ================= -->
    <section class="contact-section">
        <div class="container">


            <div class="row">
                <div class="col-12">
                    <h2 class="contact-title">Get in Touch</h2>
                </div>
                <div class="col-lg-8">
                    <ContactForm />
                </div>
                <div class="col-lg-3 offset-lg-1">
                    <div class="media contact-info">
                        <span class="contact-info__icon"><i class="ti-tablet" aria-hidden="true"></i></span>
                        <div class="media-body">
                            <h3><a href="tel:+201096710328">+201096710328</a></h3>
                            <p>Mon to Fri 9am to 6pm</p>
                        </div>
                    </div>
                    <div class="media contact-info">
                        <span class="contact-info__icon"><i class="ti-email" aria-hidden="true"></i></span>
                        <div class="media-body">
                            <h3><a href="mailto:ahmrfalsolya@gmail.com">ahmrfalsolya@gmail.com</a></h3>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ================ contact section end ================= -->

    <!-- JS here -->
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    <!--contact js-->
  </main>
</template>
