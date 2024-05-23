import * as constants from "./constants.js"
import { isPast } from "date-fns";


document.addEventListener('DOMContentLoaded', function () {
    const arrow = document.querySelector('.separator__arrow-button');

    arrow.addEventListener('click', clickFunction);
});

const clickFunction = (e) => {
    let now = new Date();
    let date = new Date();

    let result = isDateValid(now, date);
    if (result.success) {
        calculateAge(now, result.date);
    }
}

function isDateValid(now, date) {
    const dayId = document.querySelector("#dayId");
    const monthId = document.querySelector("#monthId");
    const yearId = document.querySelector("#yearId");

    //validates each input separately
    let result = ValidateEveryInput(dayId, monthId, yearId, now);

    //if any of the inputs is incorrect return result
    if(!result.success) {
        return result;
    }

    //if each entry is correct, set the date with given data and validate if that date exists in the past
    date.setFullYear(+yearId.value);
    date.setMonth(+monthId.value - 1);
    date.setDate(+dayId.value);

    let isDateCorrect = date.getFullYear() === +yearId.value && date.getMonth() === +monthId.value - 1 && date.getDate() === +dayId.value;

    //the date is incorrect
    if (isNaN(date.getDate()) || !isDateCorrect) {
        addInvalidDateValidation(constants.VALIDATION_ERROR_INCORRECT_DATE);
        return { success: false };
    }
    //the date is in the future
    else if (!isPast(date)) {
        addInvalidDateValidation(constants.VALIDATION_ERROR_DATE_IN_THE_FUTURE);
        return { success: false };
    }
    else {
        removeAllValidation(dayId, monthId, yearId)
        return { success: true, date: date };
    }
}

function removeAllValidation(dayId, monthId, yearId) {
    removeValidationMessagesAndStyles(dayId);
    removeValidationMessagesAndStyles(monthId);
    removeValidationMessagesAndStyles(yearId);
}

function ValidateEveryInput (dayId, monthId, yearId, now) {
    let isDayCorrect = !!dayId.value && (!isNaN(dayId.value) && dayId.value >= 1 && dayId.value <= 31);
    let isMonthCorrect = !!monthId.value && (!isNaN(monthId.value) && monthId.value >= 1 && monthId.value <= 12);
    let isYearCorrect = !!yearId.value && (!isNaN(yearId.value));
    let isYearInThePast = !!yearId.value && (yearId.value <= now.getFullYear());
    let isAnyValidFlag = true;

    isAnyValidFlag = isInputValid(isDayCorrect, !dayId.value, dayId, constants.VALIDATION_ERROR_INCORRECT_DAY) && isAnyValidFlag;
    isAnyValidFlag = isInputValid(isMonthCorrect, !monthId.value, monthId, constants.VALIDATION_ERROR_INCORRECT_MONTH) && isAnyValidFlag;
    isAnyValidFlag = isInputValid(isYearCorrect, !yearId.value, yearId, constants.VALIDATION_ERROR_INCORRECT_YEAR) && isAnyValidFlag;
    isAnyValidFlag = isInputValid(isYearInThePast, !yearId.value, yearId, constants.VALIDATION_ERROR_DATE_IN_THE_FUTURE) && isAnyValidFlag;

    return { success: isAnyValidFlag };
}

function addInvalidDateValidation(message) {
    const dayId = document.getElementById("dayId");
    const monthId = document.getElementById("monthId");
    const yearId = document.getElementById("yearId");
    addValidationMessageAndStyles(dayId, message);
    addValidationMessageAndStyles(monthId, constants.EMPTY_STRING);
    addValidationMessageAndStyles(yearId, constants.EMPTY_STRING);
}

function isInputValid(isInputCorrect, isInputNull, input, validationMessage) {
    if (!isInputCorrect) {
        if (isInputNull) {
            addValidationMessageAndStyles(input, constants.VALIDATION_ERROR_FIELD_REQUIRED);
            return false;
        }
        else {
            addValidationMessageAndStyles(input, validationMessage);
            return false;
        }
    }
    else {
        removeValidationMessagesAndStyles(input);

        return true;
    }
}

function removeValidationMessagesAndStyles(element) {
    element.style.borderColor = constants.EMPTY_STRING;

    if (element.nextElementSibling) {
        element.nextElementSibling.textContent = constants.EMPTY_STRING;
    }
    if (element.previousElementSibling) {
        element.previousElementSibling.style.color = constants.EMPTY_STRING;
    }
}

function addValidationMessageAndStyles(element, validationMessage) {
    element.style.borderColor = 'var(--LightRed)';
    if (element.nextElementSibling) {
        element.nextElementSibling.textContent = validationMessage;
    }
    if (element.previousElementSibling) {
        element.previousElementSibling.style.color = 'var(--LightRed)';
    }
}

function calculateAge(now, date) {
    let diffMs = now - date;
    let age = new Date(diffMs);

    let years = Math.abs(age.getUTCFullYear() - 1970);
    let months = Math.abs(age.getMonth());
    let days = Math.abs(age.getUTCDate() - 1);

    document.getElementById("yearsResultId").textContent = years + constants.SPACE;
    document.getElementById("monthsResultId").textContent = months + constants.SPACE;
    document.getElementById("daysResultId").textContent = days + constants.SPACE;
}



