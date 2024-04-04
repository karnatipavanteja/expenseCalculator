// Get references to HTML elements
let desid = document.getElementById('desId');
let amoid = document.getElementById('amoId');
let incomeRef = document.getElementById('income');
let select = document.getElementById('select-type');
let expenseRef = document.getElementById('expenses');
let savingsRef = document.getElementById('savings');
let date = document.getElementById('date');
let list = document.getElementById('list');

// Initialize income, expenses, and savings to 0
incomeRef.querySelector('span').textContent = "0";
expenseRef.querySelector('span').textContent = "0";
savingsRef.querySelector('span').textContent = "0";

// Function to handle adding income or expenses
function fun() {
    let Name = desid.value;
    let Amount = parseFloat(amoid.value);
    let date_val = date.value;

    if (select.value === 'income') {
        if (Name === "" || Amount === "" || date_val === "" || Amount < 0) {
            alert('Enter correct details for income');
        } else {
            list.innerHTML += `<li>Credited with ${Amount} on ${date_val}</li>`;
            incomeRef.querySelector('span').textContent = parseFloat(incomeRef.querySelector('span').textContent) + Amount;
            savingsRef.querySelector('span').textContent = parseFloat(savingsRef.querySelector('span').textContent) + Amount;
            // Reset input fields
            desid.value = "";
            amoid.value = "";
            date.value = "";
        }
    } else if (select.value === 'expense') {
        if (Name === "" || Amount === "" || date_val === "" || Amount < 0) {
            alert('Enter correct details for expenses');
        } else {
            list.innerHTML += `<li>Debited with ${Amount} on ${date_val}</li>`;
            expenseRef.querySelector('span').textContent = parseFloat(expenseRef.querySelector('span').textContent) + Amount;
            savingsRef.querySelector('span').textContent = parseFloat(savingsRef.querySelector('span').textContent) - Amount;
            // Reset input fields
            desid.value = "";
            amoid.value = "";
            date.value = "";
        }
    }
}

// Add event listener to the submit button
let submitBtn = document.getElementById('submit-Btn');
submitBtn.addEventListener('click', fun);

// Add event listener to the calculate tax button
let calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const income = parseFloat(incomeRef.querySelector('span').textContent);
    const regime = document.getElementById('regime').value;

    
    
        

let tax =0;
    if (regime === 'old') {
        if (income <= 250000) {
            tax = 0;
        } else if (income <= 500000) {
            tax = (income - 250000) * 0.05;
        } else if (income <= 1000000) {
            tax = 12500 + (income - 500000) * 0.1;
        } else if (income <= 1500000) {
            tax = 87500 + (income - 1000000) * 0.15;
        } else if (income <= 2500000) {
            tax = 187500 + (income - 1500000) * 0.2;
        } else {
            tax = 387500 + (income - 2500000) * 0.25;
        }
    } else if (regime === 'new') {
        if (income <= 250000) {
            tax = 0;
        } else if (income <= 500000) {
            tax = (income - 250000) * 0.05;
        } else if (income <= 750000) {
            tax = 12500 + (income - 500000) * 0.1;
        } else if (income <= 1000000) {
            tax = 37500 + (income - 750000) * 0.15;
        } else if (income <= 1250000) {
            tax = 75000 + (income - 1000000) * 0.2;
        } else if (income <= 1500000) {
            tax = 125000 + (income - 1250000) * 0.25;
        } else if (income <= 1875000) {
            tax = 187500 + (income - 1500000) * 0.3;
        } else if (income <= 2500000) {
            tax = 312500 + (income - 1875000) * 0.35;
        } else {
            tax = 562500 + (income - 2500000) * 0.3;
        }
    }

    document.getElementById('result').innerHTML = `
        <p>Tax to be paid: ${tax}</p>
    `;
// });
        // Tax calculation for old regime
        // ...
    
    // Integrate Razorpay payment
    var options = {
        "key": "rzp_test_u33fzvc9rVrm4X", // Enter the Key ID generated from the Dashboard
        "amount": tax * 100, // Amount is in currency subunits. Convert tax to currency units (e.g., paisa to rupees)
        "currency": "INR",
        "name": "Acme Corp", // Your business name
        "description": "Tax Payment",
        // Add other necessary options
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
});
