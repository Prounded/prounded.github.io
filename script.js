const lower_letter = document.getElementById('lower-letter');
const upper_letter = document.getElementById('upper-letter');
const symbols_letter = document.getElementById('symbols-letter');
const numbers = document.getElementById('number');
const display_result = document.getElementById('result-display');
const error_label = document.getElementById('information-label');
const submitted = document.getElementById('submitBtn');
const length_output = document.getElementById('length-password');

const lower_letterVar = 'abcdefghijklmnopqrstuvwxyz';
const upper_letterVar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberVar = '1234567890';
const symbolsVar = '!@#$%^&*()_+=-,.<>/?~`;:"\|' + `'`;

let passwords = String();
let variables = String();

function makePassword(){
    passwords = '';
    length_needed = length_output.value;
    console.log(`passwords : ${passwords}`);
    if (length_needed == 0){
        let text = error_label.value;
        console.log(text);
        if (text == undefined){
            error_label.textContent = '⚠️ Length required!';
        }
    }
    while (Number(length_needed) > passwords.length){
        let index = Math.floor(Math.random() * variables.length);
        console.log(`passwords : ${passwords}`);
        passwords += variables[index];
        console.log(`passwords : ${passwords}`);
    }
    if (Number(length_needed) == passwords.length){
        console.log('osk');
        display_result.textContent = passwords;
    }
}

function setVariables(){
    variables = ''
    if(lower_letter.checked){
        variables = variables + lower_letterVar;
    }
    if(upper_letter.checked){
        variables = variables + upper_letterVar;
    }
    if(symbols_letter.checked){
        variables = variables + symbolsVar;
    }
    if(numbers.checked){
        variables = variables + numberVar;
    }
    if (variables.length == 0){
        error_label.textContent = '⚠️ Condition required!';
    }
    else{
        error_label.textContent = '';
        makePassword()
    }
}

submitted.onclick = function(){
    setVariables();
}