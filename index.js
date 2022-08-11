//Grabbing HTML Elements 
let convertBtn = document.getElementById("convert-btn")
let resetBtn = document.getElementById('reset-btn')
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById('volume-el')
let massEl = document.getElementById('mass-el')

//Setting Calculations for functions below  
const meterToFeet = 3.281
const feetToMeter = 0.305
const literToGallon = 0.264
const gallonToLiter = 3.785
const kiloToPound = 2.204
const poundToKilo = 0.453

//For the Length Converter//
convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `
                            ${baseValue} Meters = ${(baseValue * meterToFeet).toFixed(3)} Feet 
                                ||
                            ${baseValue} Feet = ${(baseValue * feetToMeter).toFixed(3)} Meters 
                           ` 
})

//For the Volume Converter//
convertBtn.addEventListener("click", function () {
    let baseValue = inputEl.value
    
    volumeEl.textContent = `
                            ${baseValue} Liters = ${(baseValue * literToGallon).toFixed(3)} Gallons 
                                ||
                            ${baseValue} Gallons = ${(baseValue * gallonToLiter).toFixed(3)} Liters
                           `
})

//For the Mass Converter//
convertBtn.addEventListener('click', function () {
    let baseValue = inputEl.value
    
    massEl.textContent = `
                            ${baseValue} Kilos = ${(baseValue * kiloToPound).toFixed(3)} Pounds 
                                ||
                            ${baseValue} Pounds = ${(baseValue * poundToKilo).toFixed(3)} Kilos
                         `
})

resetBtn.addEventListener('click', function () {
    
    inputEl.value = "0"
})
 