// noakhali

document.getElementById('btn-noakhali-donate').addEventListener('click', function (event) {
    event.preventDefault();

    const donateAmount = getInputFieldValueById('noakhali-input-field');
    const noakhaliTotalDonation = getInnerTextById('noakhali-current-balance');
    const accountBalance = getInnerTextById('account-balance');

    if (isNaN(donateAmount) === false) {
        if (donateAmount > 0) {
            if (donateAmount <= accountBalance) {
                const newNoakhaliTotalBalance = noakhaliTotalDonation + donateAmount;
                document.getElementById('noakhali-current-balance').innerText = newNoakhaliTotalBalance;

                document.getElementById('donate-confirmation-modal').showModal();

                const newAccountBalance = accountBalance - donateAmount;
                document.getElementById('account-balance').innerText = newAccountBalance;

                document.getElementById('noakhali-input-field').value = '';

                // add transaction details to history section

                let today = new Date();

                const div = document.createElement('div');
                div.classList.add('p-5');
                div.classList.add('lg:p-7');
                div.classList.add('border');
                div.classList.add('border-gray-200');
                div.classList.add('rounded-lg');
                div.innerHTML = `
                <h4 class = "text-2xl font-bold">${donateAmount} Taka is Donated for Flood at Noakhali, Bangladesh</h4>
                <p class ="text-gray-500">Date: ${today}</p>
            `
                document.getElementById('history-section').appendChild(div);

            }
            else {
                alert('out of balance');
            }
        }
        else {
            alert('donate amount should be a positive number');
        }
    }
    else {
        alert('donate amount should be a number');
    }
});

// feni

document.getElementById('btn-feni-donate').addEventListener('click', function (event) {
    event.preventDefault();

    const donateAmount = getInputFieldValueById('feni-input-amount');
    const feniTotalDonation = getInnerTextById('feni-total-donation');
    const accountBalance = getInnerTextById('account-balance');

    if (isNaN(donateAmount) === false) {
        if (donateAmount > 0) {
            if (donateAmount <= accountBalance) {
                const newFeniTotalBalance = feniTotalDonation + donateAmount;
                document.getElementById('feni-total-donation').innerText = newFeniTotalBalance;

                document.getElementById('donate-confirmation-modal').showModal();

                const newAccountBalance = accountBalance - donateAmount;
                document.getElementById('account-balance').innerText = newAccountBalance;

                document.getElementById('feni-input-amount').value = '';

                // add transaction details to history section

                let today = new Date();

                const div = document.createElement('div');
                div.classList.add('p-5');
                div.classList.add('lg:p-7');
                div.classList.add('border');
                div.classList.add('border-gray-200');
                div.classList.add('rounded-lg');
                div.innerHTML = `
                <h4 class = "text-2xl font-bold">${donateAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
                <p class ="text-gray-500">Date: ${today}</p>
            `
                document.getElementById('history-section').appendChild(div);
            }
            else {
                alert('out of balance');
            }
        }
        else {
            alert('donate amount should be a positive number');
        }
    }
    else {
        alert('donate amount should be a number');
    }
});

// quota-movement

document.getElementById('btn-quota-movement').addEventListener('click', function (event) {
    event.preventDefault();

    const donateAmount = getInputFieldValueById('donate-amount-for-quota');
    const quotaMovementTotalDonation = getInnerTextById('quota-movement-total-donation');
    const accountBalance = getInnerTextById('account-balance');

    if (isNaN(donateAmount) === false) {
        if (donateAmount > 0) {
            if (donateAmount <= accountBalance) {
                const newQuotaTotalBalance = quotaMovementTotalDonation + donateAmount;
                document.getElementById('quota-movement-total-donation').innerText = newQuotaTotalBalance;

                document.getElementById('donate-confirmation-modal').showModal();

                const newAccountBalance = accountBalance - donateAmount;
                document.getElementById('account-balance').innerText = newAccountBalance;

                document.getElementById('donate-amount-for-quota').value = '';

                // add transaction details to history section

                let today = new Date();

                const div = document.createElement('div');
                div.classList.add('p-5');
                div.classList.add('lg:p-7');
                div.classList.add('border');
                div.classList.add('border-gray-200');
                div.classList.add('rounded-lg');
                div.innerHTML = `
                <h4 class = "text-2xl font-bold">${donateAmount} Taka is Donated for Injured in the Quota Movement</h4>
                <p class ="text-gray-500">Date: ${today}</p>
            `
                document.getElementById('history-section').appendChild(div);
            }
            else {
                alert('out of balance');
            }
        }
        else {
            alert('donate amount should be a positive number');
        }
    }
    else {
        alert('donate amount should be a number');
    }
});