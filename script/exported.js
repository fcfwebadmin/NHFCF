
export function aboutDropDownHandler() {
    let aboutDrop = document.querySelector(".drop-about");
    let isClicked = false;

    aboutDrop.addEventListener("click", function(event) {

        isClicked = !isClicked;    

        if(isClicked) {
            aboutDrop.children[0].classList.remove("hidden");
        }else {
            aboutDrop.children[0].classList.add("hidden");
        }
    });

    aboutDrop.addEventListener("mouseleave", () => {
        isClicked = false;
        aboutDrop.children[0].classList.add("hidden");
    });
}
