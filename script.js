// Get references to HTML elements
let desid = document.getElementById('desId');
let amoid = document.getElementById('amoId');
let incomeRef = document.getElementById('income');
let select = document.getElementById('select-type');
let expenseRef = document.getElementById('expenses');
let savingsRef = document.getElementById('savings');
let date = document.getElementById('date');
let list = document.getElementById('list');
let ctx = document.getElementById('myChart').getContext('2d');

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
        }
      
         else {
            list.innerHTML += `<li>Debited with ${Amount} on ${date_val}</li>`;
            expenseRef.querySelector('span').textContent = parseFloat(expenseRef.querySelector('span').textContent) + Amount;
            savingsRef.querySelector('span').textContent = parseFloat(savingsRef.querySelector('span').textContent) - Amount;
            // Reset input fields
            desid.value = "";
            amoid.value = "";
            date.value = "";
        }
    }

    // Define the data for the chart
    const chartData = {
        labels: ['Expenses', 'Income', 'Savings'],
        datasets: [{
            label: 'Amount',
            data: [
                parseFloat(expenseRef.querySelector('span').textContent),
                parseFloat(incomeRef.querySelector('span').textContent),
                parseFloat(savingsRef.querySelector('span').textContent)
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Expenses
                'rgba(54, 162, 235, 0.2)',  // Income
                'rgba(75, 192, 192, 0.2)'   // Savings
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Create the chart
    new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Add event listener to the submit button
let submitBtn = document.getElementById('submit-Btn');
submitBtn.addEventListener('click', fun);
