let totalDonation = 5500; // Initial total donation
document.getElementById('totalDonation').innerText = totalDonation + ' BDT';

// Function to update the total donation display
function updateTotalDonation(amount) {
    totalDonation -= amount;
    document.getElementById('totalDonation').innerText = totalDonation + ' BDT';
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

    document.getElementById('donateCard1').classList.add('hidden');
    document.getElementById('donateCard2').classList.add('hidden');
    document.getElementById('donateCard3').classList.add('hidden');
    historySection.classList.remove('hidden');
});

// Function to add donation to history
function addToHistory(donationAmount, location) {
    const historyList = document.getElementById('historyList');
    const date = new Date().toLocaleString();
    const historyItem = document.createElement('div');
    historyItem.className = 'border p-2 mb-2';
    historyItem.innerHTML = `<strong>${donationAmount} BDT</strong> donated for <strong>${location}</strong> on ${date}`;
    historyList.appendChild(historyItem);
}

// Donation logic for each card
function setupDonationCard(cardId, inputId, moneyId, clickId, location) {
    document.getElementById(clickId).addEventListener('click', function() {
        const donationAmount = parseFloat(document.getElementById(inputId).value);
        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert('Please enter a valid donation amount!');
            return;
        }
        
        // Update total donation
        updateTotalDonation(donationAmount);
        
        // Update card money display
        const currentMoney = parseFloat(document.getElementById(moneyId).innerText) || 0;
        document.getElementById(moneyId).innerText = currentMoney + donationAmount + ' BDT';

        // Add to history
        addToHistory(donationAmount, location);

        // Open modal
        openModal(donationAmount);
        
        // Clear input
        document.getElementById(inputId).value = '';
    });
}

// Set up donation cards
setupDonationCard('donateCard1', 'inputDonate1', 'money1', 'donateClick1', 'Flood at Noakhali');
setupDonationCard('donateCard2', 'inputDonate2', 'money2', 'donateClick2', 'Flood Relief in Feni');
setupDonationCard('donateCard3', 'inputDonate3', 'money3', 'donateClick3', 'Aid for Injured in the Quota Movement');








