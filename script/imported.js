import {aboutDropDownHandler} from "./exported.js";

aboutDropDownHandler();

document.getElementById("hamburger-icon").addEventListener("click", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
});


const formRadio = document.querySelectorAll("input[name='form-select']");
const prayerForm = document.querySelector(".prayer-form");
const contactForm = document.querySelector(".contact-form");
formRadio.forEach(radio => {
    radio.addEventListener("change", function() {
        if(this.value === "prayer") {
            prayerForm.classList.remove("hidden");
            contactForm.classList.add("hidden");

        }else {
            prayerForm.classList.add("hidden");

            contactForm.classList.remove("hidden");
        }
        
    });
});

const imageContainer = document.querySelectorAll(".image-container");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
}, {
    threshold: 0.2
});

imageContainer.forEach((images) => {
    observer.observe(images);
})
