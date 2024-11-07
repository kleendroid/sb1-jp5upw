import { debugLog } from '../utils/logger';

export function createActionButton() {
    const button = document.createElement('button');
    button.className = 'photon-action-button';
    
    button.innerHTML = `
        <div class="button-content">
            <span class="button-icon">⭐</span>
        </div>
    `;
    
    button.onclick = (e) => {
        e.stopPropagation();
        debugLog('Action button clicked!');
    };
    
    return button;
}