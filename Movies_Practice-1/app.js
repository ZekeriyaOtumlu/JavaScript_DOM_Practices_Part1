//<<<<<<<<<<<<<<<  DOM MANIPULATION 1 >>>>>>>>>>>>>>>>>>>>>>:

//<<<<<<<< A-Styling Web Elements >>>>>>>>>>>

//<<<<< 1 - Changing Header h1 color >>>
// const header = document.querySelector("#main-heading");
// header.style.color = "blue";
// console.log(header);

//<<<< 2- Change fontSize of movies' names >>>>>
// let listItems = document.querySelectorAll('.list-items');
// for (i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = "2rem";
// }
// console.log(listItems);

//<<<<<<<<<<<<< B- Creating Web Elements>>>>>>>>>>>>>>>:

// const ul = document.querySelector("ul");
// const li = document.createElement("li") // creating element li element inside ul

// ul.append(li); // adding created li element to the ul
// li.innerText = "X-Men"; // innerHTML and innerText same
//Modifying Attributes & Classes:
// li.classList.add('list-items') // adding same class name for newly created li element.
// li.classList.remove('list=items') // removing the class name from li
// li.remove(); // Removing li element (last one)


//<<<<<<<<<<<<<<<<<<<<<<<<<<<< DOM MANIPULATION 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>:

//<<<<<<<< A-Traverse the DOM >>>>>>>>>>>>>>:

// <<<<<<<<< B- Node Traversals >>>>>>>:
// let ul = document.querySelector('ul');
//Parent Node
// console.log(ul.parentNode); // parent of ul element is div 
// console.log(ul.parentNode.parentNode); // grandparent of ul -- parent is div -- and parent of div is body

// //Child Node
// console.log(ul.childNodes); // will show all li lists 
// console.log(ul.firstChild); // will show first child li OR ul.childNodes[1].style.color = "red"; firstChild will show as Text not the 
// console.log(ul.lastChild); // will show last child li

//Sibling Node
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);