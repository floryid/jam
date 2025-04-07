function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // Update digital time with smooth transition
    const digitalTime = document.querySelector('.digital-time');
    digitalTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    digitalTime.style.opacity = 1 - (milliseconds / 1000);

    // Update date with modern format
    const dateElement = document.querySelector('.date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('id-ID', options);
    dateElement.style.opacity = 1 - (milliseconds / 1000);

    // Calculate rotation angles with smooth transitions
    const secondsDegrees = ((seconds * 1000 + milliseconds) / 60000) * 360;
    const minutesDegrees = ((minutes * 60000 + seconds * 1000 + milliseconds) / 3600000) * 360;
    const hoursDegrees = ((hours % 12 * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds) / 43200000) * 360;

    // Rotate hands
    const secondHand = document.querySelector('.seconds');
    const minuteHand = document.querySelector('.minutes');
    const hourHand = document.querySelector('.hours');

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Update clock more frequently for smoother animation
setInterval(updateClock, 50);

// Initial update
updateClock();