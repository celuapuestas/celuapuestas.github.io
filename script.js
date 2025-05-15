document.addEventListener('DOMContentLoaded', () => {
    // Efecto de pulsación mejorado
    const buttons = document.querySelectorAll('a[href^="#"], .cta-button, .whatsapp-link');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if(button.getAttribute('href') === '#contact') {
                e.preventDefault();
                document.querySelector(button.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            // Efecto de pulsación con will-change
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = button.classList.contains('cta-button') ? 'translateY(-3px) translateZ(10px)' : '';
            }, 200);
        });
    });
    
    // Optimización de scroll pasivo
    window.addEventListener('scroll', () => {
        // Lógica de scroll optimizada
    }, { passive: true });
    
    // Precarga de recursos críticos
    if('connection' in navigator && navigator.connection.saveData !== true) {
        const img = new Image();
        img.src = 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
    }
});

// Service Worker para caché (opcional)
if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}