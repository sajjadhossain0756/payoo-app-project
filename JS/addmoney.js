
document.getElementById('add-money-button').addEventListener('click',function(event){

    event.preventDefault();
    const addAmount = document.getElementById('add-amount').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(pinNumber === '1234'){
        let balance = document.getElementById('total-balance').innerText;
    
        let addMoney = Number(addAmount);
        let totalBalance = Number(balance);

        let newBalance = totalBalance + addMoney;
        
        document.getElementById('total-balance').innerText = newBalance;
        
    
    }
    else{
        alert('you money is not added');
    }
})