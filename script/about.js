
let circle = document.querySelector(".circle-rotate");
let textAbout = document.querySelector(".text-about");


window.addEventListener("scroll", () => {
    let getHeight = textAbout.getBoundingClientRect().top - 20;
        
    if(getHeight <= window.scrollY) {
        textAbout.classList.add("shrink-text");
    }

        
    if(window.scrollY <= 0) {
        textAbout.classList.remove("shrink-text");
    }

});



