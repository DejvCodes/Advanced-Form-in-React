// Dynamic object properties = dynamické vlastnosti objektu
const info = "favouriteColor"

const person = {
  fullName: "David Kalmus",
  email: "dejvios@seznam.cz"
}
// person.age = 40
person[info] = "red"
console.log(person)