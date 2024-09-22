document.getElementById('donateBtn').addEventListener('click', function() {
    // Button color change
    this.classList.remove('bg-gray-200');
    this.classList.add('bg-green-500');

    // Show the donate cards
    document.getElementById('donateCard1').classList.remove('hidden');
    document.getElementById('donateCard2').classList.remove('hidden');
    document.getElementById('donateCard3').classList.remove('hidden');
});

// Close buttons functionality
document.getElementById('closeBtn1').addEventListener('click', function() {
    document.getElementById('donateCard1').classList.add('hidden');
    // Reset button color
    const donateBtn = document.getElementById('donateBtn');
    donateBtn.classList.remove('bg-green-500');
    donateBtn.classList.add('bg-gray-200');
});

document.getElementById('closeBtn2').addEventListener('click', function() {
    document.getElementById('donateCard2').classList.add('hidden');
});

document.getElementById('closeBtn3').addEventListener('click', function() {
    document.getElementById('donateCard3').classList.add('hidden');
});

