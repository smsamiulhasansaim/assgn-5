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


// Add event listeners to call buttons
    callButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const serviceName = card.querySelector('.card-title-bangla').textContent;
            const serviceNumber = card.querySelector('.card-number').textContent;
            
            // Check if user has enough coins
            if (coinsCount < 20) {
                alert(`You don't have enough coins to call ${serviceName}. You need 20 coins but you only have ${coinsCount}.`);
                return;
            }
            
            // Deduct coins
            coinsCount -= 20;
            
            // Add to call history
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            
            callHistory.unshift({
                name: serviceName,
                number: serviceNumber,
                time: timeString
            });
            
            // Update UI
            updateUI();
            
            // Show alert
            alert(`Calling ${serviceName} at ${serviceNumber}`);
        });
    });


// Add event listeners to copy buttons
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const serviceNumber = card.querySelector('.card-number').textContent;
            
            // Copy to clipboard (simulated)
            navigator.clipboard.writeText(serviceNumber).then(() => {
                // Increase copy count
                copyCount++;
                updateUI();
                
                // Show alert
                alert(`Copied ${serviceNumber} to clipboard`);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy number');
            });
        });
    });

// Clear history button
    clearHistoryBtn.addEventListener('click', function() {
        callHistory = [];
        updateUI();
    });

// Function to update UI elements
    function updateUI() {
        // Update counts in header
        likesElement.textContent = likesCount;
        starsElement.textContent = coinsCount;
        copyCountElement.textContent = `${copyCount} Copy`;
        
        // Update call history
        updateCallHistory();
    }



});