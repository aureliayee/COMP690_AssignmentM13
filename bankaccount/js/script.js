// The Bank Account Application (Creating a Closure Function)

// In this simple bank account application, you will use closures as a way to maintain state (to keep track of the account balance), to offer external code a way to get and set information (make a deposit or get the current balance), and to protect data (like the balance) from inappropriate tampering. To successfully complete this part of the assignment, follow the steps outlined below:

// Part 1 – The UI

// Within the web page, add buttons for Name, Deposit, and Withdrawal.
// When the user clicks the Name button, a prompt should appear that allows the user to enter their name.
// When the user clicks the Deposit button, a prompt should appear that allows the user to enter an amount to deposit.
// When the user clicks the Withdrawal button, a prompt should appear that allows the user to enter an amount to withdrawal.
// Add a div element that will be used to display the user’s name and their balance as they deposit and withdrawal money.

// Part 2 – The Closure Function

// Create a function called bankAccount that accepts a single parameter: ownerName.
// Add local variables balance and owner. Owner should be set by the incoming parameter.
// Return an object with methods for withdrawal that accepts a parameter (withdrawalAmount), deposit that accepts a parameter (depositAmount), getBalance(), and getOwnerName().
// Add validation to ensure only appropriate withdrawals and deposits are allowed.
// The balance and ownerName methods will return the values of the private variables.
// The withdrawal function will withdrawal money from the owner’s bank account and the balance should be reflected.
// The deposit function should add money to the owner’s bank account and the balance should be reflected.