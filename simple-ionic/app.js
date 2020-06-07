const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const clearBtn = document.querySelector('#btn-clear');
const addBtn = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expense-list');
const totalExpenses = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let total = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

async function alertShown() {
    const alert = await alertController.create({
        header: 'Invalid inputs',
        message: 'Please enter valid reason and amount!',
        buttons: ['Okay']
    });

    await alert.present();
}

addBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        alertShown()
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + " : $" + enteredAmount;

    expensesList.appendChild(newItem)
    total += +enteredAmount;

    totalExpenses.textContent = total
    clear();
});

clearBtn.addEventListener('click', clear)