let circle = document.querySelector(".circle-rotate");
let textAbout = document.querySelector(".text-about");


// window.addEventListener("scroll", () => {
//     // const getHeight = circle.getBoundingClientRect().top;

//     if(window.scrollY == 0) {
//         circle.classList.remove("rotate-45");
//     }else {
//         circle.classList.add("rotate-45");
//     }


// });


window.addEventListener("scroll", () => {
    let getHeight = textAbout.getBoundingClientRect().top - 20;
    console.log("test",getHeight);
    
    console.log(window.scrollY);
    
    if(getHeight <= window.scrollY) {
        textAbout.classList.add("shrink-text");
    }

        
    if(window.scrollY <= 0) {
        textAbout.classList.remove("shrink-text");
    }

});



