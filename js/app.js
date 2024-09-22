
document.getElementById('get-started').addEventListener('click', function () {
    const donationAmount = parseFloat(document.getElementById('donation-amount').value);
    if (donationAmount <= 0 || isNaN(donationAmount)) {
        return alert(' type number');
    }

    const inputAmount = document.getElementById('input-amount');
    inputAmount.innerText = donationAmount;

    const totalAmount = document.getElementById('total-amount').innerText;
    const increage = totalAmount - donationAmount;

    document.getElementById('total-amount').innerHTML = increage;


    const div = document.createElement('div');
    div.innerHTML = `
    <div class="mt-10 shadow-xl bg-white px-20 border">
     <p class="font-bold text-2xl">${donationAmount} Taka is Donated for famine-2024at Feni, Bangladesh</p>
     <p class="text-xl  my-5 p-5"> Date: ${new Date().toLocaleDateString()},${new Date().toLocaleTimeString()}.${new Date().toLocaleString()}</p>
    </div>
    `
    const historyList = document.getElementById('history-list');
    historyList.insertBefore(div, historyList.firstChild);
    
  
})

document.getElementById('get-started-2').addEventListener('click', function () {
    const donationTk = parseFloat(document.getElementById('amount-donation-tk').value);

    if (donationTk <= 0 || isNaN(donationTk)) {
        return alert(' type number');
    }
    const totalDonastion = parseFloat(document.getElementById('donation-tk-input').innerText);
    const totalAmounts = totalDonastion + donationTk;

    document.getElementById('donation-tk-input').innerHTML = totalAmounts;

    const totalAmount = document.getElementById('total-amount').innerText;
    const increage = totalAmount - donationTk;
    document.getElementById('total-amount').innerHTML = increage;
})



document.getElementById('get-started3').addEventListener('click', function () {
    const donationInputValue = parseFloat(document.getElementById('donation-amount-input').value);

    if (donationInputValue <= 0 || isNaN(donationInputValue)) {
        return alert(' type a number')
    }

    const inputAmountQuota = parseFloat(document.getElementById('input-amount-quota').innerText);
    const totalDonastion = donationInputValue + inputAmountQuota;

    document.getElementById('input-amount-quota').innerHTML = totalDonastion;

    const totalAmount = document.getElementById('total-amount').innerText;
    const increage = totalAmount - donationInputValue;
    document.getElementById('total-amount').innerHTML = increage;
})

// history tab

const historyTab = document.getElementById('History-Tab');
const donasationTab = document.getElementById('donasation-tab');
historyTab.addEventListener('click', function () {
    historyTab.classList.add(
        "text-black",
        "bg-primary",
    )
    donasationTab.classList.remove(
        "bg-primary",
    )
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('help-section').classList.add('hidden');
});

// donation
donasationTab.addEventListener('click', function () {
    historyTab.classList.remove(
        "bg-primary",
        
    )
    donasationTab.classList.add(
        'bg-primary'
    )
    document.getElementById('history').classList.add('hidden');
    document.getElementById('help-section').classList.remove('hidden');
})


// const relodeBtn = document.getElementById('relod-btn');
// relodeBtn.addEventListener('click', function () {
//     window.location.replace();
// })