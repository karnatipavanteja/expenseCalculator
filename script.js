let desid=document.getElementById('desId');
let amoid=document.getElementById('amoId');
let incomeRef=document.getElementById('income')
let select=document.getElementById('select-type')
let expenseRef=document.getElementById('expences')
function fun() {
   if (select='expence') {
    incomeRef.innerText=amoid.value;
   }else{
    expenseRef.innerText=amoid.value;
   }
}
let list=document.getElementById('list')
