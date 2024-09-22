document.getElementById('donateBtn').addEventListener('click', function() {
    // Button color change
    this.classList.remove('bg-gray-200');
    this.classList.add('bg-green-500');
    
    // Show the donate card
    document.getElementById('donateCard').classList.remove('hidden');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    // Hide the donate card
    document.getElementById('donateCard').classList.add('hidden');

    // Reset button color
    const donateBtn = document.getElementById('donateBtn');
    donateBtn.classList.remove('bg-green-500');
    donateBtn.classList.add('bg-gray-200');
});