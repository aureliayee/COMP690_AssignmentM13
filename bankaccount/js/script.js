// The Bank Account Application (Creating a Closure Function)

//Helper Function
const $ = (id) => document.getElementById(id)

//Prompt for Name
const bankAccount = function(ownerName) {
    let balance = 0
    let owner = ownerName
    let depositAmt = 0
    let withdrawalAmt = 0
    const getOwnerName = function () {
        owner = prompt('Please enter your name')
        $('displayInfo').innerHTML = `Name: ${owner}<br>Balance: $${balance}`
        $('deposit').removeAttribute('disabled')
        $('withdrawal').removeAttribute('disabled')
    }
    const depositAmount = function() {
        depositAmt = parseInt(prompt('Please enter an amount to deposit:'))
        while (isNaN(depositAmt) || depositAmt.length > 0) {
            alert('Please enter a number')
            depositAmt = parseInt(prompt('Please enter an amount to deposit:'))
        } 
        balance += depositAmt
        getBalance()
    }
    const withdrawalAmount = function() {
        withdrawalAmt = parseInt(prompt('Please enter an amount to withdraw:'))
        while (isNaN(withdrawalAmt) || withdrawalAmt.length > 0) {
            alert('Please enter a number')
            withdrawalAmt = parseInt(prompt('Please enter an amount to deposit:'))
            if (withdrawalAmount>depositAmount) {
                alert('You do not have enough funds')
                withdrawalAmt = parseInt(prompt('Please enter an amount to deposit:'))
            }
        } 
        balance -= withdrawalAmt
        getBalance()
    }
    const getBalance = function() {
        $('displayInfo').innerHTML = `Name: ${owner}<br>Balance: $${balance}`
    }

    $('deposit').addEventListener('click', depositAmount)
    $('withdrawal').addEventListener('click', withdrawalAmount)
    $('name').addEventListener('click', getOwnerName)
}

const newbankAccount = bankAccount()