<template>


    <!-- hero section part here -->
    <section class="hero-m">
        <div class="hero-main-m">
            <div class="hero-main-m-left">
                <div class="avater-m">
                    <img src="../assets/images/avater.svg" alt=" hero main avater" srcset="">
                </div>
            </div>
            <div class="hero-main-m-right">
                <h1>Hi ! There I am rejwan, want to see something mind-blowing.</h1>
                <p>It’s my portfolio. Here I share about my programming journey. I post what l learn, problem-solving &
                    code documentation. </p>
                <!-- email part stert here -->
                <div class="hero-email-m">
                    <a href="mailto:rejwanahamed85@gmail.com" class="hero-email-m-part">rejwanahamed85@gmail.com <span
                            class="e-icon"> <i class="fa-solid fa-paper-plane"></i></span></a>
                </div>
                <!-- email part end here -->
            </div>
        </div>
    </section>

    <!-- about sectuon start here -->
    <div class="about-m">
        <div class="about-main-m">
            <h3>Hola, I am Rejwan Ahamed. This is my portfolio and my daily blog. I started this website to share my
                knowledge, experience, and programming journey with all my friends on the internet. I tried to post
                everything I know, newly learned topics as friendly, cline, and easily understandable documentation. So
                that, anyone can understand those topics easily.</h3>

            <br>
            <h3>It will make me happy if any of my documentation will be helpful to you. Every day I am learning new
                stuff and constantly trying to make some of my best projects to share my ideas with you. I will share
                all of my project's source code on Github. you can check out my GitHub account also you can ask me any
                questions on Vue js and Laravel between 10 am to 6 pm (GMT+6). The time in your area right now is
                11:09:28 AM . The time in my area right now is 11:09:28 AM.</h3>

            <br>
            <h3>
                I have knowledge of HTML, CSS, javascript, bootstrap, GSAP, jquery, flutter, Vue js, nuxt js, PHP & SQL
                database.
                I am currently learning react js, react-native, tailwind CSS, Mongo DB, and NoSQL database.

            </h3>

            <br>
            <h3>Check out my GitHub</h3>
            <h3>You can download my resume from here Download</h3>
        </div>
    </div>
    <!-- about sectuon end here -->

    <!-- timeline sction start here -->
    <section class="timeline-m" id="t">
        <h3 class="timeline-title-m">My projecs and research time-lines</h3>

        <h3 class="timeline-number-m">01</h3>
        <p class="name-m">SB network</p>
        <p class="details-m">Build their custom website & online payment system</p>

        <h3 class="timeline-number-m">02</h3>
        <p class="name-m">Access Network</p>
        <p class="details-m">Build their custom website, custom payment system with CMS </p>

        <h3 class="timeline-number-m">03</h3>
        <p class="name-m">Paradoxzy</p>
        <p class="details-m">Make a cool looking responsive website for their team</p>

        <h3 class="timeline-number-m">04</h3>
        <p class="name-m">FastPay BD</p>
        <p class="details-m">Developed a dinamic website from scratch for Transactions currency</p>

        <h3 class="timeline-number-m">05</h3>
        <p class="name-m">Udoy Lab</p>
        <p class="details-m">Developed dinamic fully responsive single page application for udoy lab</p>

        <h3 class="timeline-number-m">06</h3>
        <p class="name-m">Banglar Network</p>
        <p class="details-m">Build their custom website, custom payment system with CMS.</p>


    </section>
    <!-- timeline sction end here -->

    <!-- project section start here -->
    <section class="project-m" id="project">
        <div class="project-main-m">
            <h3 class="project-main-title-m">Live projects for Clients</h3>

            <!-- <div class="projects-m">
                <div class="project-body-m">
                    <div class="project-img-m">
                        <img src="../assets/images/project1.png" alt="">
                    </div>
                    <div class="project-details-m">
                        <div class="project-date-m">20.4.2022</div>
                        <div class="project-name-m">Access Nerwork</div>
                        <a href="#" class="project-live-m"> Live View </a>
                    </div>
                </div>
            </div> -->

            <!-- swipper js start here -->
            <swiper :slidesPerView="1" :spaceBetween="10" :pagination="{
                clickable: true,
            }" :breakpoints="{
    '300': {
        slidesPerView: 1.1,
        spaceBetween: 2,
    },
    '768': {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
    },
}" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <div class="projects-m">
                        <div class="project-body-m">
                            <div class="project-img-m">
                                <img src="../assets/images/project1.png" alt="">
                            </div>
                            <div class="project-details-m">
                                <div class="project-date-m">20.4.2022</div>
                                <div class="project-name-m">Access Nerwork</div>
                                <a href="#" class="project-live-m"> Live View </a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projects-m">
                        <div class="project-body-m">
                            <div class="project-img-m">
                                <img src="../assets/images/project1.png" alt="">
                            </div>
                            <div class="project-details-m">
                                <div class="project-date-m">20.4.2022</div>
                                <div class="project-name-m">Access Nerwork</div>
                                <a href="#" class="project-live-m"> Live View </a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projects-m">
                        <div class="project-body-m">
                            <div class="project-img-m">
                                <img src="../assets/images/project1.png" alt="">
                            </div>
                            <div class="project-details-m">
                                <div class="project-date-m">20.4.2022</div>
                                <div class="project-name-m">Access Nerwork</div>
                                <a href="#" class="project-live-m"> Live View </a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>

            <!-- swipper js emd here -->


        </div>
    </section>
    <!-- project section end here -->





    <!-- git hub view -->
    <section class="github">
        <div class="git-title">
            <h3>Github Profile View Count.</h3>
        </div>
        <div class="git-main">
            <div class="git-count">
                <h3 id="gitcount">1275</h3>
            </div>
        </div>
    </section>


    <!-- blogs section start here -->
    <!-- project section start here -->
    <section class="project-m blogs-m" id="project">
        <div class="project-main-m blogs-m">
            <h3 class="project-main-title-m blogs-m">Live projects for Clients</h3>

            <!-- <div class="projects-m">
                <div class="project-body-m">
                    <div class="project-img-m">
                        <img src="../assets/images/project1.png" alt="">
                    </div>
                    <div class="project-details-m">
                        <div class="project-date-m">20.4.2022</div>
                        <div class="project-name-m">Access Nerwork</div>
                        <a href="#" class="project-live-m"> Live View </a>
                    </div>
                </div>
            </div> -->

            <!-- swipper js start here -->
            <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <div class="projects-m">
                        <div class="project-body-m">
                            <div class="project-img-m">
                                <img src="../assets/images/project1.png" alt="">
                            </div>
                            <div class="project-details-m">
                                <div class="project-date-m">20.4.2022</div>
                                <div class="project-name-m">Access Nerwork</div>
                                <a href="#" class="project-live-m"> Live View </a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projects-m">
                        <div class="project-body-m">
                            <div class="project-img-m">
                                <img src="../assets/images/project1.png" alt="">
                            </div>
                            <div class="project-details-m">
                                <div class="project-date-m">20.4.2022</div>
                                <div class="project-name-m">Access Nerwork</div>
                                <a href="#" class="project-live-m"> Live View </a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projects-m">
                        <div class="project-body-m">
                            <div class="project-img-m">
                                <img src="../assets/images/project1.png" alt="">
                            </div>
                            <div class="project-details-m">
                                <div class="project-date-m">20.4.2022</div>
                                <div class="project-name-m">Access Nerwork</div>
                                <a href="#" class="project-live-m"> Live View </a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>

            <!-- swipper js emd here -->


        </div>
    </section>
    <!-- project section end here -->
    <!-- blogs section emd here -->



</template>

<!--name:'MobileMain' -->
<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import "swiper/css/effect-cards";

import "swiper/css";
import { EffectCards } from "swiper";

export default {
    name: 'MobileMain',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: {
                Pagination,
                EffectCards
            }
        };
    },
};
</script>

<style>
.swiper.swiper-initialized.swiper-horizontal.mySwiper.swiper-backface-hidden {
    padding-left: 2rem;
}

.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
    display: none;
}
</style>