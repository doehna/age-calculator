document.addEventListener('DOMContentLoaded', function() {
    var arrow = document.querySelector('.arrow');

    arrow.addEventListener('click', function(){
        var input = document.querySelectorAll("input");
        var day = input[0];
        var month = input[1];
        var year = input[2];
        var today = new Date();
        var date = new Date(`${month.value} / ${day.value} / ${year.value}`);

        if (isDateValid(day, month, year, today, date)) {
            calculateAge(today, date);
        }
    });

});

function isDateValid(day, month, year, today, date){
    var isDayNull = day.value === EMPTY_STRING || day.value === null;
    var isMonthNull = month.value === EMPTY_STRING || month.value === null;
    var isYearNull = year.value === EMPTY_STRING || year.value === null;
    var isDayCorrect = (!isNaN(day.value) && day.value >= 1 && day.value <= 31) && !isDayNull;
    var isMonthCorrect = (!isNaN(month.value) && month.value >= 1 && month.value <= 12) && !isMonthNull;
    var isYearCorrect = (!isNaN(year.value) && year.value <= today.getFullYear()) && !isYearNull;

    if(!isDayCorrect || !isMonthCorrect || !isYearCorrect){
        validateInput(isDayCorrect, isDayNull, day, VALIDATION_ERROR_INCORRECT_DAY);
        validateInput(isMonthCorrect, isMonthNull, month, VALIDATION_ERROR_INCORRECT_MONTH);
        validateInput(isYearCorrect, isYearNull, year, VALIDATION_ERROR_DATE_IN_THE_FUTURE);
        return false;
    }
    else if (isNaN(date.getDate())) {
        addDayValidation(VALIDATION_ERROR_INCORRECT_DATE, day, month, year);
        return false;
    }
    else if (today < date) {
        addDayValidation(VALIDATION_ERROR_DATE_IN_THE_FUTURE, day, month, year);
        return false;
    }
    else {
        removeValidationMessagesAndStyles(day);
        removeValidationMessagesAndStyles(month);
        removeValidationMessagesAndStyles(year);
        return true
    }
}

function addDayValidation (message, day, month, year) {
    addValidationMessageAndStyles(day, message);
    addValidationMessageAndStyles(month, EMPTY_STRING);
    addValidationMessageAndStyles(year, EMPTY_STRING);

}

function validateInput(isInputCorrect, isInputNull, input, validationMessage) {
    if(!isInputCorrect) {
        if(isInputNull)
        {
            addValidationMessageAndStyles(input, VALIDATION_ERROR_FIELD_REQUIRED);
        }
        else {
            addValidationMessageAndStyles(input, validationMessage);
        }
    }
    else {
        removeValidationMessagesAndStyles(input);
    }
}

function removeValidationMessagesAndStyles(element){
    element.style.borderColor = 'var(--LightGrey)';
    if(element.nextElementSibling !== null) {
        element.nextElementSibling.textContent = EMPTY_STRING;
    }
    if(element.previousElementSibling !== null) {
        element.previousElementSibling.style.color = 'var(--SmokeyGrey)';
    }
}

function addValidationMessageAndStyles (element, validationMessage) {
    element.style.borderColor = 'var(--LightRed)';
    if(element.nextElementSibling !== null) {
        element.nextElementSibling.textContent=validationMessage;
    }
    if(element.previousElementSibling !== null) {
        element.previousElementSibling.style.color = 'var(--LightRed)';
    }
}

function calculateAge(today, date) {
    var answears = document.querySelectorAll(".number");
    var diffMs = today - date;
    var age = new Date(diffMs);

    var years = Math.abs(age.getUTCFullYear() - 1970);
    var months = Math.abs(age.getMonth());
    var days = Math.abs(age.getUTCDate() - 1);

    answears[0].textContent = years + SPACE;
    answears[1].textContent = months + SPACE;
    answears[2].textContent = days + SPACE;
}
