import { debugLog } from './utils/logger';
import { initializeObserver } from './observers/CardObserver';
import { findAndProcessCards } from './processors/CardProcessor';
import styles from './styles/main.css?inline';

// Add styles
const style = document.createElement('style');
style.textContent = styles;
document.head.appendChild(style);

function initialize() {
    debugLog('Initializing Photon Extension');
    findAndProcessCards();
    initializeObserver();
}

// Initial load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}

// Backup initialization for dynamic content
setTimeout(initialize, 2000);

// Periodic check for new cards
setInterval(findAndProcessCards, 1000);