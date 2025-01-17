
export function aboutDropDownHandler() {
    let aboutDrop = document.querySelectorAll(".drop-about");

    aboutDrop.forEach(btnClick => {
        btnClick.addEventListener("click", ()=> {
            const aboutBtn = btnClick.querySelector(".about-btn");
            aboutBtn.classList.toggle("hidden");
        });
    });
}

