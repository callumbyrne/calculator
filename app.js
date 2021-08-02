const point = document.querySelector("#point");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const equals = document.querySelector("#equals");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const del = document.querySelector("#del");
const ac = document.querySelector("#ac");
const displayText = document.querySelector(".displayText");
const equationText = document.querySelector(".equationText");


let a = "";
let b = "";
let operator = "";
let value = "";
let equation = "";


function displayValue() {
    if (value === "") {
        displayText.textContent = "0";
    } else {
        displayText.textContent = value;
    }
};

function displayEquation() {
    if (equation === "") {
        equationText.textContent = "0";
    } else {
        equationText.textContent = equation;
    }
}

function clear() {
    a = "";
    b = "";
    operator = "";
    value = "";
    equation = "";
    displayValue();
    displayEquation();
};

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
};

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
};

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
};

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
};

function operate(operator, a, b) {
    if (operator === "add") {
        return add(a, b);
    } else if (operator === "subtract") {
        return subtract(a, b);
    } else if (operator === "multiply") {
        return multiply(a, b);
    } else if (operator === "divide") {
        return divide(a, b);
    } else {
        return "ERR";
    };
};


document.querySelectorAll(".number").forEach(num => {
    num.addEventListener('click', (e) => {
        if (value.length == 13) {
            return;
        } else {
            value += e.target.innerText;
            equation += e.target.innerText;
            if (a !== "") {
                b += value;
            };
            displayValue();
            displayEquation();
        };
    });
});

document.querySelectorAll(".operator").forEach(op => {
    op.addEventListener('click', (e) => {
        if (equation === "") {
            return;
        } else if (b !== "") {
            let solution = parseFloat(operate(operator, a, b));
            value = Math.round((solution + Number.EPSILON) * 100) / 100;
            a = solution;
            b = "";
            operator = e.target.id;
            equation = `${solution} ${e.target.innerText} `;
            displayEquation();
            displayValue();
            value = "";
        } else if (a !== "") {
            value = "";
            operator = e.target.id;
            equation = `${a} ${e.target.innerText} `;
            displayEquation();
        } else {
            a = value;
            value = "";
            operator = e.target.id;
            equation += ` ${e.target.innerText} `;
            displayEquation();
        }


    });
});

equals.addEventListener('click', () => {
    if (a === "" || operator === "") {
        return;
    } else {
        b = value;
        let solution = parseFloat(operate(operator, a, b));
        value = Math.round((solution + Number.EPSILON) * 100) / 100;
        a = solution;
        b = "";
        displayValue();
        value = "";
    };
});

ac.addEventListener('click', clear);


displayValue();
displayEquation();