const submitButton = document.querySelector('.form__submit-button');
const textInputCopy = [].slice.call(document.querySelectorAll('input[type="text"]'))

const caloriesNorm = document.getElementById('calories-norm');
const caloriesMin = document.getElementById('calories-minimal');
const caloriesMax = document.getElementById('calories-maximal');

const ACTIVITY_COEFFICIENTS = {
    min: 1.2,
    low: 1.375,
    medium: 1.55,
    high: 1.725,
    max: 1.9
}

function countCalories ({gender, age, height, weight, activity}) {
    let weightMaintenance = 0;
    if (gender === 'male') {
        weightMaintenance = ACTIVITY_COEFFICIENTS[activity]*((10 * weight) + (6.25 * height) - (5 * age) + 5);
    } else {
        weightMaintenance = ACTIVITY_COEFFICIENTS[activity]*((10 * weight) + (6.25 * height) - (5 * age) - 161);
    }
    caloriesNorm.textContent = Math.round(weightMaintenance);
    caloriesMin.textContent = Math.round(0.85*weightMaintenance);
    caloriesMax.textContent = Math.round(1.15*weightMaintenance);
};

function checkInputs() {
    let empty = textInputCopy.filter(function(copy){
    return copy.value.trim() === '';
    }).length;
    submitButton.disabled = empty !== 0;
}
checkInputs();

export {countCalories, checkInputs};
