// Анимация при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.container > *');
    
    elements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Анимация аватарки при наведении
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        avatar.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
});

// Плавная прокрутка для кнопок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
