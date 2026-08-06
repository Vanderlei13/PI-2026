// ==========================
// MaizeAI - script.js
// ==========================

// HEADER AO ROLAR

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// ==========================
// ANIMAÇÃO DAS SEÇÕES
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ==========================
// MENU ATIVO
// ==========================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// BOTÃO DOWNLOAD
// ==========================

const downloadButton = document.querySelector(".btn-download");

if (downloadButton) {

    downloadButton.addEventListener("click", () => {

        downloadButton.innerHTML = "⬇ Baixando...";

        setTimeout(() => {

            downloadButton.innerHTML = "⬇ Download APK";

        }, 2000);

    });

}

// ==========================
// ANO AUTOMÁTICO
// ==========================

const copy = document.querySelector(".copy");

if (copy) {

    copy.innerHTML =
        `© ${new Date().getFullYear()} MaizeAI • Todos os direitos reservados.`;

}