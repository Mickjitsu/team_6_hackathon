document.addEventListener('DOMContentLoaded', (event) => {
    // Get the buttons by their IDs
    const getStartedButton = document.getElementById('get-started-btn');
    const howItWorksButton = document.getElementById('how-it-works-btn');
    const settingsButton = document.getElementById('settings-btn');

    // Add click event listeners to the buttons
    getStartedButton.addEventListener('click', () => {
        window.location.href = 'get-started.html';
    });

    howItWorksButton.addEventListener('click', () => {
        window.location.href = 'how-it-works.html';
    });

    settingsButton.addEventListener('click', () => {
        window.location.href = 'settings.html';
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     let scrollableDiv = document.getElementById('scrollableDiv');
//     console.log('scrollableDiv', scrollableDiv);


//     // Auto scroll the div
//     let scrollInterval = setInterval(() => {
//         scrollableDiv.scrollTop += 1; // Adjust this value to control the scroll speed
//         // Reset to top if the bottom is reached
//         if (scrollableDiv.scrollTop >= scrollableDiv.scrollHeight - scrollableDiv.clientHeight) {
//             scrollableDiv.scrollTop = 0;
//         }
//     }, 20); // Speed of the scrolling (20ms per scroll step)
// });
