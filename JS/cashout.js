
document.getElementById('cash-out-button').addEventListener('click',function(event){

    event.preventDefault();
    const cashOutAmount = document.getElementById('cash-out-amount').value;
    const cashOutAmountNumber = Number(cashOutAmount);
    const pinNumber = document.getElementById('cash-out-pin-number').value;
    
    if(pinNumber === '1234'){
        let balance = document.getElementById('total-balance').innerText;
        let balanceNumber = Number(balance);
        const newBalance = balanceNumber - cashOutAmountNumber;

        document.getElementById('total-balance').innerText = newBalance;
    }else{
        alert('your cash-out is not successful');
    }
})