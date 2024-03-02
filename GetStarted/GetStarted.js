 //Exercise 1: Create a sum script
//Create a script that outputs the total of 5 + 6 when you run it with Node.js.

console.log("La respuesta del primer ejercicio es: " + (5+6))


//Exercise 2: Explore with the Node.js REPL
//Use the Node.js REPL to list the methods provided by the Node.js core crypto module. Use one of these methods to generate a random ID.   

const randomID = crypto.randomUUID()   // getRandomValues o randomUUID
console.log("La respuesta del segundo ejercicio es el ID random: " + randomID)

