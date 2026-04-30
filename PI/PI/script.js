function resetNav() {
    document.querySelectorAll('.nav-item').forEach(function(item) {
        item.classList.remove('active');
    });
}

function goHome(button) {
    document.getElementById('home').classList.add('active');
    document.getElementById('credits').classList.remove('active');
    resetNav();
    if (button) button.classList.add('active');
    else document.querySelector('.nav-item[data-nav="home"]').classList.add('active');
}

function goCredits(button) {
    document.getElementById('credits').classList.add('active');
    document.getElementById('home').classList.remove('active');
    resetNav();
    if (button) button.classList.add('active');
    else document.querySelector('.nav-item[data-nav="credits"]').classList.add('active');
}

function goCamera(button) {
    resetNav();
    if (button) button.classList.add('active');
    document.getElementById('home').classList.add('active');
    document.getElementById('credits').classList.remove('active');
}

// Keep the correct nav state when page loads.
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.nav-item[data-nav="home"]').classList.add('active');
});