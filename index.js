#! /usr/bin/env node
import inquirer from "inquirer";
// Asking Questions From Users through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number: ", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number: ", type: "number", name: "SecondNumber" },
    {
        message: "Select one operator to perform Operations: ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"]
    },
]);
// Conditional Statments if_else
if (answers.operator === "Addition") {
    console.log(answers.FirstNumber + answers.SecondNumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.FirstNumber - answers.SecondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.FirstNumber * answers.SecondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.FirstNumber / answers.SecondNumber);
}
else {
    console.log("Invalid Input");
}
