// for(let i = 0; i < name.length; i++) {
//     console.log("hi " + name[i])
// }

// for(let name of names) {
//     console.log(`hi ${name}`)
// }

// const student = {
//     name: "Jonas",
//     major: "Computer Science",
//     age: 20,
//     home: {
//         address: "100 CS Way"
//     },
//     sayHello: () => {
//         console.log("Hi, my name is Jonas!")
//     }
// }

// student.sayHello()

const names = ["Dakota", "Ryan", "Chris"]
const numbers = [100, 50, 25, 1000]

const filteredNames = names.filter((value) => value.includes('a'))
const mappedNames = names.map((value) => {
    if(value === "Dakota") {
        return 1
    } else {
        return 0
    }
})

const sortedNames = names.sort()
const sortedNumbers = numbers.sort((a, b) => a - b)
const sum = numbers.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber
}, 0)

// console.log(filteredNames)
// console.log(mappedNames)
// console.log(sortedNames)
// console.log(sortedNumbers)
console.log(sum)


