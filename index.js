// Log out "Button clicked" when the user clicks the "SAVE INPUT" button


// function saveLead() {
//     console.log("Button clicked!")
// }

// Create two variables:
// myLead -> should be assigned to an empty Array
// inputEl -> should be assigned to the text input field
// const is also used to declare vaiable in modern javascript, const variabel is no reassigned(property)
let myLeads = []

// let oldLeads = []



// 1. Turn the myLeads string into an Array
// myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
// myLeads.push("www.lead2.com") 
// 3. Turn the array into a string again
// myLeads = JSON.stringify(myLeads) 
// 4. Console.log the string using typeof to verify that it's a string 
// console.log(typeof myLeads)

// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
// Grab the unordered list and store it in a const variable called ulEl(unordered list Element)
const ulEl = document.getElementById("ul-el")
// 1. Store the delete button in a deleteBtn variable

// Push the value "www.awesomelead.come" to myArray when the input button is clicked

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable


// ["lead1", "lead2"] or null
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// 1. Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById("tab-btn")


// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url:"https://www.linkedin.com/in/bhaskar-gautam-086ab2211/"}
// ]


// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function(){
    
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //  })
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    
    
    })


    // Save the url instead of logging it out
    // console.log(tabs[0].url)
    // Grab the URL of the current tab:
   
})


// Refactor the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations
// of the function as well.

// 1. Wrap the code below in a renderLeads() function
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // Wrap the lead in an anchor tag (<a>) indside the <li>
        // Can you make the link open in a new tab?
        // listItems += "<li>" + myLeads[i] + "</li>"
        // listItems += "<li><a href='#'>" + myLeads[i] + "</a></li>"
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        // Now we use template string to make look this simple
        listItems += `
            <li>
               <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
               </a>
           </li>
            
            `
        }

// Log out the items in the myLeads array using a for loop
// Render the leads in the inordered list using ulEl.textContent
// Replace .textContent with .innerHTML and use <li> tags 
// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
// 2. Add the item to the listItems variable instead of the ulEl.innerHTML
// ulEl.textContent += myLeads[i] + " "
// ulEl.textContent += "<li>" + myLeads[i] + "</li>"
// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// we use this method to make app faster(improve performance) because in this method we use innerhtml only one time but previous method we innehtml three times. for remembring -> DOM maanipulation comes with the cost
// Let's try a different method!
// create element
// set text content
// append to ul
// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)
   ulEl.innerHTML = listItems
}
// 3. Render the listItem inside the unordered list using ulEl.innerHTML





// 2. Listen for double clicks on the button (google it!)
// 3. When clicked, clear localStorage, MyLeads, and the DOM

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// console.log(leadsFromLocalStorage)


// localStorage.setItem("myName", "Bhaskar Gautam")
// let name = localStorage.getItem("myName")
// console.log(name)

// localStorage.clear()

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings



inputBtn.addEventListener("click", function() {
    // Push the value from the inputEl into the myLeads array
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
    // 2. Call the renderLeads() function
    // Clear out the input field
    inputEl.value = ""
    // Save the myLeads array to localStorage
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    // To verify that it works:
    
})

