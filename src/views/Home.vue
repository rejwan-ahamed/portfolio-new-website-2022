<template>
    <section class="hero">
        <div class="hero-main">
            <div class="hero-left">
                <div class="hero-left-main-title">
                    <h1 class="hero-main-title">Hi! There I am Rejwan Ahamed,
                        want to see something mind-blowing.</h1>
                </div>
                <div class="hero-paragraph">
                    <h2 class="hero-main-paragraph">
                        It’s my portfolio. Here I share about my programming journey. I post what l learn,
                        problem-solving & code documentation.
                    </h2>
                </div>

                <div class="hero-email">
                    <a href="mailto: rejwanahamed85@gmail.com" class="email-link-main">
                        <div class="hero-main-button">
                            <h4>rejwanahamed85@gmail.com</h4>
                            <i class="fa-solid fa-paper-plane"></i>
                        </div>
                    </a>
                </div>

            </div>
            <div class="hero-right">
                <div class="hero-right-bg">
                    <div class="hero-avater">
                        <img src="../assets/images/avater.svg" alt="avater" srcset="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- hero section end here 👆 -->


    <!-- about section start here 👇 -->
    <section class="about" id="about">
        <div class="about-main">
            <p>Hola, I am Rejwan Ahamed. This is my portfolio and my daily blog. I started this website to share my
                knowledge, experience, and programming journey with all my friends on the internet. I tried to post
                everything I know, newly learned topics as friendly, cline, and easily understandable documentation. So
                that, anyone can understand those topics easily.
                <br>
                <br>
                It will make me happy if any of my documentation will be helpful to you. Every day I am learning new
                stuff and constantly trying to make some of my best projects to share my ideas with you. I will share
                all of my project's source code on Github. you can check out my GitHub account also you can ask me any
                questions on Vue js and Laravel between 10 am to 6 pm (GMT+6). The time in your area right now is <span
                    id="your-clock"></span>
                . The time in my area right now is <span id="my-clock"></span>.
                <br>
                <br>
                I have knowledge of HTML, CSS, javascript, bootstrap, GSAP, jquery, flutter, Vue js, nuxt js, PHP & SQL
                database.
                <br>
                I am currently learning react js, react-native, tailwind CSS, Mongo DB, and NoSQL database.
                <br>
                <br>
                Check out my <span><a href="https://metrics.lecoq.io/about/rejwan-ahamed"
                        class="show-links">GitHub</a></span>
                <br>
                You can download my resume from here <span><a
                        href="https://drive.google.com/file/d/1AIAGfjdmfKh34-nPQJn4wJc8CSSpj6u2/view?usp=sharing"
                        class="show-links">Download</a></span>
            </p>
        </div>
    </section>
    <!-- about section end here 👆 -->


    <!-- timeline section start here 👇 -->
    <section class="timeline" id="timeline">
        <div class="timeline-main">
            <div class="timeline-title">
                <h4>My projecs and research timeline.</h4>
            </div>

            <div class="branches">
                <ul>
                    <li class="branches-content"> &nbsp; <div class="main-content">
                            <h3 class="s-count">01</h3>
                            <h4>SB Network</h4>
                            <p>Build their custom website & online payment system.</p>
                        </div>
                    </li>
                    <li class="branches-content"> &nbsp; <div class="main-content">
                            <h3 class="s-count">02</h3>
                            <h4>Access Network</h4>
                            <p>Build their custom website, and custom payment system with CMS.</p>
                        </div>
                    </li>
                    <li class="branches-content"> &nbsp; <div class="main-content">
                            <h3 class="s-count">03</h3>
                            <h4>Paradoxzy</h4>
                            <p>Make a cool-looking responsive website for their team.</p>
                        </div>
                    </li>
                    <li class="branches-content"> &nbsp; <div class="main-content">
                            <h3 class="s-count">04</h3>
                            <h4>Coin ex</h4>
                            <p>Developed a dynamic website from scratch for transaction currency.</p>
                        </div>
                    </li>
                    <li class="branches-content"> &nbsp; <div class="main-content">
                            <h3 class="s-count">05</h3>
                            <h4>Flutter development traning</h4>
                            <p>Get training on flutter app development from Cross Platform App Development.</p>
                        </div>
                    </li>
                    <li class="branches-content"> &nbsp; <div class="main-content">
                            <h3 class="s-count">06</h3>
                            <h4>Udoy Lab</h4>
                            <p>Developed dynamic fully responsive single-page application for Udoy Lab.</p>
                        </div>
                    </li>
                    <li class="branches-content"> &nbsp; <div class="main-content">
                            <h3 class="s-count">07</h3>
                            <h4>Vue JS</h4>
                            <p>Working on a Vue js for single page application & deploying some cool projects on Vue js.
                            </p>
                        </div>
                    </li>
                    <li class="branches-content"> &nbsp; <div class="main-content">
                            <h3 class="s-count">08</h3>
                            <h4>Laravel for backend development</h4>
                            <p>Learning Lavavel for backend development.</p>
                        </div>
                    </li>
                    <li class="branches-content"> &nbsp; <div class="main-content">
                            <h3 class="s-count">09</h3>
                            <h4>Programming hero course</h4>
                            <p>Take admission in the programming hero course to gain more knowledge on react and backend
                                development.</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </section>
    <!-- timeline section end here 👆 -->


    <!-- live project section start here 👇-->
    <section class="live-project">
        <h3 class="live-project-title">Live projects for Clients</h3>
        <p class="live-project-paragraph">These are some of my clients' and my live projects to showcase my works and
            get some better ideas about my works. every project is unique and they have some story behind it.</p>

        <!-- <div class="live-project-main">
            <div class="live-body">
                <img src="../assets/images/1.jpg" alt="project 1" srcset="" class="live-img">
                <div class="live-body-main">
                    <div class="live-date">20.4.2022</div>
                    <div class="live-title">Access Nerwork</div>
                    <a href="#" class="live-button">Live View</a>
                </div>
            </div>
        </div> -->

        <div class="live-project-ex-l">

            <swiper :slidesPerView="1" :spaceBetween="10" :pagination="{
                clickable: true,
            }" :breakpoints="{
    '640': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '768': {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 3.5,
        spaceBetween: 80,
    },
}" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <div class="live-project-main">
                        <div class="live-body">
                            <img src="../assets/images/1.jpg" alt="project 1" srcset="" class="live-img">
                            <div class="live-body-main">
                                <div class="live-date">09.04.2021</div>
                                <div class="live-title">Access Nerwork</div>
                                <a href="https://accessnet-9ccb4.web.app/" class="live-button" target="_blank">Live
                                    View</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="live-project-main">
                        <div class="live-body">
                            <img src="../assets/images/2.jpg" alt="project 1" srcset="" class="live-img">
                            <div class="live-body-main">
                                <div class="live-date">20.5.2021</div>
                                <div class="live-title">Paradoxzzy</div>
                                <a href="https://paradoxzzy.web.app/" class="live-button" target="_blank">Live View</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="live-project-main">
                        <div class="live-body">
                            <img src="../assets/images/3.jpg" alt="project 1" srcset="" class="live-img">
                            <div class="live-body-main">
                                <div class="live-date">26.5.2021</div>
                                <div class="live-title">SB Network</div>
                                <a href="https://sb-wifi-a7ce0.web.app/" class="live-button" target="_blank">Live
                                    View</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="live-project-main">
                        <div class="live-body">
                            <img src="../assets/images/5.jpg" alt="project 1" srcset="" class="live-img">
                            <div class="live-body-main">
                                <div class="live-date">23.6.2022</div>
                                <div class="live-title">FastPay BD</div>
                                <a href="https://fastpaybd.com/" class="live-button" target="_blank">Live View</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="live-project-main">
                        <div class="live-body">
                            <img src="../assets/images/4.jpg" alt="project 1" srcset="" class="live-img">
                            <div class="live-body-main">
                                <div class="live-date">29.6.2022</div>
                                <div class="live-title">Udoy Lab</div>
                                <a href="https://udoylab3.web.app/" class="live-button" target="_blank">Live View</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="live-project-main">
                        <div class="live-body">
                            <img src="../assets/images/6.jpg" alt="project 1" srcset="" class="live-img">
                            <div class="live-body-main">
                                <div class="live-date">05.07.2022</div>
                                <div class="live-title">Bangla NEtwork</div>
                                <a href="https://banglawifinetwork.web.app/" class="live-button" target="_blank">Live
                                    View</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

            </swiper>

        </div>

    </section>

    <!-- live project section end here 👆-->


    <!-- service section start here 👇 -->
    <section class="service">
        <div class="service-main">
            <div class="service-title">
                <h3>I am currently working on.</h3>
            </div>
            <div class="service-paragraph">
                <p>Here are some of the technology I am constantly working on and pushing my limits for developing the
                    best projects to contribute to.</p>
            </div>
            <div class="services-main">
                <div class="service-icons">
                    <div class="service-main-icon">
                        <img src="../assets/images/icons/server.svg" alt="" srcset="">
                        <h4>Backend <br>
                            development</h4>
                    </div>
                </div>
                <div class="service-icons">
                    <div class="service-main-icon">
                        <img src="../assets/images/icons/layout1.svg" alt="" srcset="">
                        <h4>Single <br>
                            page app</h4>
                    </div>
                </div>
                <div class="service-icons">
                    <div class="service-main-icon">
                        <img src="../assets/images/icons/back.svg" alt="" srcset="">
                        <h4>Cross <br>
                            platfrom </h4>
                    </div>
                </div>
                <div class="service-icons">
                    <div class="service-main-icon">

                        <img src="../assets/images/icons/arrow.svg" alt="" srcset="">
                        <h4>Responsiveness <br>
                            & UI fixing</h4>
                    </div>
                </div>
                <div class="service-icons">
                    <div class="service-main-icon">
                        <img src="../assets/images/icons/cms.svg" alt="" srcset="">
                        <h4>CMS</h4>
                        <h4></h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- service section end here 👆 -->


    <!-- Blog section start here 👇-->
    <section class="blog-section">
        <h3 class="live-project-title blog">My latest blogs.</h3>
        <p class="live-project-paragraph blog">I tried to post new blogs every single week. Usually, I post blogs on
            newly learned codes, Project briefings, and my personal code documentation.</p>

        <!-- <div class="live-project-main">
            <div class="live-body">
                <img src="../assets/images/1.jpg" alt="project 1" srcset="" class="live-img">
                <div class="live-body-main">
                    <div class="live-date">20.4.2022</div>
                    <div class="live-title">Access Nerwork</div>
                    <a href="#" class="live-button">Live View</a>
                </div>
            </div>
        </div> -->

        <div class="blog-main-destop">

            <div class="blog-ex-l" v-for="item in results.slice(0, 3)" :key="item.id">
                <router-link :to="'/post/' + item._id">
                    <div class="blog-blog-main">
                        <div class="blog-body">
                            <img :src="item.img1" alt="blog 1" srcset="" class="blog-img">
                            <div class="blog-body-main">
                                <div class="blog-date">{{ item.date }}</div>
                                <div class="blog-title">{{ item.title }}</div>
                                <div class="blog-description">{{ item.description }}</div>

                                <div class="blog-orgin"><img src="https://udoylab.com/img/rejwan.01eb99b8.jpg"
                                        alt="avater" srcset="">
                                    <div class="blog-owner">
                                        <h5 class="owner-name">by Rejwan</h5>
                                        <h6 class="blog-tags">Research paper</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="blogs-view-b">
            <router-link to="/blogs" class="blog-live-view">View Blogs</router-link>
        </div>


    </section>

    <!-- blog  section end here 👆-->



</template>

<script>


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";


// axios 
import axios from "axios";



export default {
    name: "MainHome",

    components: {
        Swiper,
        SwiperSlide,
    },


    async mounted() {
        window.scrollTo(0, 0)
        let result = await axios.get("https://udoylabapi.redhalozenn.xyz/project");
        // console.warn(result.data)
        this.results = result.data;
        // console.log(this.results)
    },

    data() {
        return {
            results: ''
        }
    },

    created() {

        if (screen.width <= 500) {
            window.location = "https://rejwanahamed.xyz/mobile";
        }
        document.getElementById('mhade').style.display = "block";
        document.getElementById('mfooter').style.display = "block";
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },


}
</script>

<style>
</style>