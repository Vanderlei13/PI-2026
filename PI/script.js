function updateNavIcons() {
    document.querySelectorAll('.nav-item').forEach(function(item) {
        var icon = item.querySelector('img');
        var iconName = item.getAttribute('data-icon') || item.getAttribute('data-nav');
        if (!icon || !iconName) return;
        icon.src = 'img/' + iconName + (item.classList.contains('active') ? '-active.png' : '-nav.png');
    });
}

function resetNav() {
    document.querySelectorAll('.nav-item').forEach(function(item) {
        item.classList.remove('active');
    });
    updateNavIcons();
}

function goHome(button) {
    document.getElementById('home').classList.add('active');
    document.getElementById('credits').classList.remove('active');
    resetNav();
    if (button) button.classList.add('active');
    else document.querySelector('.nav-item[data-nav="home"]').classList.add('active');
    updateNavIcons();
}

function goCredits(button) {
    document.getElementById('credits').classList.add('active');
    document.getElementById('home').classList.remove('active');
    resetNav();
    if (button) button.classList.add('active');
    else document.querySelector('.nav-item[data-nav="credits"]').classList.add('active');
    updateNavIcons();
}

function goCamera(button) {
    resetNav();
    if (button) button.classList.add('active');
    document.getElementById('home').classList.add('active');
    document.getElementById('credits').classList.remove('active');
    updateNavIcons();
}

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.nav-item[data-nav="home"]').classList.add('active');
    updateNavIcons();
});