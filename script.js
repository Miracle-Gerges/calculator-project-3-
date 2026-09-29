const ageBox = document.getElementById("ageBox");

const ageInput = document.getElementById("ageInput");

const ageMessage = document.getElementById("ageMessage");

const calculator = document.getElementById("calculator");

const display = document.getElementById("display");


// Check Age

function checkAge() {

    const age = Number(ageInput.value);


    if (age <= 0) {

        ageMessage.textContent =
            "Please enter a valid age.";

        return;
    }


    if (age >= 18) {

        ageBox.style.display = "none";

        calculator.style.display = "block";

    } else {

        ageMessage.textContent =
            "You must be 18 or older to use the calculator.";

    }

}


// Add Value

function appendToDisplay(value) {

    display.value += value;

}


// Clear

function clearDisplay() {

    display.value = "";

}


// Delete Last Character

function deleteLast() {

    display.value =
        display.value.slice(0, -1);

}


// Calculate

function calculate() {

    if (display.value === "") {
        return;
    }


    try {

        display.value = eval(display.value);

    } catch (error) {

        display.value = "Error";

    }

}