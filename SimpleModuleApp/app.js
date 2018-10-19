const startProgam = require("./startProgram");

let program1 = function () {
    console.log("This is Program 1!")
};
let program2 = function () {
    console.log("This is Program 2!")
};
let program3 = function () {
    console.log("This is Program 3!")
};

startProgam.startProgram(15, "program1", program1);
startProgam.startProgram(20, "program2", program2);
startProgam.startProgram(10, "program3", program3);