const display = document.getElementById("display")

function appendToDisplay(input) {
    if (input === "." && String(display.value).includes(".")) {

    }
    if (display.value === "0") {
        if (input === ".") {            
            display.value += input
        } else {
            display.value = input
        }
    } else {
        if (input === ".") {
            if (!(String(display.value).includes("."))) {
                display.value += input
            }
        } else {
            display.value += input
        }
    }
}

function clearDisplay() {
    display.value = "0"
}

function calculate() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Erro"
    }
}