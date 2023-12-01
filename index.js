// about
"use strict";

var leftPortrait = document.getElementById('portrait-left');
var rightPortrait = document.getElementById('portrait-right');

leftPortrait.addEventListener('mouseenter', function() {
    rightPortrait.classList.add('shrink');
});
leftPortrait.addEventListener('mouseleave', function() {
    rightPortrait.classList.remove('shrink');
});

rightPortrait.addEventListener('mouseenter', function() {
    leftPortrait.classList.add('shrink');
});
rightPortrait.addEventListener('mouseleave', function() {
    leftPortrait.classList.remove('shrink');
});

// computerGraphics

var status = 0;

console.log("Number of slideBtn elements found:", slideBtn.length);
console.log("hi")

function slideImage(x) {
    let slideBtn = document.getElementsByClassName("slide-btn");
    let imgList = document.getElementById("artworks");

    var i;
    console.log("slideImage called with index:", x);

    for (i = 0; i < slideBtn.length; i++) {
        slideBtn[i].style.backgroundColor = "rgb(231, 168, 222)"; 
    }

    slideBtn[x].style.backgroundColor = "rgb(232, 24, 205)";

    let positionUit = -100;

    var position = x * positionUit;
    console.log("New left position:", position + "%");  // Debugging the position value
    imgList.style.left = position + "%";
}



