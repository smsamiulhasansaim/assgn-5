/* S M SAMIUL HASAN */
// main.js - Emergency Services Directory Functionality

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded' ,
function() {
// Initialize variables
    let likesCount = 0;
    let coinsCount = 100;
    let copyCount = 0;
    let callHistory = [];

    // DOM Elements
    const likesElement = document.querySelector('.likes span');
    const starsElement = document.querySelector('.stars span');
    const copyCountElement = document.querySelector('.copy-button span');
    const favoriteIcons = document.querySelectorAll('.favorite-icon');
    const callButtons = document.querySelectorAll('.call-btn');
    const copyButtons = document.querySelectorAll('.copy-btn');
    const clearHistoryBtn = document.querySelector('.clear-btn');
    const historyList = document.querySelector('.history-list');

// Update UI with initial values
    updateUI();

// Add event listeners to favorite icons
    favoriteIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            likesCount++;
            updateUI();
        });
    });
});