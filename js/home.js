

document.getElementById('blogBtnClick').addEventListener('click', function() {
    this.classList.remove('bg-gray-200');
    this.classList.add('bg-green-500');
    window.location.href = 'index.html'; // Navigate to index.html
});

document.getElementById('backBtn').addEventListener('click', function() {
    window.history.back(); // Go back to the previous page
});



