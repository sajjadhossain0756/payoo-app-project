
document.getElementById('add-money-button').addEventListener('click',function(event){

    event.preventDefault();
    // const addAmount = document.getElementById('add-amount').value;
    // const pinNumber = document.getElementById('pin-number').value;

    const addAmount = getInputValueById('add-amount');
    const pinNumber = getInputValueById('pin-number');
    if(pinNumber === 1234){
        // let balance = document.getElementById('total-balance').innerText;
        // let addMoney = Number(addAmount);
        // let totalBalance = Number(balance);

        let accountBalance = getTextValueById('total-balance');
        let newBalance = accountBalance + addAmount;
        
        document.getElementById('total-balance').innerText = newBalance;
        
    }
    else{
        alert('your add money is not successful');
    }
})