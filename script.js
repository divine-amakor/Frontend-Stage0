// Display current time in milliseconds
function updateTime() {
  const timeElement = document.getElementById("user-time");
  timeElement.textContent = Date.now();
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  updateTime();
  // Optional: update every second
  setInterval(updateTime, 1000);
});
