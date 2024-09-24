let totalDonation = 5500; // Initial total donation
document.getElementById('totalDonationDisplay').innerText = totalDonation + ' BDT';

// Function to update the total donation display
function updateTotalDonation(amount) {
    totalDonation -= amount;
    document.getElementById('totalDonationDisplay').innerText = totalDonation + ' BDT';
}

// Function to open modal
function openModal(donationAmount) {
    document.getElementById('modalMessage').innerText = `You have successfully donated ${donationAmount} BDT!`;
    document.getElementById('donationModal').classList.remove('hidden');
}

// Modal close button
document.getElementById('modalClose').addEventListener('click', function() {
    document.getElementById('donationModal').classList.add('hidden');
});

// Donate button click
document.getElementById('donateBtn').addEventListener('click', function() {
    this.classList.remove('bg-gray-200');
    this.classList.add('bg-green-500');

    // Show all donation cards
    document.getElementById('donateCard1').classList.remove('hidden');
    document.getElementById('donateCard2').classList.remove('hidden');
    document.getElementById('donateCard3').classList.remove('hidden');

    document.getElementById('historySection').classList.add('hidden');
    document.getElementById('historyBtn').classList.remove('bg-green-500');
    document.getElementById('historyBtn').classList.add('bg-gray-200');
});

// History button click
document.getElementById('historyBtn').addEventListener('click', function() {
    const donateBtn = document.getElementById('donateBtn');
    const historySection = document.getElementById('historySection');

    if (donateBtn.classList.contains('bg-green-500')) {
        donateBtn.classList.remove('bg-green-500');
        donateBtn.classList.add('bg-gray-200');
        this.classList.remove('bg-gray-200');
        this.classList.add('bg-green-500');
    }

    // Hide donation cards
    document.getElementById('donateCard1').classList.add('hidden');
    document.getElementById('donateCard2').classList.add('hidden');
    document.getElementById('donateCard3').classList.add('hidden');

    // Show history section
    historySection.classList.remove('hidden');
});

// Donation 1 button click for each card
document.getElementById('donateClick1').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('inputDonate1').value);
    if (!isNaN(amount) && amount > 0) {
        updateTotalDonation(amount);
        document.getElementById('money1').innerText = (parseFloat(document.getElementById('money1').innerText) + amount) + ' BDT';
        openModal(amount);
        document.getElementById('inputDonate1').value = ''; // ইনপুট ফিল্ড ক্লিয়ার করুন
    } else {
        alert("Please enter a valid donation amount.");
    }
});

document.getElementById('donateClick2').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('inputDonate2').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid positive amount.');
        return;
    }

     // Update card's donation amount
     const currentAmount2 = parseFloat(document.getElementById('money2').innerText.split(' ')[0]) || 0;
     document.getElementById('money2').innerText = (currentAmount2 + amount) + ' BDT';

    updateTotalDonation(amount);
    openModal(amount);

    // Record donation in history
    recordDonation('Flood Relief in Feni', amount);
});

document.getElementById('donateClick3').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('inputDonate3').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid positive amount.');
        return;
    }

    // Update card's donation amount
    const currentAmount3 = parseFloat(document.getElementById('money3').innerText.split(' ')[0]) || 0;
    document.getElementById('money3').innerText = (currentAmount3 + amount) + ' BDT';

    updateTotalDonation(amount);
    openModal(amount);

    // Record donation in history
    recordDonation('Aid for Injured in Quota Movement', amount);
});

// Function to record donations in history
function recordDonation(location, amount) {
    const historyList = document.getElementById('historyList');
    const date = new Date().toLocaleDateString();
    const historyItem = document.createElement('div');
    historyItem.classList.add('border', 'p-2', 'm-1', 'rounded-md');
    historyItem.innerText = `Amount: ${amount} BDT, Location: ${location}, Date: ${date}`;
    historyList.appendChild(historyItem);
}

document.getElementById('blogBtn').addEventListener('click', function() {
    window.location.href = 'home.html';
});













