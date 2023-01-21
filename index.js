/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const mToF = 3.281
const lToG = 0.264
const kToP = 2.204

const inputField = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

let resultOne = 0
let resultTwo = 0

convertBtn.addEventListener('click', function() {
    if (inputField.value) {
    const convertValue = Number(inputField.value)
    
    convertLength(convertValue)
    convertVolume(convertValue)
    convertMass(convertValue)
    }   else {
        console.log("Insert value to convert")
    }
})

function convertLength(value) {
    resultOne = value * mToF
    resultTwo = value / mToF
    lengthResult.textContent = `
    ${value} meters = ${resultOne.toFixed(3)} feet | 
    ${value} feet = ${resultTwo.toFixed(3)} meters`
}

function convertVolume(value) {
    resultOne = value * lToG
    resultTwo = value / lToG
    volumeResult.textContent = `
    ${value} liters = ${resultOne.toFixed(3)} gallons | 
    ${value} gallons = ${resultTwo.toFixed(3)} liters`
}

function convertMass(value) {
    resultOne = value * kToP
    resultTwo = value / kToP
    massResult.textContent = `
    ${value} kilograms = ${resultOne.toFixed(3)} pounds | 
    ${value} pounds = ${resultTwo.toFixed(3)} kilograms`
}