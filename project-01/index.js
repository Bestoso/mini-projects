const submitButton = document.getElementById('submit-button');
const displayer = document.getElementById('displayer');
const copy = document.getElementById('copy');

const lengthOpt = document.getElementById('length');
const lowercaseOpt = document.getElementById('lowercase');
const uppercaseOpt = document.getElementById('uppercase');
const numbersOpt = document.getElementById('numbers');
const symbolsOpt = document.getElementById('symbols');

const lowercase = 'abcdefghijklmnñopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const numbers = '1234567890';
const symbols = '!|#$%&/=?¡¿';

function generateRandomPassword( option = lowercase, codeLength = 6 ){
    let code = '';
    for (let i = 0; i < codeLength; i++){
        code += option.charAt(Math.floor(Math.random() * option.length));
    }
    displayer.value = code;
}

submitButton.addEventListener('click', () => {
    let option = '';
    let codeLength = lengthOpt.value;
    if (lowercaseOpt.checked) option += lowercase;
    if (uppercaseOpt.checked) option += uppercase;
    if (numbersOpt.checked) option += numbers;
    if (symbolsOpt.checked) option += symbols;
    if (option === '') option = lowercase;
    generateRandomPassword(option, codeLength);
})

const copyToClipboard = () => {
    displayer.select();
    navigator.clipboard.writeText(displayer.value);
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <p> Copied to clipboard! </p>
    `
    document.body.appendChild(modal);
    setTimeout(() => {
        modal.className = 'modal gone';
    }, 1000);
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 1600);
}

copy.addEventListener('click', copyToClipboard);

