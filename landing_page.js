const observerOptions = {
    root: null, // Pakai viewport sebagai acuan
    threshold: 0.20 // Elemen harus terlihat minimal 3% baru muncul
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Pas masuk layar
            entry.target.classList.add('active');
        } else {
            // Pas keluar layar, hapus class biar bisa muncul lagi nanti
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

const revealElements = document.querySelectorAll('.reveal');

// Kasih delay satu-satu biar munculnya berurutan (stagger)
revealElements.forEach((el, index) => {
    // Kita manipulasi transition-delay pake JS berdasarkan urutan (index)
    // Box 1: 0s, Box 2: 0.2s, Box 3: 0.4s, dst.
    const delay = (index % 3) * 0.1; // Modulo 3 kalo lu punya 3 kolom
    el.style.transitionDelay = `${delay}s`;
    
    observer.observe(el);
});