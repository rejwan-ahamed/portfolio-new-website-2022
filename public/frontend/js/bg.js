function Bgchanger() {
    if (this.scrollY > this.innerHeight / .5) {
        document.getElementById("t").style.backgroundColor = "#97ff00";
    }
    else {
        document.getElementById("t").style.backgroundColor = "white";
    }
}
window.addEventListener("scroll", Bgchanger);



// function Bgchanger2() {
//     if (this.scrollY > this.innerHeight/.2) {
//         console.warn('s')
//         document.getElementById("gitcount").style.fontFamily = "neue-b";
//     }
//     else{
//         console.warn('e')
//         document.getElementById("gitcount").style.fontFamily = "neue-l";
//     }
// }


function Bgchanger2() {
    if (this.scrollY > this.innerHeight / .2) {
        console.warn('s')
        document.getElementById("gitcount").classList.add("mystyle");
        document.getElementById("gitcount").classList.remove("mystyle2");
    }
    else {
        console.warn('e')
        document.getElementById("gitcount").classList.add("mystyle2");
        document.getElementById("gitcount").classList.remove("mystyle");
    }

}
window.addEventListener("scroll", Bgchanger2);