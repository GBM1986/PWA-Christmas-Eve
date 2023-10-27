document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const christmasEve = new Date('2023-12-24T00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = christmasEve - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

        countdownElement.textContent = `${days} days until Christmas Eve`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./assets/js/service-worker.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
}