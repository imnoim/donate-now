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

function showSectionById (id) {
    document.getElementById('donation-section').classList.add('hidden');

    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}