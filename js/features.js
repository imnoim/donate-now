document.getElementById('show-donation-section').addEventListener('click', function () {
    showSectionById('donation-section');
});

document.getElementById('show-history-section').addEventListener('click', function () {
    showSectionById('history-section');
});

const donateButton = document.getElementById('show-donation-section');
const historyButton = document.getElementById('show-history-section');

donateButton.addEventListener('click', function () {
    donateButton.classList.add('bg-primaryBg');
    historyButton.classList.remove('bg-primaryBg');
});

historyButton.addEventListener('click', function () {
    historyButton.classList.add('bg-primaryBg');
    donateButton.classList.remove('bg-primaryBg');
});