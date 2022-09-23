/*
    Unit Conversion
*/
const convertBtn = document.getElementById("convert-btn")
const main = document.getElementById("main")

convertBtn.addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    if(userInput) {
        console.log("yes")
        length(userInput)
        volume(userInput)
        mass(userInput)
    }
    else {
        console.log("no")
      
    }
})

function length(givenNum) {
    let metersToFeet = (givenNum * 3.281).toFixed(3)
    const feetToMeters = (givenNum / 3.281).toFixed(3)
    let footMeasurement = ""
    let meterMeasurement = ""
    if(givenNum == 1) {
        footMeasurement = "foot"
        meterMeasurement = "meter"
    }
    else {
        footMeasurement = "feet"
        meterMeasurement = "meters"
            
    }
    main.innerHTML = `
        <div class="conversions">
            <h1>Length (Meters/Feet)</h1>
            <p>${givenNum} ${meterMeasurement} = ${metersToFeet} ${footMeasurement} | ${givenNum} ${footMeasurement} = ${feetToMeters} ${meterMeasurement} </p>
        
        
        </div>
        `
}

function volume(givenNum) {
    let litersToGallon = (givenNum * 0.264).toFixed(3)
    let gallonToliter = (givenNum  * 3.785
).toFixed(3)
    let litersMeasurement = ""
    let gallonMeasurement = ""
    if(givenNum == 1) {
        litersMeasurement = "liter"
        gallonMeasurement = "gallon"
    }
    else {
        litersMeasurement = "liters"
        gallonMeasurement = "gallons"
            
    }
        
    main.innerHTML += `
        <div class="conversions">
            <h1>Volume (Liters/Gallon)</h1>
            <p>${givenNum} ${litersMeasurement} = ${litersToGallon} ${gallonMeasurement} | ${givenNum} ${gallonMeasurement} = ${gallonToliter} ${litersMeasurement} </p>
        
        
        </div>
        `
}

function mass(givenNum) {
    let kiloToPound = (givenNum * 2.204).toFixed(3);
    let poundToKilo = (givenNum * (1/2.204)).toFixed(3)
    let kiloMeasurement = ""
    let poundMeasurement = ""
    if(givenNum == 1) {
        kiloMeasurement = "kilogram"
        poundMeasurement = "pound"
    }
    else {
        kiloMeasurement = "kilograms"
        poundMeasurement = "pounds"
            
    }
        
    main.innerHTML += `
        <div class="conversions">
            <h1>Mass (Kilograms/Pounds)</h1>
            <p>${givenNum} ${kiloMeasurement} = ${kiloToPound} ${poundMeasurement} | ${givenNum} ${poundMeasurement} = ${poundToKilo} ${kiloMeasurement} </p>
        
        
        </div>
        `
}
