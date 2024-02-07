var nav = document.querySelector(".navbar");
var borderInCenter =document.querySelector(".borderInCenter")
var logo = document.querySelector("logo");
var startBtn = document.getElementById("startBtn");
var url = "src/AboutFolder/about.html";
window.onload = () => {
  nav.style.top = 0;
  borderInCenter.style.opacity =1
  borderInCenter.style.transition= '3s'
};

/*****/

$(function(){
	$('.box-menu .wrapper').on('click', function(){
		$('.box-menu').toggleClass('full-menu');
		$('.hamburger').toggleClass('active');
	});
	$('a').on('click', function(){
		$(this).siblings('a').removeClass('active');
		$(this).addClass('active');
	});
});
function toggleDisplay() {
let nav1 = document.getElementById("nav1");
let nav2 = document.getElementById("nav2");
let screenWidth = window.innerWidth;

if(screenWidth > 1185){
  nav1.classList.remove("hidden");
  nav2.classList.add("hidden");
}
else{
  nav1.classList.add("hidden");
  nav2.classList.remove("hidden");
}
}
toggleDisplay()
window.onresize = toggleDisplay;
/***** */

var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });
  startBtn.addEventListener('click' , ()=>{
    window.open(url,"_blank")
    console.log(url);
  })


