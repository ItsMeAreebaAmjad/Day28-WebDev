document.addEventListener("DOMContentLoaded", function () {
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        hours = hours.toString().padStart(2, 0);
        const minutes = now.getMinutes().toString().padStart(2, 0);
        const seconds = now.getSeconds().toString().padStart(2, 0);
        const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
        
        // Use getElementsByClassName and select the first element
        const clockElement = document.getElementsByClassName("clock")[0];
        
        // Check if the element exists before updating its textContent
        if (clockElement) {
            clockElement.textContent = timeString;
        } else {
            console.error("Element with class 'clock' not found");
        }
    }

    updateClock();
    setInterval(updateClock, 1000);
});
