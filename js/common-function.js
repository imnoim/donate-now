// common function

function getInputFieldValueById (id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getInnerTextById (id) {
    const innerText = document.getElementById(id).innerText;
    const innerTextNumber = parseFloat(innerText);
    return innerTextNumber;
}