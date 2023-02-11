const iTags = document.getElementsByTagName("i")

window.onresize = window.onload = function() {
    width = this.innerWidth;
    height = this.innerHeight;

    if (width >= 1600) {
        bigScreen()
    } else {
        mediumScreen()
    }
}

function bigScreen() {
    for (let i = 0; i < iTags.length; i++) {
        if (i <= 2) {
            //console.log("nav icons")
            iTags[i].classList.add("fa-3x")
            iTags[i].classList.remove("fa-xl")
        }
        else if ( i >= 3 && i <= 5) {
            //console.log("slider dots")
            iTags[i].classList.add("fa-2xl")
            iTags[i].classList.remove("fa-1x")
        }
        else if ( i >= 6 && i <= 15) {
            //console.log("knowledge icons")
            iTags[i].classList.add("fa-6x")
            iTags[i].classList.remove("fa-4x")
        }
        else if ( i >= 16 ) {
            //console.log("footer icons")
            iTags[i].classList.add("fa-4x")
            iTags[i].classList.remove("fa-2xl")
        }
    }
}

function mediumScreen() {
    for (let i = 0; i < iTags.length; i++) {
        if (i <= 2 || i >= 16 ) {
            //console.log("bars icons")
            iTags[i].classList.add("fa-2xl")
            iTags[i].classList.remove("fa-3x")
        }
        else if ( i >= 3 && i <= 5) {
            //console.log("slider dots")
            iTags[i].classList.add("fa-1x")
            iTags[i].classList.remove("fa-2xl")
        }
        else if ( i >= 6 && i <= 15) {
            //console.log("knowledge icons")
            iTags[i].classList.add("fa-4x")
            iTags[i].classList.remove("fa-6x")
        }
        else if ( i >= 16 ) {
            //console.log("footer icons")
            iTags[i].classList.add("fa-2xl")
            iTags[i].classList.remove("fa-4x")
        }
    }
}
