<template>
    <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper card-main">

        <swiper-slide v-for="item in results.slice(0, 3)" :key="item.id">
            <div class="projects-m">
                <div class="project-body-m">
                    <div class="project-img-m">
                        <img :src="item.img1" alt="post images">
                    </div>
                    <div class="project-details-m blogs-m">
                        <div class="project-date-m blogs-m">{{item.date}}</div>
                        <router-link :to="'/post/' + item._id" class="project-name-m blogs-m">{{item.title}}</router-link> 
                        <!-- <div class="project-name-m blogs-m">Access Nerwork</div> -->
                        <div class="project-description-m blogs-m">{{item.description}}</div>

                        <div class="blog-orgin">
                            <img src="https://udoylab.com/img/rejwan.01eb99b8.jpg" alt="avater"
                                srcset="">
                            <div class="blog-owner">
                                <h5 class="owner-name">by Rejwan</h5>
                                <h6 class="blog-tags">Research paper</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </swiper-slide>



    </swiper>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

import "../assets/css/cards.css";

import { EffectCards } from "swiper";


export default {
    name: 'BlogsMain',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCards],
        };
    },
    data() {
        return {
            results: ''
        }
    },
    async mounted() {
        window.scrollTo(0, 0)
        let result = await axios.get("https://udoylabapi.redhalozenn.xyz/project");
        // console.warn(result.data)
        this.results = result.data;
        // console.log(this.results)
    },
}
</script>

<style>
.swiper.swiper-cards.swiper-3d.swiper-initialized.swiper-horizontal.swiper-watch-progress.mySwiper.card-main {
    margin: auto;
    padding: 2rem 0rem;
    padding-top: 0.5rem;
}
</style>