function updateCountdown() {
//    wink wink
//    const targetDate = new Date();
//    targetDate.setDate(targetDate.getDate() + 8);
//    targetDate.setHours(0, 0, 0, 0);
//    targetDate.setHours(targetDate.getHours() - 6);

    const targetDate = new Date('March 7, 2025 00:00:00');

    function formatTimeRemaining(distance) {
        const days = Math.ceil(distance / (1000 * 60 * 60 * 24));
        if (days === 0) return 'today';
        return `${days} ${days === 1 ? 'day' : 'days'}`;
    }

    function tick() {
        const now = new Date();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById('countdown').textContent = "today";
            return;
        }

        document.getElementById('countdown').textContent = formatTimeRemaining(distance);
    }

    tick();
    setInterval(tick, 1000);
}
document.addEventListener('DOMContentLoaded', updateCountdown);
