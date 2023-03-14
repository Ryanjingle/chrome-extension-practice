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
    myLeads.push(inputEl.value)//.value 
    inputEl.value = "" //clears input field on click
    renderLeads()
})

function renderLeads() {
let listItems = ""
for (i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"//innerHTML, manipulating the DOM using html elements
    listItems += `
    <li>
        <a href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
    </li>
    `
    window.open(listItems) //opens in new tab on click
    console.log(listItems)
}
ulEl.innerHTML = listItems
}




// .innerHTML //

/* const containerEl = document.querySelector("#container")
// containerEl.innerHTML = "<button>" + "Buy!" + "</button>"
or
containerEl.innerHTML = "<button onclick='buy()'>Buy!</button>"
//on click is within the html value
function buy() {
    containerEl.innerHTML = "<p>Thank you for buying!</p>"
} */


// TEMPLATE STRINGS - Line 25
//Must have backtick, everything else looks like HTML structure
/* const recipient = "James"
const sender = "Ryan"
const email = "Hey " + recipient + "! How is it going? Cheers, Ryan"
instead of concatanating the entire sentence, we can:
const email = `Hey ${recipient}! 
How is it going? 
Cheers, ${sender}`
console.log(email) */
// multi line template string above, this will put each on a seperate link in dev tools


 