const iTags = document.getElementsByTagName("i");

console.log(iTags);

window.onresize = window.onload = function() {
    width = this.innerWidth;
    height = this.innerHeight;

    if (width >= 1600) {
        bigScreen();
    } else if (950 < width && width < 1600){
        mediumScreen();
    } else {
        celphoneScreen();
    }
}

function bigScreen() {
    for (let i = 0; i < iTags.length; i++) {
        if (i <= 5) {
            //console.log("nav icons")
            iTags[i].classList.add("fa-3x");

            iTags[i].classList.remove("fa-2xl");
            iTags[i].classList.remove("fa-lg");
        }
        else if ( i >= 6 && i <= 8) {
            //console.log("slider dots")
            iTags[i].classList.add("fa-2xl");

            iTags[i].classList.remove("fa-xl");
            iTags[i].classList.remove("fa-2xs");
        }
        else if ( i > 8) {
            //console.log("knowledge icons")
            iTags[i].classList.add("fa-6x");

            iTags[i].classList.remove("fa-4x");
            iTags[i].classList.remove("fa-3x");
        }
    }
}

function mediumScreen() {
    for (let i = 0; i < iTags.length; i++) {
        if (i <= 5) {
            //console.log("nav icons")
            iTags[i].classList.add("fa-2xl");

            iTags[i].classList.remove("fa-3x");
            iTags[i].classList.remove("fa-lg");
        }
        else if ( i >= 6 && i <= 8) {
            //console.log("slider dots")
            iTags[i].classList.add("fa-xl");

            iTags[i].classList.remove("fa-2xl");
            iTags[i].classList.remove("fa-2xs");
        }
        else if ( i > 8) {
            //console.log("knowledge icons")
            iTags[i].classList.add("fa-4x");

            iTags[i].classList.remove("fa-6x");
            iTags[i].classList.remove("fa-3x");
        }
    }
}

function celphoneScreen() {
    for (let i = 0; i < iTags.length; i++) {
        if (i <= 5) {
            //console.log("nav icons")
            iTags[i].classList.add("fa-lg");

            iTags[i].classList.remove("fa-3x");
            iTags[i].classList.remove("fa-2xl");
        }
        else if ( i >= 6 && i <= 8) {
            //console.log("slider dots")
            iTags[i].classList.add("fa-2xs");

            iTags[i].classList.remove("fa-2xl");
            iTags[i].classList.remove("fa-xl");
        }
        else if ( i > 8) {
            //console.log("knowledge icons")
            iTags[i].classList.add("fa-3x");

            iTags[i].classList.remove("fa-6x");
            iTags[i].classList.remove("fa-4x");
        }
    }
}
