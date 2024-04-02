let desid = document.getElementById('desId');
let amoid = document.getElementById('amoId');
let incomeRef = document.getElementById('income');
let select = document.getElementById('select-type');
let expenseRef = document.getElementById('expenses');
let savingsRef = document.getElementById('savings');
let date = document.getElementById('date');
let list = document.getElementById('list');

function fun() {
    let Name = desid.value;
    let Amount = parseFloat(amoid.value);
    let date_val = date.value;

    if (select.value === 'income') {
        if (Name === "" || isNaN(Amount) || isNaN(Date.parse(date_val)) || Amount < 0) {
            alert('Enter correct details for income');
        } else {
            list.innerHTML += `<li>${Name} with ${Amount} on ${date_val}</li>`;
            incomeRef.innerHTML = parseFloat(incomeRef.innerHTML) + Amount;
            savingsRef.innerHTML = parseFloat(savingsRef.innerHTML) + Amount;
            // Reset input fields
            desid.value = "";
            amoid.value = "";
            date.value = "";
        }
    } else if (select.value === 'expense') {
        if (Name === "" || isNaN(Amount) || isNaN(Date.parse(date_val)) || Amount < 0) {
            alert('Enter correct details for expenses');
        } else {
            list.innerHTML += `<li>${Name} with ${Amount} on ${date_val}</li>`;
            expenseRef.innerHTML = parseFloat(expenseRef.innerHTML) + Amount;
            savingsRef.innerHTML = parseFloat(savingsRef.innerHTML) - Amount;
            // Reset input fields
            desid.value = "";
            amoid.value = "";
            date.value = "";
        }
    }
}

let submitBtn = document.getElementById('submit-Btn');
submitBtn.addEventListener('click', fun);
