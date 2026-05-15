let stream = null;

function updateNavIcons() {
    document.querySelectorAll('.nav-item').forEach(function(item) {
        const icon = item.querySelector('img');
        const iconName = item.getAttribute('data-icon');
        const isActive = item.classList.contains('active');
        if (icon && iconName) {
            icon.src = `img/${iconName}${isActive ? '-active.png' : '-nav.png'}`;
        }
    });
}

function resetNav() {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
}

async function pedirPermissao() {
    if (window.Capacitor && window.Capacitor.Plugins.Camera) {
        const status = await window.Capacitor.Plugins.Camera.checkPermissions();
        if (status.camera !== 'granted') {
            await window.Capacitor.Plugins.Camera.requestPermissions();
        }
    }
}

function fecharTodasAsTelas() {

    document.querySelectorAll('.screen').forEach(tela => {
        tela.classList.remove('active');
        tela.style.display = 'none';
    });
    
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
}

async function goCamera() {
    await pedirPermissao();
    fecharTodasAsTelas();
    const screen = document.getElementById('camera-screen');
    screen.style.display = 'flex';
    screen.classList.add('active');
    
    resetNav();
    document.querySelector('.nav-item[data-nav="camera"]').classList.add('active');
    updateNavIcons();

    try {
        const constraints = { 
            video: { 
                facingMode: { exact: "environment" } 
            }, 
            audio: false 
        };
        
        try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
        } catch (e) {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
        }
        
        const video = document.getElementById('video');
        video.srcObject = stream;
        await video.play();
    } catch (err) {
        alert("Erro ao acessar câmera: " + err.message);
    }
}

function goHome() {
    fecharTodasAsTelas();
    const screen = document.getElementById('home');
    screen.style.display = 'block';
    screen.classList.add('active');
    
    resetNav();
    document.querySelector('.nav-item[data-nav="home"]').classList.add('active');
    updateNavIcons();
}

function goCredits() {
    fecharTodasAsTelas();
    const screen = document.getElementById('credits');
    screen.style.display = 'block';
    screen.classList.add('active');
    
    resetNav();
    document.querySelector('.nav-item[data-nav="credits"]').classList.add('active');
    updateNavIcons();
}

function takePhoto() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    alert("Foto capturada com sucesso! Analisando...");
}

window.addEventListener('DOMContentLoaded', () => {
    updateNavIcons();
});