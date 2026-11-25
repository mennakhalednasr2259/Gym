<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
<footer class="footer">
        <div class="footer_top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-md-6 col-lg-3 ">
                        <div class="footer_widget">
                            <div class="footer_logo">
                                <NuxtLink to="/">
                                    <img :src="useAssetPath('/img/footer_logo.png')" alt="Gym" loading="lazy" decoding="async">
                                </NuxtLink>
                            </div>
                            <p>Questions about memberships or training? Contact us:<br>
                                <a href="tel:+201096710328">+201096710328</a> <br>
                                <a href="mailto:ahmrfalsolya@gmail.com">ahmrfalsolya@gmail.com</a>
                            </p>
                            <div class="socail_links">
                                <ul>
                                    <li>
                                        <span aria-hidden="true"><i class="ti-facebook"></i></span>
                                    </li>
                                    <li>
                                        <span aria-hidden="true"><i class="ti-twitter-alt"></i></span>
                                    </li>
                                    <li>
                                        <span aria-hidden="true"><i class="fa fa-instagram"></i></span>
                                    </li>
                                    <li>
                                        <span aria-hidden="true"><i class="fa fa-pinterest"></i></span>
                                    </li>
                                    <li>
                                        <span aria-hidden="true"><i class="fa fa-youtube-play"></i></span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 col-lg-4 offset-xl-1">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                                Useful Links
                            </h3>
                            <ul class="links"><li><NuxtLink to="/pricing">Pricing</NuxtLink></li><li><NuxtLink to="/about">About</NuxtLink></li><li><NuxtLink to="/gallery">Gallery</NuxtLink></li><li><NuxtLink to="/contact">Contact</NuxtLink></li></ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 col-lg-4">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                                Subscribe
                            </h3>
                            <NewsletterSignup />
                            <p class="newsletter_text">Esteem spirit temper too say adieus who direct esteem esteems luckily.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy-right_text">
            <div class="container">
                <div class="footer_border"></div>
                <div class="row">
                    <div class="col-xl-12">
                        <p class="copy_right text-center">

                            Copyright &copy; {{ currentYear }} </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
