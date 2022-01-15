const bill = document.getElementById('bill');
const people = document.getElementById('people');
const tipAmount = document.getElementById('tipAmount');
const totalPerson = document.getElementById('totalPerson');
const tipPercentage = document.getElementsByClassName('left__button');
const tipCustom = document.getElementsByClassName('left__input__custom');
const buttonReset = document.getElementById('reset__button');
let displayError = false;

for (let i = 0; i < tipPercentage.length; i++) {
    tipPercentage[i].addEventListener('click', function () {
        if (people.value === '0' || people.value === '') {
            let errorMessage = document.createElement('h2');
            errorMessage.className = 'left__title__error';
            errorMessage.id = 'error__message';
            errorMessage.innerText = 'Can\'t be zero';
            if (displayError === false) {
                document.getElementById("left__titles").appendChild(errorMessage);
                people.style.border = '2px solid red';
                displayError = true;
            }
        } else {
            for (let j = 0; j < tipPercentage.length; j++) {
                tipPercentage[j].classList.remove('left__button--selected');
            }
            tipCustom[0].classList.remove('left__button--selected');
            tipCustom[0].value = '';
            if (displayError) {
                document.getElementById('error__message').remove();
                people.style.border = '';
                displayError = false;
            }
            let totalBill = Number(bill.value);
            let totalPeople = Number(people.value);
            let percentage = Number(tipPercentage[i].value);
            tipAmountPerPerson = Number(((totalBill * percentage) / 100) / totalPeople);
            let tipAmountPerPersonRounded = tipAmountPerPerson.toFixed(2);
            tipAmount.innerText = `$ ${tipAmountPerPersonRounded}`;
            tipPercentage[i].classList.add('left__button--selected');
            let totalPerPerson = Number((totalBill / totalPeople) + tipAmountPerPerson);
            let totalPerPersonRounded = totalPerPerson.toFixed(2);
            totalPerson.innerText = `$ ${totalPerPersonRounded}`;
        }
    })
}


for (let i = 0; i < tipCustom.length; i++) {
    tipCustom[i].addEventListener('focusout', function () {
        if (people.value === '0' || people.value === '') {
            let errorMessage = document.createElement('h2');
            errorMessage.className = 'left__title__error';
            errorMessage.id = 'error__message';
            errorMessage.innerText = 'Can\'t be zero';
            if (displayError === false) {
                document.getElementById("left__titles").appendChild(errorMessage);
                people.style.border = '2px solid red';
                displayError = true;
            }
        } else {
            for (let j = 0; j < tipPercentage.length; j++) {
                tipPercentage[j].classList.remove('left__button--selected');
            }
            if (displayError) {
                document.getElementById('error__message').remove();
                people.style.border = '';
                displayError = false;
            }
            let totalBill = Number(bill.value);
            let totalPeople = Number(people.value);
            let percentage = Number(tipCustom[i].value);
            tipAmountPerPerson = Number(((totalBill * percentage) / 100) / totalPeople);
            let tipAmountPerPersonRounded = tipAmountPerPerson.toFixed(2);
            tipAmount.innerText = `$ ${tipAmountPerPersonRounded}`;
            tipCustom[i].classList.add('left__button--selected');
            let totalPerPerson = Number((totalBill / totalPeople) + tipAmountPerPerson);
            let totalPerPersonRounded = totalPerPerson.toFixed(2);
            totalPerson.innerText = `$ ${totalPerPersonRounded}`;
        }
    })
}

buttonReset.addEventListener('click', function () {
    bill.value = '';
    people.value = '';
    totalPerson.innerText = '$0.00';
    tipAmount.innerText = '$0.00';
    for (let i = 0; i < tipPercentage.length; i++) {
        tipPercentage[i].classList.remove('left__button--selected');
    }
    tipCustom[0].classList.remove('left__button--selected');
    tipCustom[0].value = '';
    people.style.border = '';
    if (displayError) {
        document.getElementById('error__message').remove();
        displayError = false;
    }
})