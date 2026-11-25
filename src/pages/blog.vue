<script setup>
import { computed } from 'vue'

definePageMeta({ alias: '/blog.html' })
useSeoMeta({
  title: 'Fitness blog',
  description: 'Read practical fitness, training, and wellness articles from Gym.',
  ogTitle: 'Fitness blog | Gym',
  ogDescription: 'Read practical fitness, training, and wellness articles from Gym.',
})

const route = useRoute()
const posts = Array.from({ length: 5 }, (_, index) => ({
  image: `/img/blog/single_blog_${index + 1}.png`,
  title: 'Google inks pact for new 35-storey office',
  excerpt: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
  category: 'Travel, Lifestyle',
}))
const visiblePosts = computed(() => {
  const query = typeof route.query.q === 'string' ? route.query.q.trim().toLowerCase() : ''
  return posts.filter(post => `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query))
})
</script>

<template>
  <main id="main-content">
<PageHero title="blog" background="2" />


    <!--================Blog Area =================-->
    <section class="blog_area section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mb-5 mb-lg-0">
                    <div class="blog_left_sidebar">                        <article v-for="post in visiblePosts" :key="post.image" class="blog_item">
                            <div class="blog_item_img">
                                <img class="card-img rounded-0" :src="useAssetPath(post.image)" :alt="post.title" loading="lazy" decoding="async">
                                <div class="blog_item_date" role="group" aria-label="Article date">
                                    <h3>15</h3>
                                    <p>Jan</p>
                                </div>
                            </div>
                            <div class="blog_details">
                                <NuxtLink class="d-inline-block" to="/single-blog"><h2>{{ post.title }}</h2></NuxtLink>
                                <p>{{ post.excerpt }}</p>
                                <ul class="blog-info-link">
                                    <li><span><i class="fa fa-user" aria-hidden="true"></i> {{ post.category }}</span></li>
                                    <li><NuxtLink to="/single-blog#comments"><i class="fa fa-comments" aria-hidden="true"></i> 03 Comments</NuxtLink></li>
                                </ul>
                            </div>
                        </article>

                        <p v-if="!visiblePosts.length" role="status">No articles match your search.</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog_right_sidebar">
                        <aside class="single_sidebar_widget search_widget">
                            <BlogSearch />
                        </aside>

                        <aside class="single_sidebar_widget post_category_widget">
                            <h4 class="widget_title">Category</h4>
                            <ul class="list cat-list">
                                <li>
                                    <NuxtLink to="/single-blog" class="d-flex">
                                        <p>Resaurant food</p>
                                        <p>(37)</p>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/single-blog" class="d-flex">
                                        <p>Travel news</p>
                                        <p>(10)</p>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/single-blog" class="d-flex">
                                        <p>Modern technology</p>
                                        <p>(03)</p>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/single-blog" class="d-flex">
                                        <p>Product</p>
                                        <p>(11)</p>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/single-blog" class="d-flex">
                                        <p>Inspiration</p>
                                        <p>21</p>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/single-blog" class="d-flex">
                                        <p>Health Care (21)</p>
                                        <p>09</p>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </aside>

                        <aside class="single_sidebar_widget popular_post_widget">
                            <h3 class="widget_title">Recent Post</h3>
                            <div class="media post_item">
                                <img :src="useAssetPath('/img/post/post_1.png')" alt="post" loading="lazy" decoding="async">
                                <div class="media-body">
                                    <NuxtLink  to="/single-blog">
                                        <h3>From life was you fish...</h3>
                                    </NuxtLink>
                                    <p>January 12, 2019</p>
                                </div>
                            </div>
                            <div class="media post_item">
                                <img :src="useAssetPath('/img/post/post_2.png')" alt="post" loading="lazy" decoding="async">
                                <div class="media-body">
                                    <NuxtLink  to="/single-blog">
                                        <h3>The Amazing Hubble</h3>
                                    </NuxtLink>
                                    <p>02 Hours ago</p>
                                </div>
                            </div>
                            <div class="media post_item">
                                <img :src="useAssetPath('/img/post/post_3.png')" alt="post" loading="lazy" decoding="async">
                                <div class="media-body">
                                    <NuxtLink  to="/single-blog">
                                        <h3>Astronomy Or Astrology</h3>
                                    </NuxtLink>
                                    <p>03 Hours ago</p>
                                </div>
                            </div>
                            <div class="media post_item">
                                <img :src="useAssetPath('/img/post/post_4.png')" alt="post" loading="lazy" decoding="async">
                                <div class="media-body">
                                    <NuxtLink  to="/single-blog">
                                        <h3>Asteroids telescope</h3>
                                    </NuxtLink>
                                    <p>01 Hours ago</p>
                                </div>
                            </div>
                        </aside>
                        <aside class="single_sidebar_widget tag_cloud_widget">
                            <h4 class="widget_title">Tag Clouds</h4>
                            <ul class="list">
                                <li>
                                    <span>project</span>
                                </li>
                                <li>
                                    <span>love</span>
                                </li>
                                <li>
                                    <span>technology</span>
                                </li>
                                <li>
                                    <span>travel</span>
                                </li>
                                <li>
                                    <span>restaurant</span>
                                </li>
                                <li>
                                    <span>life style</span>
                                </li>
                                <li>
                                    <span>design</span>
                                </li>
                                <li>
                                    <span>illustration</span>
                                </li>
                            </ul>
                        </aside>


                        <aside class="single_sidebar_widget instagram_feeds">
                            <h4 class="widget_title">Gallery Highlights</h4>
                            <ul class="instagram_row flex-wrap">
                                <li>
                                    <NuxtLink to="/gallery">
                                        <img class="img-fluid" :src="useAssetPath('/img/post/post_5.png')" alt="Open the photo gallery" loading="lazy" decoding="async">
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/gallery">
                                        <img class="img-fluid" :src="useAssetPath('/img/post/post_6.png')" alt="Open the photo gallery" loading="lazy" decoding="async">
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/gallery">
                                        <img class="img-fluid" :src="useAssetPath('/img/post/post_7.png')" alt="Open the photo gallery" loading="lazy" decoding="async">
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/gallery">
                                        <img class="img-fluid" :src="useAssetPath('/img/post/post_8.png')" alt="Open the photo gallery" loading="lazy" decoding="async">
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/gallery">
                                        <img class="img-fluid" :src="useAssetPath('/img/post/post_9.png')" alt="Open the photo gallery" loading="lazy" decoding="async">
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/gallery">
                                        <img class="img-fluid" :src="useAssetPath('/img/post/post_10.png')" alt="Open the photo gallery" loading="lazy" decoding="async">
                                    </NuxtLink>
                                </li>
                            </ul>
                        </aside>


                        <aside class="single_sidebar_widget newsletter_widget">
                            <h4 class="widget_title">Newsletter</h4>

                            <NewsletterSignup variant="sidebar" />
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================Blog Area =================-->


    <!-- JS here -->
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    <!--contact js-->
  </main>
</template>

