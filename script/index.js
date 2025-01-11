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


function countDownDay() {
    let leftText = document.querySelector(".daysLeft");
    var now = new Date();
    var sunday = new Date();
    sunday.setDate(now.getDate() - now.getDay());     
    sunday.setHours(0); 
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

// Google Places API URL and parameters
const url = "https://maps.googleapis.com/maps/api/place/details/json";
const params = {
    placeid: 'ChIJH9o2R2MtK4gRRdU0TyvVT0A',  // Place ID of the location
    key: API_KEY  // Your API key
};

// Construct URL with parameters
const urlWithParams = `${url}?placeid=${params.placeid}&key=${params.key}`;

// Fetch data using JavaScript fetch()
fetch(urlWithParams)
  .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    // Check if the result contains reviews
    if (data.result && data.result.reviews) {
      const reviews = data.result.reviews;
      reviews.forEach(review => {
        const authorName = review.author_name || 'N/A';
        const rating = review.rating || 'N/A';
        const text = review.text || 'No review text available';
        const time = new Date(review.time * 1000).toLocaleString(); // Convert Unix timestamp to readable format
        
        console.log(`Review by ${authorName}:`);
        console.log(`Rating: ${rating}`);
        console.log(`Review: ${text}`);
        console.log(`Time: ${time}`);
        console.log('-'.repeat(50));
      });
    } else {
      console.log('No reviews available for this place.');
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


window.addEventListener('DOMContentLoaded', (event) => {
    countDownDay();
});
