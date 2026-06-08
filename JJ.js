// Reveal Animations on Scroll
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));


// Mobile Menu Drawer toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

document.getElementById('menu-toggle').addEventListener('click', toggleMenu);


// Project database for modal
const projects = {
    'project-1': {
        title: 'Portfolio Genesis',
        cat: 'Digital Design / Development',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5N9CIqOtFTiJIeTLiOAuARRbVoiRIk_wZvUSs4Dm2aEW6yTsWYn-QPr5-fga_74pEuUXyjFrxncfubiGfokk9WKtTanr0zX0wjKSd7aFIagvpLNhJGZD_ia27YHI9iA9AjhG8S1hrvvDzveUcnlf37thsZxVQNGaQjbBYQBR7iAoNki6rhb67P9VfL64KnfW9HlCGBk1kfgwO96Wlv2wGJ4Q-nWcjqZDtWniKd-haV0Fcc3qK50vyvKeasBv-LDE0F2fY4eTVyo2I',
        desc: 'An ultra-minimalist, award-winning portfolio concept featuring fluid interactive typography, layered z-indexing, and modular architecture designed for high-end creatives.'
    },

    'project-2': {
        title: 'Lumina Analytics',
        cat: 'SaaS / Dashboard Architecture',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXWfg8yTIltwnISsxVw_QUY7fEcpDumSdNxwYe2F42B_oNCDTcUzvi74gus7XzgFQE0EyCKMtIjbmLqM5LX0XAk5kF7TarWrBijOeJcOP3pAyZphPXJVqND_j8hGaPs8X18Jxn0ZhWyraexEnVtwcGR2qFldcPX5y19pF7oEOg7xKVLC7UarJaP0GmcfgJBGnVz4obcLj7RhqavMm_n95RGPzCw21lYT2J0sehCLAYf_rCV3I7iNzKivTIp2c3u4lFBJ5b0vtySRQD',
        desc: 'A sophisticated customer relationship management dashboard featuring real-time telemetry, modular bento grids, and high-contrast styling for analytics teams.'
    }
};


// Open details dialog
function openModal(id) {
    const data = projects[id];

    if (!data) return;

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalCat').innerText = data.cat;
    document.getElementById('modalImg').src = data.img;
    document.getElementById('modalDesc').innerText = data.desc;

    const modal = document.getElementById('projectModal');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
}


// Close details dialog
function closeModal() {
    const modal = document.getElementById('projectModal');

    modal.classList.add('hidden');
    modal.classList.remove('flex');
}


// Handle Form Submission
function handleInquiry(e) {
    e.preventDefault();

    alert('Your message was successfully sent to Phenyo! Thank you.');

    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('messageInput').value = '';
}