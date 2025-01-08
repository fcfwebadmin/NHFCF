let cloud1 = document.querySelector('#cloud1');
let cloud2 = document.querySelector('#cloud2');
let trees = document.querySelector('#trees');
let bg = document.querySelector('#bg');
let text = document.querySelector('#text');
let subTitle = document.querySelector('.sub-title');

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    cloud1.style.left = `${scroll * -2.5}px`;
    cloud2.style.right = `${scroll * -1.5}px`;
    text.style.bottom = `${scroll * -1.5}px`;
    subTitle.style.marginTop = `${scroll * -0.2}px`;

});


let aboutSection = document.querySelector(".about");

window.addEventListener("scroll", () => {

    let revealText = document.querySelectorAll(".rev-text");

    revealText.forEach((ele) => {
        ele.classList.add("hide");
        const heightEle = ele.getBoundingClientRect().top + 300;

        if(window.innerHeight >= heightEle) {
            ele.classList.add("reveal");
        }
    });
    
});


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

function countDownDay() {
    let leftText = document.querySelector(".daysLeft");
    var now = new Date();
    var sunday = new Date();
    sunday.setDate(now.getDate() - now.getDay());     
    sunday.setHours(10); 
    sunday.setMinutes(0);
    sunday.setSeconds(0);
    sunday.setMilliseconds(0);
    
    if (sunday < now) sunday.setDate(sunday.getDate() + 7);
    millisecondsLeft = sunday - now;
    
    
    const msInDay = 1000 * 60 * 60 * 24;
    let res = millisecondsLeft / msInDay;
    let daysLeft = Math.ceil(res);
    
    
    if(daysLeft <= 0) {
        leftText.innerHTML = 'Today is The Day';
    }else if(daysLeft == 1) {
        leftText.innerHTML = `${daysLeft} Day To Go`;
    }
    else {
        leftText.innerHTML = `${daysLeft} Days To Go`;
    }


    
}

countDownDay();

