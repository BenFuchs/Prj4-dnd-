// dice roll functions 
function rollD20() {
    var d20 = ''
    d20 = Math.floor(Math.random() * 21) + 1;
    document.getElementById("d20").innerHTML = d20
    console.log(d20);
}

function rollD12() {
    var d12 = ''
    d12 = Math.floor(Math.random() * 13) + 1;
    document.getElementById("d12").innerHTML = d12
    console.log(d12);
}

function rollD8() {
    var d8 = ''
    d8 = Math.floor(Math.random() * 9) + 1;
    document.getElementById("d8").innerHTML = d8
    console.log(d8);
}

function rollD6() {
    var d6 = ''
    d6 = Math.floor(Math.random() * 7) + 1;
    document.getElementById("d6").innerHTML = d6
    console.log(d6);
}

function rollD4() {
    var d4 = ''
    d4 = Math.floor(Math.random() * 5) + 1;
    document.getElementById("d4").innerHTML = d4
    console.log(d4);
}
// navbar stat functions 

function addStat(inputId) {
    var input = document.getElementById(inputId);
    var currentValue = input.value.trim();
    if (currentValue === "") {
        input.value = "0";
    } else {
        var intValue = parseInt(currentValue);
        if (!isNaN(intValue)) {
            input.value = intValue + 1;
        } else {
            console.error("Invalid input. Please enter a valid number.");
        }
    }
}

function minusStat(inputId) {
    var input = document.getElementById(inputId);
    var currentValue = input.value.trim();


    if (currentValue !== "" && !isNaN(currentValue)) {
        // Parse the input value as an integer
        var intValue = parseInt(currentValue);
        if (intValue > 1) {
            // Subtract 1 from the parsed value and update the input field
            input.value = intValue - 1;
        }
    } else {
        // If the input value is empty or not a valid number, handle it accordingly
        console.error("Invalid input. Please enter a valid number.");
    }
}

// stat modifiers
function calculateModifier(attributeValue) {
    return Math.floor((attributeValue - 10) / 2);
}

function calcMod(attributeId, localStorageKey) {
    var attributeValue = parseInt(document.getElementById(attributeId).value);
    var modifier = calculateModifier(attributeValue);
    console.log(modifier);
    localStorage.setItem(localStorageKey, modifier);
}


setInterval(function () {calcMod('str', 'strMOD');}, 1000);
setInterval(function () {calcMod('dex', 'dexMOD');}, 1000);
setInterval(function () {calcMod('con', 'conMOD');}, 1000);
setInterval(function () {calcMod('wis', 'wisMOD');}, 1000);
setInterval(function () {calcMod('int', 'intMOD');}, 1000);
setInterval(function () {calcMod('char', 'charMOD');}, 1000);


// store info into locstorage
// localStorage.setItem(Strength_Mod, modifier)