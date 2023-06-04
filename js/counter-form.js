import {countCalories, checkInputs} from './functions.js';

const counterForm = document.querySelector('.counter__form');
const counterResult = document.querySelector('.counter__result');
const submitButton = document.querySelector('.form__submit-button');
const resetButton = document.querySelector('.form__reset-button');
const inputs = document.querySelectorAll("input");
const textInputCopy = [].slice.call(document.querySelectorAll('input[type="text"]'));
const textInputs = document.querySelector('.inputs-group').querySelectorAll('input');
const genderChoice = document.querySelector('.switcher').querySelectorAll('input[type=radio]');
const activityChoice = document.querySelector('.radios-group').querySelectorAll('input[type=radio]');

const data = {
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    activity: 'min'
}

const getResult = () => {
    inputs.forEach(function (input) {
        input.addEventListener('change', () => {
            resetButton.disabled = false;
        });
    });

    resetButton.addEventListener('click', () => {
        counterResult.classList.add('counter__result--hidden');
        document.getElementById('gender-male').checked = true;
        document.getElementById('activity-minimal').checked = true;
        document.getElementById('age').value = '';
        document.getElementById('height').value = '';
        document.getElementById('weight').value = '';
        resetButton.disabled = true;
        submitButton.disabled = true;
    });

    textInputCopy.forEach(function (copy) {
        copy.addEventListener('input', checkInputs, false);   
    });

    textInputs.forEach((textInput) => {
        textInput.addEventListener('change', () => {
            data[textInput.name] = textInput.value;
        });
    });

    genderChoice.forEach((choice) => {
        choice.addEventListener('change', () => {
            if (choice.checked === true) {
                data.gender = choice.value;
            };
        });
    });

    activityChoice.forEach((choice) => {
        choice.addEventListener('change', () => {
            if (choice.checked === true) {
                data.activity = choice.value;
            };
        });
    });

    submitButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        counterResult.classList.remove('counter__result--hidden');
        countCalories(data);
    });
};

export {getResult};