const scrollContainer = document.querySelector(".scroll-container")
const icons = document.querySelector(".icons")

const scrollThumb = document.querySelector("::-webkit-scrollbar")

console.log(scrollThumb)

scrollContainer.addEventListener("scroll", function () {
    const nav = document.querySelector("nav")
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        if(section.id == "projects" || section.id == "knowledge" || section.id == "contact") {
            let sectionDistance = section.getBoundingClientRect().top

            if(sectionDistance <=0  && (section.id == "projects" || section.id == "knowledge")) {
                nav.classList.add("special");
                nav.classList.remove("contact-nav")
                icons.style.display = "flex"

            } else if (sectionDistance <= 0 && section.id == "contact"){
                nav.classList.add("contact-nav")
                nav.classList.remove("special")
                icons.style.display = "none"
                scrollThumb.style.color = "$background-color"
            }
        } else {
                nav.classList.remove("contact-nav")
                nav.classList.remove("special")
                icons.style.display = "flex"
        }
    })
});