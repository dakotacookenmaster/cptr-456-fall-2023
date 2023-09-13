// const div = document.querySelector("div")

// /* Three Ways to define functions */

// /* function declaration / function expression */
// // function handleClick3() {
// //     // code in here
// // }

// // function assignment
// // const handleClick2 = function() {

// // }

// // arrow function
// const handleClick = () => {
//     // const element = document.createElement("div")
//     // element.addEventListener("click", handleClick)

//     // const h6 = document.createElement("h6")
//     // h6.innerText = "Block"

//     // const p = document.createElement("p")
//     // p.innerText = "Subtitle"

//     // element.appendChild(h6)
//     // element.appendChild(p)

//     // document.body.appendChild(element)
//     const clone = div.cloneNode(true)
//     clone.addEventListener("click", handleClick)
//     document.body.appendChild(clone)
// }

// div.addEventListener("click", handleClick)

let count = 0

const removeItem = (id) => {
    const elementToRemove = document.getElementById(id)
    const main = document.querySelector("main")
    main.removeChild(elementToRemove)
}

const toggleCheck = (id) => {
    const elementToStrike = document.getElementById(id)
    const cardBody = elementToStrike.querySelector(".card-body")
    cardBody.classList.toggle("strike")
}

const addItem = () => {
    const addInput = document.querySelector("input")
    const inputValue = addInput.value

    const template = document.querySelector(".template")
    const templateClone = template.cloneNode(true)
    templateClone.id = `item-${count++}`

    const cardBody = templateClone.querySelector(".card-body")
    cardBody.innerText = inputValue

    addInput.value = ""

    templateClone.classList.remove("template")

    // target delete button and add event listener
    const deleteButton = templateClone.querySelector("button")
    deleteButton.addEventListener("click", () => removeItem(templateClone.id))

    // target check button and add event listener
    const checkButton = templateClone.querySelector("button:last-of-type")
    checkButton.addEventListener("click", () => toggleCheck(templateClone.id))

    const main = document.querySelector("main")
    main.appendChild(templateClone)
}

const addButton = document.getElementById("add")
addButton.addEventListener("click", addItem)