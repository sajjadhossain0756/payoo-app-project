
document.getElementById('feature-cash-out-btn').addEventListener('click',function(){
       const addMoneyForm = document.getElementById('add-money-form');
       const cashOutForm = document.getElementById('cash-out-form');

       addMoneyForm.classList.add('hidden');
       cashOutForm.classList.remove('hidden');
})

document.getElementById('feature-add-money-btn').addEventListener('click',function(){
    const addMoneyForm = document.getElementById('add-money-form');
    const cashOutForm = document.getElementById('cash-out-form');

    addMoneyForm.classList.remove('hidden');
    cashOutForm.classList.add('hidden');
})