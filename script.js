const cities = {
    "London": 0,  // UTC+0
    "Amsterdam": 1,  // UTC+1
    "Mexico": -5,  // UTC-5
    "Tokyo": 9  // UTC+9
};

// Function to update clocks
function updateClocks() {
    const clockItems = document.querySelectorAll('.clock-item');
    clockItems.forEach(clock => {
        const city = clock.getAttribute('data-city');
        const timezoneOffset = cities[city];
        const currentDate = new Date();
        const utcTime = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
        const cityTime = new Date(utcTime + (timezoneOffset * 3600000));

        const hours = String(cityTime.getHours()).padStart(2, '0');
        const minutes = String(cityTime.getMinutes()).padStart(2, '0');
        const seconds = String(cityTime.getSeconds()).padStart(2, '0');

        clock.querySelector('.time').textContent = `${hours}:${minutes}:${seconds}`;
    });
}

// Update clocks every second
setInterval(updateClocks, 1000);

// Initial call to display time immediately
updateClocks();

