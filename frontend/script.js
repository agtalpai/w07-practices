let globalVariable01 = 13;

let globalVariable02 = function () {
    let funVariable01 = "hello, function!"
    
    
    let funVariable02 = function () {
        console.log("Ez a funvariable02 belseje");
    }
    funVariable02();

    console.log(funVariable01);
    console.log(globalVariable01);

    let funInVariable01 = true;
    let funInVariable02 = function () {
        console.log(funInVariable01);
    }

    funInVariable02()

    if (funVariable01 === "Ez a funvariable02 belseje") {
        var blockVariable01 = "hi!"
    }

    console.log(blockVariable01);
};

globalVariable02();

// console.log(funVariable01);

const loadEvent = function () {
    const rootElement = document.getElementById("root");
    console.log(globalVariable01);
}

const constVariable01 = "ciao";

console.log(constVariable01);

const constObject01 = {};
// constObject01.key = "Buon Giorno";

// constObject01 = {key:"Buon giorno"};

console.log(constObject01);

const globalVariable03 = function (parameter1, parameter2, parameter3) {
    // console.log(parameter1);
    // console.log(parameter2);
    console.log(parameter3);
}

const globalVariable05 = function () {
    return "Pear"
}

const globalVariable06 = function () {
    return "Shoes"
}

const globalVariable04 = "Apple";

globalVariable03(globalVariable05(),globalVariable04, globalVariable06);

window.addEventListener("load", loadEvent);