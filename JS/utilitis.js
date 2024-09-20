
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
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.remove('hidden');

    const toggleSection = document.getElementById(id).classList.add('hidden');
    return toggleSection;
}