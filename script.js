//login button handler
document.getElementById('login-btn').addEventListener('click', function () {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('transaction-area').style.opacity = 1;
})

//add function
function getInputValue(id) {
    let amount = document.getElementById(id).value;
    amount = parseFloat(amount);
    return amount;
}

function updateAmount(id, amountNumber) {
    let amount = document.getElementById(id).innerText;
    amount = parseFloat(amount);
    let total = amount + amountNumber;
    document.getElementById(id).innerText = total;
}
//deposit button handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    let depositAmount = getInputValue('deposit-amount');

 if (depositAmount<0){
    alert(`The doposit amount can't be negative.`);
 }
 else{
    updateAmount('current-deposit', depositAmount);
    updateAmount('current-balance', depositAmount);
    document.getElementById('deposit-amount').value = '';
}

})

// withdraw button handler

document.getElementById('withdraw-btn').addEventListener('click', function () {
    let withdrawAmount = getInputValue('withdraw-amount');
    if(withdrawAmount<0){
        alert(`The withdraw amount can't be negative.`);
    }
    else{
        updateAmount('current-withdraw', withdrawAmount);
    updateAmount('current-balance', -1 * withdrawAmount);
    document.getElementById('withdraw-amount').value = '';
    }
})