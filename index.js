const display = document.getElementById("display")
const display2 = document.getElementById("display2")

function appendToDisplay(input) {
    if (String(display2.value).slice(0, -3) == display.value) {
        display.value = ""
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

function usarOperador(operador) {
    if (String(display.value).endsWith(".")) {
        display.value = String(display.value).slice(0, -1)
    }
    switch (operador) {
        case "+":
            display2.value = display.value + " + "
            break;
        case "-":
            display2.value = display.value + " - "
            break;
        case "*":
            display2.value = display.value + " * "
            break;
        case "/":
            display2.value = display.value + " / "
            break;
        case "%":
            display2.value = display.value + " % "
            break;
    }
}

function remover() {
    if (String(display.value).replace("-", "").length == 1) {
        display.value = 0
    } else {
        display.value = String(display.value).slice(0, -1)
    }
}

function mudarSinal() {
    if (display.value != 0) {
        if (String(display.value).startsWith("-")) {
            display.value = String(display.value).slice(1)
        } else {
            display.value = "-" + display.value
        }
    }
}

function limparDisplay() {
    display.value = "0"
    display2.value = ""
}

function calcular() {
    try {
        let operador = String(display2.value).charAt(String(display2.value).indexOf(" ") + 1)
        let valor1 = display2.value
        let valor2 = display.value
        if (valor1.endsWith("=")) {
            valor1 = valor1.slice(0, valor1.indexOf(operador) + 1)
        }
        display.value = eval(valor1 + valor2)
        if (String(display2.value).endsWith("=")) {
            display2.value = valor2 + valor1.slice(1) + " "
            console.log(valor2 + valor1.slice(1));
            
        } else {
            display2.value += valor2 + " ="
        }
    } catch (error) {
        display.value = "Erro"
    }
}