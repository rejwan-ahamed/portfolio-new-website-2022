<template>
    <section class="posts">
        <!-- main header section start here -->
        <div class="posts-header-section">
            <div class="posts-header-main">
                <div class="posts-tag">{{ this.resutls.tag }}</div>
                <div class="title">
                    <h1 class="posts-title-main">{{ this.resutls.title }}</h1>
                </div>
                <div class="posts-date">{{ this.resutls.date }}</div>
            </div>
        </div>
        <!-- main header section end here here -->

        <!-- thumbnail section start here -->
        <div class="posts-thumbnail">
            <div class="posts-main-thumb">
                <img :src="this.resutls.img2" alt="thumbnail">
            </div>
        </div>
        <!-- thumbnail section end here -->

        <div class="main-post-content" v-html="this.resutls.content">


        </div>
    </section>
</template>
<script>
import axios from "axios";
export default {
    name: "SinglePost",
    data() {
        return {
            resutls: {
                img1: '',
                image2: '',
                title: '',
                tag: '',
                description: '',
                content: '',
                id: '',
                date: ''
            }
        }
    },
    async mounted() {
        // let test = this.$route.params.id
        let post = await axios.get("https://udoylabapi.redhalozenn.xyz/project/" + this.$route.params.id)
        this.resutls = post.data
        console.log(post.data)
        window.scrollTo(0, 0)
    },

}
</script>

<style>
@font-face {
    font-family: neue-ul;
    src: url(../assets/fonts/NeueMachina-Ultralight.ttf);
}

@font-face {
    font-family: neue-l;
    src: url(../assets/fonts/NeueMachina-Light.ttf);
}

@font-face {
    font-family: neue-r;
    src: url(../assets/fonts/NeueMachina-Regular.ttf);
}

@font-face {
    font-family: neue-m;
    src: url(../assets/fonts//NeueMachina-Medium.ttf);
}

@font-face {
    font-family: neue-b;
    src: url(../assets/fonts/NeueMachina-Bold.ttf);
}

@font-face {
    font-family: neue-bb;
    src: url(../assets/fonts/NeueMachina-Black.ttf);
}

@font-face {
    font-family: neue-ub;
    src: url(../assets/fonts//NeueMachina-Ultrabold.ttf);
}

span.ql-font-monospace {
    font-family: 'neue-m' !important;
}

blockquote {
    font-family: 'neue-m' !important;
    color: #115bf8 !important;
    font-size: 20px;
}

.main-post-content ol li{
        font-family: 'neue-m';
}

blockquote span {
    font-family: 'neue-m' !important;
    color: #115bf8 !important;
    font-size: 20px !important;
}

pre.ql-syntax {
    background-color: #242424;
    padding: 1rem;
    color: rgb(0, 255, 4);
    border-radius: 4px;
}

/* fixed attributes */
.main-post-content h1,
.main-post-content h2,
.main-post-content h3,
.main-post-content h4,
.main-post-content h5,
.main-post-content h6 {
    /* font-family: 'neue-m' !important; */
    font-family: 'neue-b' !important;
    font-weight: 700;
    text-align: left;
    /* padding-top: 1rem; */
    /* padding-bottom: 1rem; */
}

.main-post-content p {
    font-family: 'neue-m' !important;
    font-weight: 500;
    font-size: 20px;
    color: rgb(82, 82, 82);
    text-align: left;
    /* padding-top: 2rem; */
    /* padding-bottom: 2rem; */
}

.main-post-content a {
    color: #115bf8;
    font-size: 20px;
}

.main-post-content span {
    font-size: 20px;
}

.main-post-content img {
    width: 60%;
    height: inherit;
    /* padding-top: 2rem; */
    /* padding-bottom: 2rem; */
}



.posts-header-section {
    width: 100%;
    height: inherit;
    background-color: #97ff00;
}

.posts-header-main {
    padding: 14rem 20rem;
}

.posts-tag {
    font-family: 'neue-m';
    color: black;
    font-size: 20px;
}

.posts-date {
    font-family: 'neue-m';
    color: black;
    font-size: 15px;
    padding-bottom: 10rem;
}

.posts-title-main {
    font-family: 'neue-m' !important;
    font-weight: 600;
    color: black;
    font-size: 50px;
    line-height: 70px;
    width: 70%;
    padding: 1rem 0;
}

.posts-thumbnail {
    left: 0%;
    right: 0%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.posts-main-thumb {
    margin-top: -16%;
    /* padding-bottom: 6rem; */
    padding-bottom: 4rem;
}


.posts-main-thumb img {
    width: 80vw;
    height: 60vh;
    border-radius: 4px;

}

.main-post-content {
    padding: 0rem 18rem 6rem 18rem;
}


/* responsiveness start here */
/* laptop responsiveness start here */
@media (min-width: 1600px) and (max-width: 1699px) {
    .posts-header-main {
        padding: 14rem 14rem;
    }

    .main-post-content {
        padding: 0rem 14rem 6rem 14rem;
    }
}

@media (min-width: 1400px) and (max-width: 1599px) {
    .posts-header-main {
        padding: 10rem 10rem;
    }

    .main-post-content {
        padding: 0rem 10rem 6rem 10rem;
    }

    .posts-tag {
        font-family: 'neue-m';
        color: black;
        font-size: 16px;
    }

    .posts-date {
        font-family: 'neue-m';
        color: black;
        font-size: 13px;
        padding-bottom: 8rem;
    }

    .posts-title-main {
        font-family: 'neue-m' !important;
        font-weight: 600;
        color: black;
        font-size: 40px;
        line-height: 60px;
        width: 70%;
        padding: 0.5rem 0;
    }
}

@media (min-width: 1300px) and (max-width: 1399px) {
    .posts-header-main {
        padding: 10rem 10rem;
    }

    .main-post-content {
        padding: 0rem 10rem 6rem 10rem;
    }

    .posts-tag {
        font-family: 'neue-m';
        color: black;
        font-size: 16px;
    }

    .posts-date {
        font-family: 'neue-m';
        color: black;
        font-size: 13px;
        padding-bottom: 8rem;
    }

    .posts-title-main {
        font-family: 'neue-m' !important;
        font-weight: 600;
        color: black;
        font-size: 40px;
        line-height: 60px;
        width: 70%;
        padding: 0.5rem 0;
    }
}

@media (min-width: 1100px) and (max-width: 1299px) {
    .posts-header-main {
        padding: 10rem 10rem;
    }

    .main-post-content {
        padding: 0rem 10rem 6rem 10rem;
    }

    .posts-tag {
        font-family: 'neue-m';
        color: black;
        font-size: 16px;
    }

    .posts-date {
        font-family: 'neue-m';
        color: black;
        font-size: 13px;
        padding-bottom: 5rem;
    }

    .posts-title-main {
        font-family: 'neue-m' !important;
        font-weight: 600;
        color: black;
        font-size: 35px;
        line-height: 55px;
        width: 70%;
        padding: 0.5rem 0;
    }
}

@media (min-width: 1000px) and (max-width: 1099px) {
    .posts-header-main {
        padding: 10rem 7rem;
    }

    .main-post-content {
        padding: 0rem 7rem 6rem 7rem;
    }

    .posts-tag {
        font-family: 'neue-m';
        color: black;
        font-size: 16px;
    }

    .posts-date {
        font-family: 'neue-m';
        color: black;
        font-size: 13px;
        padding-bottom: 3rem;
    }

    .posts-title-main {
        font-family: 'neue-m' !important;
        font-weight: 600;
        color: black;
        font-size: 35px;
        line-height: 55px;
        width: 100%;
        padding: 0.5rem 0;
    }
}

/* responsiveness for phone */
@media (min-width: 200px) and (max-width: 350px) {
    .posts-header-main {
        padding: 10rem 2rem 4rem 2rem;
    }

    .main-post-content {
        padding: 0rem 2rem 6rem 2rem;
    }

    .posts-tag {
        font-family: 'neue-m';
        color: black;
        font-size: 16px;
    }

    .posts-date {
        font-family: 'neue-m';
        color: black;
        font-size: 13px;
        padding-bottom: 2rem;
    }

    .posts-title-main {
        font-family: 'neue-m' !important;
        font-weight: 600;
        color: black;
        font-size: 25px;
        line-height: 35px;
        width: 100%;
        padding: 0.5rem 0;
    }

    .posts-main-thumb {
        margin-top: -20%;
        padding-bottom: 3rem !important;
        padding-bottom: 1rem;
    }

    .posts-main-thumb img {
        width: 100%;
        height: inherit;
        border-radius: 4px;
        padding: 0 1rem;
    }

    .main-post-content p {
        font-family: 'neue-m' !important;
        font-weight: 500;
        font-size: 16px;
        color: rgb(82, 82, 82);
        text-align: left;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }

    .main-post-content span {
        font-family: 'neue-m' !important;
        font-weight: 500;
        font-size: 16px !important;
        color: rgb(82, 82, 82);
        text-align: left;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }

    .main-post-content img {
        width: 100%;
        height: inherit;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }

    .main-post-content h1,
    .main-post-content h2,
    .main-post-content h3,
    .main-post-content h4,
    .main-post-content h5,
    .main-post-content h6 {
        font-family: 'neue-m' !important;
        font-weight: 700;
        text-align: left;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }

    span.ql-font-monospace {
        font-family: 'neue-m' !important;
    }

    blockquote {
        font-family: 'neue-m' !important;
        color: #115bf8;
        font-size: 18px;
    }

    blockquote span {
        font-family: 'neue-m' !important;
        color: #115bf8 !important;
        font-size: 18px !important;
    }


}

@media (min-width: 351px) and (max-width: 400px) {
    .posts-header-main {
        padding: 10rem 2rem 4rem 2rem;
    }

    .main-post-content {
        padding: 0rem 2rem 6rem 2rem;
    }

    .posts-tag {
        font-family: 'neue-m';
        color: black;
        font-size: 16px;
    }

    .posts-date {
        font-family: 'neue-m';
        color: black;
        font-size: 13px;
        padding-bottom: 3rem;
    }

    .posts-title-main {
        font-family: 'neue-m' !important;
        font-weight: 600;
        color: black;
        font-size: 25px;
        line-height: 35px;
        width: 100%;
        padding: 0.5rem 0;
    }

    .posts-main-thumb {
        margin-top: -20%;
        /* padding-bottom: 3rem; */
    }

    .posts-main-thumb img {
        width: 100%;
        height: inherit;
        border-radius: 4px;
        padding: 0 1rem;
    }

    .main-post-content p {
        font-family: 'neue-m' !important;
        font-weight: 500;
        font-size: 16px;
        color: rgb(82, 82, 82);
        text-align: left;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }

    .main-post-content span {
        font-family: 'neue-m' !important;
        font-weight: 500;
        font-size: 16px !important;
        color: rgb(82, 82, 82);
        text-align: left;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }

    .main-post-content img {
        width: 100%;
        height: inherit;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }

    .main-post-content h1,
    .main-post-content h2,
    .main-post-content h3,
    .main-post-content h4,
    .main-post-content h5,
    .main-post-content h6 {
        font-family: 'neue-m' !important;
        font-weight: 700;
        text-align: left;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }

    span.ql-font-monospace {
        font-family: 'neue-m' !important;
    }

    blockquote {
        font-family: 'neue-m' !important;
        color: #115bf8;
        font-size: 18px;
    }

    blockquote span {
        font-family: 'neue-m' !important;
        color: #115bf8 !important;
        font-size: 18px !important;
    }

}

@media (min-width: 401px) and (max-width: 500px) {
    .posts-header-main {
        padding: 10rem 2rem 4rem 2rem;
    }

    .main-post-content {
        padding: 0rem 2rem 6rem 2rem;
    }

    .posts-tag {
        font-family: 'neue-m';
        color: black;
        font-size: 16px;
    }

    .posts-date {
        font-family: 'neue-m';
        color: black;
        font-size: 13px;
        padding-bottom: 4rem;
    }

    .posts-title-main {
        font-family: 'neue-m' !important;
        font-weight: 600;
        color: black;
        font-size: 25px;
        line-height: 35px;
        width: 100%;
        padding: 0.5rem 0;
    }

    .posts-main-thumb {
        margin-top: -20%;
        /* padding-bottom: 3rem; */
    }

    .posts-main-thumb img {
        width: 100%;
        height: inherit;
        border-radius: 4px;
        padding: 0 1rem;
    }

    .main-post-content p {
        font-family: 'neue-m' !important;
        font-weight: 500;
        font-size: 16px;
        color: rgb(82, 82, 82);
        text-align: left;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }

    .main-post-content span {
        font-family: 'neue-m' !important;
        font-weight: 500;
        font-size: 16px !important;
        color: rgb(82, 82, 82);
        text-align: left;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }

    .main-post-content img {
        width: 100%;
        height: inherit;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }

    .main-post-content h1,
    .main-post-content h2,
    .main-post-content h3,
    .main-post-content h4,
    .main-post-content h5,
    .main-post-content h6 {
        font-family: 'neue-m' !important;
        font-weight: 700;
        text-align: left;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }

    span.ql-font-monospace {
        font-family: 'neue-m' !important;
    }

    blockquote {
        font-family: 'neue-m' !important;
        color: #115bf8;
        font-size: 18px;
    }

    blockquote span {
        font-family: 'neue-m' !important;
        color: #115bf8 !important;
        font-size: 18px !important;
    }


}
</style>