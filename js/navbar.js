const scrollContainer = document.querySelector(".scroll-container")

console.log(scrollContainer)

scrollContainer.addEventListener("scroll", function () {
    const nav = document.querySelector("nav")
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        if(section.id == "projects" || section.id == "knowledge" || section.id == "contact") {
            let sectionDistance = section.getBoundingClientRect().top
            console.log(sectionDistance)

            if(sectionDistance <=0  && (section.id == "projects" || section.id == "knowledge")) {
                nav.classList.add("special");
                nav.classList.remove("contact-nav")
            } else if (sectionDistance <= 0 && section.id == "contact"){
                nav.classList.add("contact-nav")
                nav.classList.remove("special")
            }
        } else {
                nav.classList.remove("contact-nav")
                nav.classList.remove("special")
        }
    })

    //sections.forEach( (section, i) => {
        //let sectionDistance = section.getBoundingClientRect().top

        //if(sectionDistance <= 0 && (section.id == "home" || section.id == "knowledge" )) {
        //    nav.classList.add("special")
        //}
        //else {
        //    nav.classList.remove("special")
        //}
    //})
});