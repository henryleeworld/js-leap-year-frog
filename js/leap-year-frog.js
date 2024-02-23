let isLeap = false;
const frog = document.querySelector('#frog');
const yearInput = document.querySelector('#year');
const eyeLeft = document.querySelector('#frogEyeLeft');
const eyeRight = document.querySelector('#frogEyeRight');
const yearForm = document.querySelector('#yearForm');
const leapMessage = document.querySelector('.leap');
const button = document.querySelector('button');

function leap() {
    if (!isLeap) {
        frog.classList.add('frog-jump');
    } else {
        frog.classList.add('frog-inverse-jump');
        setTimeout(() => {
            frog.classList = 'frog';
        }, 500);
    }
    leapMessage.classList.toggle('hidden');
    isLeap = !isLeap;
}

function handleFormSubmit(e) {
    e.preventDefault();
    const year = Number(yearInput.value);
    if (year <= 0 || year > 4000) return;
    var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (isLeapYear && !isLeap) {
        leap();
    } else if (!isLeapYear && isLeap) {
        leap();
    } else {
        eyeLeft.classList.add('blink');
        setTimeout(() => {
            eyeLeft.classList.remove('blink');
        }, 300);

        eyeRight.classList.add('blink');
        setTimeout(() => {
            eyeRight.classList.remove('blink');
        }, 300);
    }
}

yearForm.addEventListener('submit', handleFormSubmit);
button.addEventListener('click', handleFormSubmit);