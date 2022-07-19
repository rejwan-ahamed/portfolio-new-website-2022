<template>
  <div class="contact-main">


    <div class="back">
      <router-link to="/"><i class="fa-solid fa-arrow-left"></i></router-link>
    </div>
    <section class="contact">


      <form action="">
        <label for="name" class="inp-label">Name</label>
        <div class="name-c">
          <p>></p><input type="text" name="" id="name" autocomplete="off">
        </div>
        <label for="name" class="inp-label">Email</label>
        <div class="name-c">
          <p>></p><input type="email" name="" id="email" autocomplete="off">
        </div>
        <label for="name" class="inp-label">Message</label>
        <div class="name-c">
          <p>></p><textarea cols="2" rows="2" type="text" name="message" id="message" spellcheck="false"></textarea>
        </div>
        <div class="form-button">
          <a href="" class="form-sub-button">Submit</a>
        </div>


      </form>

    </section>
  </div>
</template>

<script>

import "../assets/css/contact.css";

export default {
  name: 'ContactMain',
  created() {
    document.getElementById('mhade').style.display = "none";
    document.getElementById('mfooter').style.display = "none";
    document.getElementById('mobile-n').style.display = "none";
  }

}
</script>

<style>
</style>