
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

const workerURL = "https://grev-worker2.clarence-juanata03.workers.dev/";


fetch(workerURL)
.then(res=> {
    if(!res.ok) {
        throw new Error("URL IS NOT ACCESSIBLE");
    }
    return res.json();
}).then(data => {
    console.log(JSON.stringify(data, null, 2));
    console.log(data.result.reviews);

}).catch(err => {
    console.log(`Error ${err}`);
    
})



