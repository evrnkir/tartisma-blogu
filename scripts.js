// scripts.js

// Bu fonksiyon, body etiketine "dark-theme" sınıfını ekleyip kaldırarak temayı değiştirir.
function toggleTheme() {
    // 1. Temayı Değiştirme (CSS'teki stiller bu sınıfa bağlıdır)
    document.body.classList.toggle('dark-theme');

    // 2. Kullanıcının tercihini kaydetme (Böylece sayfa yenilendiğinde tema hatırlanır)
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// 3. Sayfa yüklendiğinde daha önceki tercihi kontrol etme (Hemen çalışan fonksiyon)
(function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    // Eğer tarayıcının hafızasında 'dark' olarak kayıtlıysa, tema hemen karanlık moda ayarlanır.
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
})();
// Scroll-to-Top Butonu İşlevi
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Kullanıcı 300px aşağı kaydırınca butonu göster
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Butona tıklandığında sayfanın en üstüne kaydır
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Yumuşak kaydırma
    });
});