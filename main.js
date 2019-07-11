// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.
// 1. Doctor's name
// 2. Specialty (Oncologist, pediatrician, etc...)
// 3. Address of practice

function createDoctorProfile (name, specialty, address) {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.
// 1. Pet name
// 2. Pet breed
// 3. Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const newDoctor1 = createDoctorProfile("Dr. Ian Malcolm", "Paleontology", "123 Jurassic Park")
const newDoctor2 = createDoctorProfile("Dr. Mehmet Oz", "Cardiology", "123 ABC Channel")

function petFactory (name, breed) {
    return {
        name: name,
        breed: breed
    }
}

const newPet1 = petFactory("Lulu", "Standard Poodle")
const newPet2 = petFactory("Lassie", "Border Collie")
const newPet3 = petFactory("Goldie", "Goldfish")

const BowWowKennels = []

BowWowKennels.push(newPet1, newPet2, newPet3)
console.log(BowWowKennels)

const jumpStopRecords = []
const chattenRecords = []
const polarRecords = []

function createFunkRapArtist (name, genre, age) {
    return jumpStopRecords.push({
        name: name,
        genre: genre,
        age: age
    })

}

function createCountryBluegrassArtist (name, genre, age) {
    return chattenRecords.push({
        name: name,
        genre: genre,
        age: age
    }) 
}
function createPopArtist (name, genre, age) {
    return polarRecords.push({
        name: name,
        genre: genre,
        age: age
    }) 
}

createCountryBluegrassArtist("Bruce Atkins", "Country", 23)
createPopArtist("Jensen Brown", "Pop", 20)
createFunkRapArtist("Dre Funkz", "Funk", 25)
createFunkRapArtist("Dusta Grimes", "Rap", 21)
createCountryBluegrassArtist("Bartholomew Danielson", "Bluegress", 23)
createCountryBluegrassArtist("Avilee Dallas", "Country", 19)
createPopArtist("Austin Kinkaid", "Pop", 22)
createFunkRapArtist("Loyonce Branis", "Rap", 27)

console.log("Jumpstop Records", jumpStopRecords)
console.log("Chatten Records", chattenRecords)
console.log("Polar Records", polarRecords)


// 1. Complete the function below called `contactFactory`:
// * `contactFactory` returns an object with three properties: name, title, email.
// * Make `contactFactory` take a single argument, which will be treated as an array.
// * In the body of the function, loop over that array to set the values of the object's properties.

function contactFactory(contactData) {
  let contact = {
    name: null,
    title: null,
    email: null
  }
  for (let i=0; i < contactData.length; i++) {
     if (i === 0) {
        contact.name = contactData[i]  
     }
     else if (i === 1) {
        contact.title = contactData[i] 
     }
     else if (i === 2) {
        contact.email = contactData[i] 
     }
   }
  return contact
}
// 2. Complete the second function called `createContact`:
// * createContact takes three arguments: name, title, email.
// * Have the function place the three arguments into an array and pass that array to the `contactFactory` by calling it.

function createContact(name, title, email) {
  let newContact = [name, title, email]
  contactFactory(newContact)
  /// pass name, title, email to contactFactory as an array
  console.table(newContact)
}
// 3. Execute createContact and pass in a name, a title, and an email address. Check out your dev tools console for the resulting table of data.

createContact("Betty Boop", "CEO", "bettyboop@gmail.com")


// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then substract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const result = integers.sort((curr, next) => next - curr).filter((num) => num < 19).map((integer) => (integer*1.5) -1).reduce((curr, next) => curr+next)
console.log(integers)
console.log(result)

var chainingResult = integers
.sort((a,b) => b-a)
.filter((num) => num < 19)
.map((num) => (num*1.5) -1)
.reduce((current, next) => current + next)
console.log(chainingResult)

// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const doctorBill = {
    officeName: "Care Clinic",
    streetAddress: "123 Main Street",
    doctorName: "Dr. Ian Malcolm",
    patientName: "Jeff Goldblum",
    visitDate: "2/3/2019",
    amountBilled: "$88.79",
    dueDate: "3/3/2019"
}

// Use square bracket notation to output the value of those three properties to the console in Chrome.
console.log(doctorBill[dateVisited])
console.log(doctorBill[owed])
console.log(doctorBill[patient])

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.

console.log(Object.values(doctorBill))

// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.

const outputElement = document.querySelector("#bill-output")
for (const key of Object.keys(doctorBill)) {
    outputElement.innerHTML += `<span>${key}</span><br>`
}

// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const favDinner = {
    name: "Pad Thai",
    ethnicity: "Thai",
    vegetarian: false
}

// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.

for (const entry of Object.entries(favDinner)) {
    outputElement.innerHTML += `<p>${entry}</p>
    `
}