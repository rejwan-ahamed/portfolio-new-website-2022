function Bgchanger() {
    if (this.scrollY > this.innerHeight/.5) {
        document.getElementById("t").style.backgroundColor = "#FFC700";
    }
    else{
        document.getElementById("t").style.backgroundColor = "white";
    }
}
window.addEventListener("scroll",Bgchanger);



function Bgchanger2() {
    if (this.scrollY > this.innerHeight/.2) {
        console.warn('s')
        document.getElementById("gitcount").style.fontFamily = "neue-b";
    }
    else{
        console.warn('e')
        document.getElementById("gitcount").style.fontFamily = "neue-l";
    }
}
window.addEventListener("scroll",Bgchanger2);