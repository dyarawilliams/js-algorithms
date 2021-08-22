/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// USING BUILT IN METHODS
function reverseString(text) {
    return text.split('').reverse().join('')
}

// Built in Methods using ES6
/*function reverseString(text) {
    return [...text].reverse().join('')
}*/

// For Loop Method
/*function reverseString(text) {
    let result = ''
    for (let i = text.length-1; i >= 0; i--){
        result +=text[i]
    }
    return result
}*/

// For..of loop in ES6
/*function reverseString(text) {
    let result = ''
    for(let char of text){
        result = char + result 
    }
}*/

// Recursive Method
/*function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    }
}*/

// Using Reduce Method
/*function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc);
}*/

module.exports = reverseString