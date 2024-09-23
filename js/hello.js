document.getElementById('donateBtn').addEventListener('click', function() {
    // Button color change
    this.classList.remove('bg-gray-200');
    this.classList.add('bg-green-500');

    // Show the donate cards
    document.getElementById('donateCard1').classList.remove('hidden');
    document.getElementById('donateCard2').classList.remove('hidden');
    document.getElementById('donateCard3').classList.remove('hidden');
});

// Donation logic for each card
document.getElementById('donateClick1').addEventListener('click', function() {
    const donationAmount = parseFloat(document.getElementById('inputDonate1').value);
    const currentAmount = parseFloat(document.getElementById('money1').innerText);

    // Check for invalid input
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid positive amount.");
    } else {
        const newAmount = currentAmount + donationAmount;
        document.getElementById('money1').innerText = newAmount + " BDT";
        updateTotalDonation(donationAmount);
        document.getElementById('inputDonate1').value = ""; // Clear input
    }
});

// Repeat for other donation buttons
document.getElementById('donateClick2').addEventListener('click', function() {
    const donationAmount = parseFloat(document.getElementById('inputDonate2').value);
    const currentAmount = parseFloat(document.getElementById('money2').innerText);

    // Check for invalid input
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid positive amount.");
    } else {
        const newAmount = currentAmount + donationAmount;
        document.getElementById('money2').innerText = newAmount + " BDT";
        updateTotalDonation(donationAmount);
        document.getElementById('inputDonate2').value = ""; // Clear input
    }
});

document.getElementById('donateClick3').addEventListener('click', function() {
    const donationAmount = parseFloat(document.getElementById('inputDonate3').value);
    const currentAmount = parseFloat(document.getElementById('money3').innerText);

    // Check for invalid input
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid positive amount.");
    } else {
        const newAmount = currentAmount + donationAmount;
        document.getElementById('money3').innerText = newAmount + " BDT";
        updateTotalDonation(donationAmount);
        document.getElementById('inputDonate3').value = ""; // Clear input
    }
});

// Function to update the total donation amount
function updateTotalDonation(donationAmount) {
    const totalElement = document.getElementById('totalDonation');
    const currentTotal = parseFloat(totalElement.innerText);
    totalElement.innerText = (currentTotal - donationAmount).toFixed(2) + " BDT";
}
