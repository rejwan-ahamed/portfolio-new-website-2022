window.addEventListener("scroll", function () {
    const header = document.getElementById('nav-destop');
    header.classList.toggle('sticky', window.scrollY > 0)

    // for mobile
    const mobile = document.getElementById('mobile-nav');
    mobile.classList.toggle('sticky', window.scrollY > 0)

})