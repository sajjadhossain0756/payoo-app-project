
function getInputValueById(id){
     const inputValue = document.getElementById(id).value;
     const inputValueNumber = parseFloat(inputValue);
     return inputValueNumber;
}

function getTextValueById(id){
    const totalBalance = document.getElementById(id).innerText;
    const totalBalanceNumber = parseFloat(totalBalance);
    return totalBalanceNumber;
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
    
}