// document.getElementById("count").innerText = 5

//change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el")       //pass in arguments
let saveEl = document.getElementById("save-el")

console.log(countEl);

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
   let countSave = count + " - "

   saveEl.textContent += countSave

   countEl.textContent = 0

   count = 0 

}

// let username = "Yoskar"

// let message = "You have three new notificationssss"

// // console.log(message + ", " + username + "!")

// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)