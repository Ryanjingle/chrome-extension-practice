/* function saveLead() {
    console.log("Button Clicked!")
} */

//another way of creating an event listener //
//this way it doesnt beef up the html and all events are within the js file.
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")

// use const, unless you know the value of the variable will be reassigned later on


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})





 