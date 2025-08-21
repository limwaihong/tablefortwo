/**
 * Time Display Module - GMT+8 Time
 * Updates the time display every second
 */

function updateTime() {
    // Get current time
    const now = new Date();
    
    // Convert to GMT+8 (Asia/Singapore timezone)
    const gmt8Time = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Singapore"}));
    
    // Format time as 12-hour with AM/PM
    const hours24 = gmt8Time.getHours();
    const minutes = gmt8Time.getMinutes().toString().padStart(2, '0');
    const seconds = gmt8Time.getSeconds().toString().padStart(2, '0');
    
    // Convert to 12-hour format
    const hours12 = hours24 === 0 ? 12 : hours24 > 12 ? hours24 - 12 : hours24;
    const ampm = hours24 >= 12 ? 'PM' : 'AM';
    const hoursFormatted = hours12.toString().padStart(2, '0');
    
    const timeString = `[${hoursFormatted}:${minutes}:${seconds} ${ampm} GMT+8]`;
    
    // Update the time display element
    const timeElement = document.querySelector('.nav-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// Initialize time display when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Update time immediately
    updateTime();
    
    // Update time every second
    setInterval(updateTime, 1000);
});
