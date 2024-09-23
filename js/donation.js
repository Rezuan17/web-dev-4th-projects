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

    // Hide donation cards
    document.getElementById('donateCard1').classList.add('hidden');
    document.getElementById('donateCard2').classList.add('hidden');
    document.getElementById('donateCard3').classList.add('hidden');

    // Show history section
    historySection.classList.remove('hidden');
});

// Donation button click for each card
document.getElementById('donateClick1').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('inputDonate1').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid positive amount.');
        return;
    }

    updateTotalDonation(amount);
    openModal(amount);

    // Record donation in history
    recordDonation('Flood Relief in Noakhali', amount);
});

document.getElementById('donateClick2').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('inputDonate2').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid positive amount.');
        return;
    }

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

// Blog button e click event listener
document.getElementById('blogBtn').addEventListener('click', function() {
    // Redirect to the home page
    window.location.href = '/home.html'; 
});










