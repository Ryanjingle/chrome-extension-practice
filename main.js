/*function saveLead() {
    console.log("Button Clicked!")
} */

//another way of creating an event listener //
//this way it doesnt beef up the html and all events are within the js file.
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")


// use const, unless you know the value of the variable will be reassigned later on

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value) //.value 
    renderLeads()
})

function renderLeads() {
let listItems = ""
for (i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>" //innerHTML, manipulating the DOM using html elements
}
ulEl.innerHTML = listItems
}

//okay, the reason why we change the innerHTML to outside the loop is because 
//it comes at a performance cost. Rather than having to manipulate the DOM three times (lthrough the loop)
//we are defining the list item within js, then calling upon it once outside of the function




// .innerHTML //

/* const containerEl = document.querySelector("#container")
// containerEl.innerHTML = "<button>" + "Buy!" + "</button>"
or
containerEl.innerHTML = "<button onclick='buy()'>Buy!</button>"
//on click is within the html value
function buy() {
    containerEl.innerHTML = "<p>Thank you for buying!</p>"
} */


 