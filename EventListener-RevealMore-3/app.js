//<<<<<<<<<<<<<<<<<<<<<<<<<<<< DOM MANIPULATION 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>:

//<<<<<<<< A-Event Listener - Reveal Event>>>>>>>>>>>>>>:
//element.addEventListener("click", function);

//Reveal Event:
let revealBtn = document.querySelector(".reveal-btn");

let hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if (hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn');
    } else {
        hiddenContent.classList.add('reveal-btn');

    }
}
revealBtn.addEventListener("click", revealContent);