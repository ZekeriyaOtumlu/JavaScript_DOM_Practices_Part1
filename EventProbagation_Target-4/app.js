//<<<<<<<<<<<<<<<<<<<<<<<<<<<< DOM MANIPULATION  >>>>>>>>>>>>>>>>>>>>>>>>>>>:

//<<<<<<<< EVENT PROBAGATION >>>>>>>>>>>>>>:
//element.addEventListener("click", function);

//3 Phases: Event Capturing , Target and Event Bubbling

const clickBtn = document.querySelector(".click-btn");

clickBtn.addEventListener("click", function(e) {
    console.log(e.target.innerText = 'Clicked it!!!');
});