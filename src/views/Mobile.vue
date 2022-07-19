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
                <h1>Hi ! There I am Rejwan Ahamed, want to see something mind-blowing.</h1>
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
    <section id="about">


        <div class="about-m">
            <div class="about-main-m">
                <h3>Hola, I am Rejwan Ahamed. This is my portfolio and my daily blog. I started this website to share my
                    knowledge, experience, and programming journey with all my friends on the internet. I tried to post
                    everything I know, newly learned topics as friendly, cline, and easily understandable documentation.
                    So
                    that, anyone can understand those topics easily.</h3>

                <br>
                <h3>It will make me happy if any of my documentation will be helpful to you. Every day I am learning new
                    stuff and constantly trying to make some of my best projects to share my ideas with you. I will
                    share
                    all of my project's source code on Github. you can check out my GitHub account also you can ask me
                    any
                    questions on Vue js and Laravel between 10 am to 6 pm (GMT+6). The time in your area right now <span
                        id="your-clock"></span>
                    . The time in my area right now is <span id="my-clock"></span>.</h3>

                <br>
                <h3>
                    I have knowledge of HTML, CSS, javascript, bootstrap, GSAP, jquery, flutter, Vue js, nuxt js, PHP &
                    SQL
                    database.
                    I am currently learning react js, react-native, tailwind CSS, Mongo DB, and NoSQL database.

                </h3>

                <br>
                <h3>Check out my <span><a href="https://metrics.lecoq.io/about/rejwan-ahamed"
                            class="show-links">GitHub</a></span></h3>
                <h3>You can download my resume from here <span><a
                            href="https://drive.google.com/file/d/1AIAGfjdmfKh34-nPQJn4wJc8CSSpj6u2/view?usp=sharing"
                            class="show-links">Download</a></span></h3>
            </div>
        </div>
    </section>
    <!-- about sectuon end here -->

    <!-- timeline sction start here -->
    <section class="timeline-m" id="t">
        <h3 class="timeline-title-m">My projects and research timelines</h3>

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
                                <img src="../assets/images/1.jpg" alt="">
                            </div>
                            <div class="project-details-m">
                                <div class="project-date-m">09.04.2021</div>
                                <div class="project-name-m exp-b">Access Network</div>
                                <a href="https://accessnet-9ccb4.web.app/" target="_blank" class="project-live-m"> Live
                                    View </a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projects-m">
                        <div class="project-body-m">
                            <div class="project-img-m">
                                <img src="../assets/images/2.jpg" alt="">
                            </div>
                            <div class="project-details-m">
                                <div class="project-date-m">20.05.2021</div>
                                <div class="project-name-m exp-b">Paradoxzzy</div>
                                <a href="https://paradoxzzy.web.app/" target="_blank" class="project-live-m"> Live View
                                </a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projects-m">
                        <div class="project-body-m">
                            <div class="project-img-m">
                                <img src="../assets/images/3.jpg" alt="">
                            </div>
                            <div class="project-details-m">
                                <div class="project-date-m">25.05.2021</div>
                                <div class="project-name-m exp-b">SB Network</div>
                                <a href="https://sb-wifi-a7ce0.web.app/" target="_blank" class="project-live-m"> Live
                                    View </a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projects-m">
                        <div class="project-body-m">
                            <div class="project-img-m">
                                <img src="../assets/images/5.jpg" alt="">
                            </div>
                            <div class="project-details-m">
                                <div class="project-date-m">23.06.2022</div>
                                <div class="project-name-m exp-b">FastPay BD</div>
                                <a href="https://fastpaybd.com/" target="_blank" class="project-live-m"> Live View </a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projects-m">
                        <div class="project-body-m">
                            <div class="project-img-m">
                                <img src="../assets/images/4.jpg" alt="">
                            </div>
                            <div class="project-details-m">
                                <div class="project-date-m">29.06.2022</div>
                                <div class="project-name-m exp-b">Udoy Lab</div>
                                <a href="https://udoylab3.web.app/" target="_blank" class="project-live-m"> Live View
                                </a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projects-m">
                        <div class="project-body-m">
                            <div class="project-img-m">
                                <img src="../assets/images/6.jpg" alt="">
                            </div>
                            <div class="project-details-m">
                                <div class="project-date-m">05.07.2022</div>
                                <div class="project-name-m exp-b">Bangla Network</div>
                                <a href="https://banglawifinetwork.web.app/" target="_blank" class="project-live-m">
                                    Live View </a>
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
            <h3>
                <marquee behavior="" direction="1">Github Profile View Count. &nbsp; Github Profile View Count.
                </marquee>
            </h3>
        </div>
        <div class="git-main">
            <div class="git-count">
                <h3 id="gitcount">1275</h3>
            </div>
        </div>
    </section>


    
    <!-- service section start here -->
    <section class="service">
        <div class="service-main m-service">
            <div class="service-title">
                <h3>I am currently working on.</h3>
            </div>
            <div class="service-paragraph">
                <p>Here are some of the technology I am constantly working on and pushing my limits for developing the
                    best projects to contribute to.</p>
            </div>
            <div class="services-main">
                <div class="service-icons">
                    <div class="service-main-icon"><img src="/img/server.4c9e961b.svg" alt="" srcset="">
                        <h4>Backend <br> development</h4>
                    </div>
                </div>
                <div class="service-icons">
                    <div class="service-main-icon"><img src="/img/layout1.6b5f3c01.svg" alt="" srcset="">
                        <h4>Single <br> page app</h4>
                    </div>
                </div>
                <div class="service-icons">
                    <div class="service-main-icon"><img src="/img/back.bf7ae837.svg" alt="" srcset="">
                        <h4>Cross <br> platfrom </h4>
                    </div>
                </div>
                <div class="service-icons">
                    <div class="service-main-icon"><img src="/img/arrow.4ebc861c.svg" alt="" srcset="">
                        <h4>Responsiveness <br> &amp; UI fixing</h4>
                    </div>
                </div>
                <div class="service-icons">
                    <div class="service-main-icon"><img src="/img/cms.15abbbfd.svg" alt="" srcset="">
                        <h4>CMS</h4>
                        <h4></h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- service section end here -->


    <!-- blog section start here -->
    <div class="blog-m">
        <h3 class="project-main-title-m blog-t">My latest blogs</h3>
        <div class="project-main-paragraph-m blog-t">I tried to post new blogs every single week. Usually, I post blogs
            on newly learned codes, Project briefings, and my personal code documentation. </div>
        <div class="blogs-main-m">
            <blogs></blogs>
        </div>

        <div class="blogs-buttons">
            <router-link to="/blogs" class="view-blogs">View Blogs</router-link>
        </div>


    </div>
    <!-- blog section end here -->


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


// blog component import
import blogs from "./Blogs.vue";


export default {
    name: 'MobileMain',
    components: {
        Swiper,
        SwiperSlide,
        blogs
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },

    created() {

        if (screen.width > 600) {
            window.location = "https://rejwanahamed.xyz/";
        }

        document.getElementById('mobile-n').style.display = "block";
        document.getElementById('mfooter').style.display = "block";

    }
};
</script>

<style>
@media (min-width:100px) and (max-width: 600px) {

    .service-main-icon img {
        width: 2.5 !important;
    }

    .service-main.m-service {
        padding-bottom: 0px;
    }

    .swiper.swiper-initialized.swiper-horizontal.mySwiper.swiper-backface-hidden {
        padding-left: 2rem !important;
    }
}

.swiper.swiper-initialized.swiper-horizontal.mySwiper.swiper-backface-hidden {
    padding-left: 2rem;
}

.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
    display: none;
}

.swiper.swiper-initialized.swiper-horizontal.mySwiper.swiper-backface-hidden {
    width: 100%;
}

marquee {
    margin-top: 10px;
}

.git-title {
    background-color: #FC5101;
    color: black;
    padding: 1rem 0rem !important;
    text-align: center;
}

@media (min-width: 100px) and (max-width: 300px) {

    i.fa-solid.fa-paper-plane {
        font-size: 16px;

    }
}

@media (min-width: 300px) and (max-width: 400px) {

    i.fa-solid.fa-paper-plane {
        font-size: 16px;
        padding-top: 0px;
        padding-left: 0px;

    }
}

@media (min-width: 401px) and (max-width: 500px) {

    i.fa-solid.fa-paper-plane {
        font-size: 20px;
        padding-top: 0px;
        padding-left: 0px;

    }
}
</style>