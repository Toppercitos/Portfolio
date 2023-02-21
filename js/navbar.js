const scrollContainer = document.querySelector(".scroll-container");
const iconBox1 = document.querySelector(".icon-box-1");
const iconBox2 = document.querySelector(".icon-box-2");

scrollContainer.addEventListener("scroll", function () {
    const nav = document.querySelector("nav")
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        if(section.id == "projects" || section.id == "knowledge" || section.id == "contact") {
            let sectionDistance = section.getBoundingClientRect().top;

            if (sectionDistance <= 0 && section.id == "contact"){
                nav.classList.add("contact-nav");
                iconBox1.style.display = "none";
                iconBox2.style.display = "flex";
            }
        } else {
                nav.classList.remove("contact-nav");
                iconBox1.style.display = "flex";
                iconBox2.style.display = "none";
        }
    })
});