//<<<<<<<<<<<<<<<<<<<<<<<<<<<< DOM MANIPULATION 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>:

//<<<<<<<< A-Event Listener >>>>>>>>>>>>>>:
//element.addEventListener("click", function);

const buttonTwo = document.querySelector(".btn-2");

function alertForBtnTwo() {
    alert('JavaScript Fun!');
}

buttonTwo.addEventListener("click", alertForBtnTwo);

//Mouseover:

const buttonThree = document.querySelector(".box-3");

function changeBgColorBtn3() {
    buttonThree.style.backgroundColor = "green";
}

buttonThree.addEventListener("mouseover", changeBgColorBtn3);