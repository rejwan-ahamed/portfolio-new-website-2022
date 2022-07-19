<template>
  <div class="contact-main">


    <div class="back">
      <router-link to="/"><i class="fa-solid fa-arrow-left"></i></router-link>
    </div>


    <!-- splash message section here -->
    <section class="splash">
      <div class="splash-m" id="splash">Your message has been sent. I will contact you soon.</div>
    </section>


    <section class="contact" id="contact">
      <form action="post" autocomplete="off" name="google-sheet">
        <label for="name" class="inp-label">Name</label>
        <div class="name-c">
          <p>></p><input type="text" id="name" autocomplete="off" name="entry.804870020">
        </div>
        <label for="name" class="inp-label">Email</label>
        <div class="name-c">
          <p>></p><input type="email" id="email" autocomplete="off" name="entry.1877040553">
        </div>
        <label for="name" class="inp-label">Message</label>
        <div class="name-c">
          <p>></p><textarea cols="2" rows="2" type="text" id="message" spellcheck="false" name="entry.1788762828" />
        </div>
        <div class="form-button">
          <button class="form-sub-button" v-on:click="submit()">Submit</button>
          <!-- <a href="" class="form-sub-button" v-on:click="submit()">Submit</a> -->
        </div>


      </form>

    </section>
  </div>
</template>

<script>
import "../assets/css/contact.css";

export default {
  name: 'ContactMobile',
  created() {
    document.getElementById('mhade').style.display = "none";
    document.getElementById('mfooter').style.display = "none";
    document.getElementById('mobile-n').style.display = "none";
  },

  methods: {
    async submit() {
      const scriptURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5lN9lVaMN_HNW-woga3msNlDkAXKWn9SVf4a68xc-LKSFdw/formResponse'
      const form = document.forms['google-sheet']


      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, {
          method: 'POST',
          body: new FormData(form)
        })
          .then(
            // alert("Data Inserted")
            // document.location = "index2.html"
            form.reset(),
            // document.getElementById("mess").innerHTML = "Thank you for the form submition"\
            document.getElementById('contact').style.display = 'none',
            document.getElementById('splash').style.display = 'block',
            console.warn('success to send a message')
          )
          .catch(error => console.error('Error!', error.message))

      })

    }
  }

}
</script>

<style>
#splash {

  color: #8eff00;
  font-family: 'neue-m';
  padding-left: 8rem;
  transition: .5s;
  display: none;

}

button.form-sub-button {
  background-color: transparent;
  border: none;
}


@media (min-width: 200px) and (max-width: 500px) {
  #splash {
    color: #8eff00;
    font-family: 'neue-m';
    padding-left: 2rem;
    transition: .5s;
    display: none;
    width: 90%;
  }
}


@media screen and (min-width: 501) {
  #splash {

    color: #8eff00;
    font-family: 'neue-m';
    padding-left: 8rem;
    transition: .5s;
    display: none;

  }

  button.form-sub-button {
    background-color: transparent;
    border: none;
  }

  .contact-main {
    display: block;
  }
}
</style>