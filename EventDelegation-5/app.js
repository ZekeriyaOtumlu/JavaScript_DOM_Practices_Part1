//<<<<<<<<<<<<<<<<<<<<<<<<<<<< DOM MANIPULATION  >>>>>>>>>>>>>>>>>>>>>>>>>>>:

//<<<<<<<< EVENT DELEGATION >>>>>>>>>>>>>>:
//element.addEventListener("click", function);

//First Solution: If we want to follow as below , we have to create a function for each li elements. 
//Check for Second solution please.

// document.querySelector("#soccer").addEventListener("click", function(e) {
//     console.log("Soccer is clicked !!!");

//     const soccerSport = e.target;

//     if (soccerSport.matches("li")) { // matches just build in function and we are calling it. 
//         soccerSport.style.backgroundColor = 'yellow';
//     }
// })

//Second Solution: it will implement for all li elements in ul.
document.querySelector("#sports").addEventListener("click", function(e) {
    console.log(e.target.getAttribute('id') + " " + 'is Clicked !!!');

    const allSports = e.target;
    if (allSports.matches("li")) {
        allSports.style.backgroundColor = "green";
    }
})

const sports = document.querySelector("#sports");
const newSportAdding = document.createElement("li");

newSportAdding.innerText = "Ride Horse";
newSportAdding.setAttribute("id", "ride-horse");

sports.appendChild(newSportAdding);