<template>
    <!-- header secrion start here 👇 -->


    <!-- nav section start here 👇 -->
    <section class="nav-main" id="mhade">
        <div class="nav-destop" id="nav-destop">
            <div class="destop-nav-left">
               <router-link to="/"><img src="../assets/images/logo.svg" alt="logo" srcset="" class="des-nav-logo"> </router-link> 
            </div>
            <div class="destop-nav-right">
                <div class="des-nav-links">
                    <ul>
                        <li><a href="#about" class="des-nav-main-links">About</a></li>
                        <li> <router-link class="des-nav-main-links" to="/blogs">Blogs</router-link></li>
                        <li> <router-link class="des-nav-main-links" to="/contact">Contact</router-link></li>
                        <li><a href="#timeline" class="des-nav-main-links">Timeline</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- nav section end here ☝ -->

    <!-- mobile nav start here 👇-->
    <section class="mobile-nav" id="mobile-n">
        <div id="mySidenav" class="sidenav">
            <!-- <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> -->
            <a href="#about" v-on:click="close()">About</a>
            <router-link v-on:click="close()" to="/blogs">Blogs</router-link>
            <router-link v-on:click="close()" to="/contactm">Contact</router-link>
            <a href="#timeline" v-on:click="close()">Timeline</a>

            <!-- mobile nav social icons -->
            <div class="mb-social-icons">
                <a href="https://www.facebook.com/deadpool.zrx.9"><i class="fa-brands fa-facebook-f mb-icons"></i></a>
                <a href="https://www.instagram.com/rejwan_ahamed85/"><i class="fa-brands fa-instagram mb-icons"></i></a>
                <a href="https://www.linkedin.com/in/rejwan-ahamed-73baa723b/"><i class="fa-brands fa-linkedin-in mb-icons"></i></a>
                <a href="https://github.com/rejwan-ahamed"><i class="fa-brands fa-github mb-icons"></i></a>
            </div>
        </div>
        <div class="mobile-nav-main" id="mobile-nav">
          <router-link to="/mobile"> <img src="../assets/images/logo.svg" alt="logo" srcset="" class="mobile-img"></router-link>  
            <i class="fa-brands fa-42-group" id="animate" style="font-size:30px;cursor:pointer" onclick="show()"></i>
            <!-- <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span> -->
        </div>
    </section>


    <!-- mobile nav end here 👆-->
</template>

<script>
export default {
    name: "MainHeader",

    methods: {
        close() {
            // document.getElementById("mySidenav").style.width = "0";
            // document.getElementById('animate').classList.toggle("down2");
            document.getElementById('animate').classList.remove("down")
            document.getElementById('mySidenav').classList.remove("mySidenav-full")
        }
    }
}
</script>

<style>
</style>