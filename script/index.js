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
