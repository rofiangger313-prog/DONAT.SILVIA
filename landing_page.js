const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Kalau elemen masuk area layar
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 }); // Muncul pas 10% bagian elemen kelihatan

// Ambil semua card produk dan suruh observer buat jagain
const produkCards = document.querySelectorAll('.produk-keunggulan');
produkCards.forEach((card) => observer.observe(card));