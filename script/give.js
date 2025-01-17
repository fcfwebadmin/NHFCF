let btnActionGive = document.getElementById("give-btn");

btnActionGive.addEventListener("click", ()=>{
    const htmlAttr = document.getElementById("scroll-bhvr");
    htmlAttr.classList.add("scroll-smooth");
});


let faqItems = document.querySelectorAll(".faq-items .item");
let isClicked = false;

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        let arrow = item.querySelector(".arrow");
        let details = item.querySelector("p");

        isClicked = !isClicked
        console.log(isClicked);

        arrow.classList.toggle("-rotate-[135deg]");
        details.classList.toggle("hidden")

        // switch(isClicked) {
        //     case true: 
        //         arrow.classList.remove("rotate-[45deg]");
        //         arrow.classList.add("-rotate-[135deg]");
        //         break;
        //     case false:
        //         arrow.classList.add("rotate-[45deg]");
        //         arrow.classList.remove("-rotate-[135deg]");
        // }
        
        // if(isClicked) {
        //     arrow.classList.remove("rotate-[45deg]");
        // }else {
        //     arrow.classList.add("-rotate-[135deg]");
        // }

    });
});