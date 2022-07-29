<template>

    <!-- all post section start here -->
    <div class="allpost">
        <div class="allpost-main">

            <!-- search section start from here -->
            <div class="serch">
                <div class="input-group has-validation">
                    <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" class="form-control" id="username" placeholder="Search" required=""
                        v-model="search">
                </div>
            </div>
            <!-- search section end from here -->

            <div v-for="item in filterBlogs" :key="item.id">
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
                        <router-link class="live-view-button" :to="'/post/' + item._id">Read More</router-link>
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
            results: [],
            search: '',
            select: '',
        }
    },

    async mounted() {
        window.scrollTo(0, 0)
        let result = await axios.get("https://udoylabapi.redhalozenn.xyz/project");
        // console.warn(result.data)
        this.results = result.data;
        // console.log(this.results)
    },

    computed: {
        filterBlogs: function () {
            return this.results.filter((item) => {
                return item.title.toLowerCase().match(this.search.toLowerCase());
            });
        },
    },

}
</script>

<style>
/* serch section styling start here */
.serch {
    display: flex;
    /* background-color: red; */
    align-items: center;
    width: 100%;
    height: inherit;
    margin-bottom: 3rem;
}

.input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    border: 1px solid #c9c9c9;
    border-radius: 6px;
}

.serch-feild {
    display: flex;
    /* background-color: green; */
    align-items: center;
    /* border: 1px solid #c1c1c1; */
    border: 1px solid #2196f347;
    border-radius: 10px;
    width: 60%;
    margin-bottom: 4rem;
}

span.input-group-text {
    border: none !important;
    border-right: 1px solid black !important;
}

input:focus {
    outline: none !important;
    border: none !important;
    border-color: red !important;
}

input {
    outline: none !important;
    border: none !important;
    border-color: red !important;
}

i.fa-solid.fa-magnifying-glass {
    padding-top: 0;
    padding-left: 0;
}

.input-group-text {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    white-space: nowrap;
    background-color: #97FF00;
    border: 1px solid black;
    border-radius: 0.375rem 0 0 0.375rem;
}

.input-group.has-validation {
    border: 1px solid black;
}

i.fa-solid.fa-magnifying-glass {
    color: black;
}

input#username {
    height: 2.5rem;
}


/* responsiveness start here */
/* @media (min-width: 768px) and (max-width: 1199.98px) {} */
</style>