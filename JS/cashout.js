
document.getElementById('cash-out-button').addEventListener('click',function(event){

    event.preventDefault();
    // const cashOutAmount = document.getElementById('cash-out-amount').value;
    // const cashOutAmountNumber = Number(cashOutAmount);
    // const pinNumber = document.getElementById('cash-out-pin-number').value;

    const cashOutAmount = getInputValueById('cash-out-amount');
    const pinNumber = getInputValueById('cash-out-pin-number');
    
    if(pinNumber === 1234){
        // let balance = document.getElementById('total-balance').innerText;
        // let balanceNumber = Number(balance);

        const accountBalance = getTextValueById('total-balance');
        const newBalance = accountBalance - cashOutAmount;

        document.getElementById('total-balance').innerText = newBalance;

        const p = document.createElement('p');
              p.innerText = `${cashOutAmount}taka cash-out is successful`;
              document.getElementById('transaction-container').appendChild(p);
              p.style.backgroundColor = 'red';
    }else{
        alert('your cash-out is not successful');
    }
})