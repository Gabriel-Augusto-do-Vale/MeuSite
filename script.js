document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.drop-animation');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });

    const line = document.querySelector('.animated-line');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                line.style.animation = 'slide-in 1s forwards';
            }
        });
    }, { threshold: 0.5 }); // Ajuste o threshold conforme necessário

    observer.observe(line);
});
