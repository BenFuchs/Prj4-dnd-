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