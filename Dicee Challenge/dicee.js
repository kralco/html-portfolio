var img1Rand = Math.random();
var img2Rand = Math.random();

img1Rand = Math.floor(img1Rand * 6) + 1;
img2Rand = Math.floor(img2Rand * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + img1Rand + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + img2Rand + ".png");
