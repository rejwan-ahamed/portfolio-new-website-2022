<template>
    <!-- all post section start here -->
    <div class="allpost">
        <div class="allpost-main">

            <div v-for="item in results" :key="item.id">
                <div class="post">
                    <div class="post-img">
                        <router-link :to="'/post/' + item._id" class="post-bg">
                            <img :src="item.img1" alt="post img" class="post-thamnale-img">
                        </router-link>
                    </div>
                    <router-link class="post-title" :to="'/post/' + item._id">
                        <h2>{{ item.title }}</h2>
                    </router-link>

                    <div class="description">
                        <h4>{{ item.description }}</h4>
                    </div>
                    <div class="post-date">{{ item.date }}</div>
                    <div class="post-owner">{{ item.tag }}</div>
                    <div class="post-preview">
                        <router-link class="live-view-button" :to="'/post/' + item._id">Live view</router-link>
                    </div>
                </div>
                <div class="hr-bottom"></div>
            </div>
        </div>
    </div>
    <!-- all post section end here -->

    <!-- top and bottom extra space start here -->
    <div class="top-ex-space"></div>
    <!-- top and bottom extra space end here -->
</template>

<script>
import axios from "axios"
export default {
    name: 'AllpostMain',

    data() {
        return {
            results: ''
        }
    },

    // created() {
    //     document.getElementById("facebook").style.color = "black";
    //     document.getElementById("instragram").style.color = "black";
    //     document.getElementById("linked").style.color = "black";
    //     document.getElementById("git").style.color = "black";
    //     document.getElementById("test1").style.color = "black";
    //     document.getElementById("test2").style.color = "black";
    //     document.getElementById("test3").style.color = "black";
    //     document.getElementById("test4").style.color = "black";
    //     document.getElementById("test5").style.color = "black";
    //     document.getElementById("manue").style.color = "black";
    //     document.getElementById("deslogo").src = "https://firebasestorage.googleapis.com/v0/b/udoylab3.appspot.com/o/udoylab%20b.svg?alt=media&token=6bdc3ba0-639d-4932-8828-6d394ae4a16b";
    //     document.getElementById("moblogo").src = "https://firebasestorage.googleapis.com/v0/b/udoylab3.appspot.com/o/udoylab%20b.svg?alt=media&token=6bdc3ba0-639d-4932-8828-6d394ae4a16b";
    // },

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
/* responsiveness start here */
@media (min-width: 768px) and (max-width: 1199.98px) {}
</style>