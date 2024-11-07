import { createActionButton } from '../components/ActionButton';
import { addTweetPreview } from '../components/TweetPreview';

export function processCard(cardElement) {
    if (cardElement.querySelector('.photon-action-button')) {
        return;
    }
    
    const buttonContainer = cardElement.querySelector('.CZ9XtNP_BJSquWvM6_r8');
    if (!buttonContainer) {
        return;
    }
    
    const button = createActionButton();
    buttonContainer.appendChild(button);
    addTweetPreview(cardElement);
}

export function findAndProcessCards() {
    const cards = document.querySelectorAll('.l-row.l-row-gap--xs');
    cards.forEach(processCard);
}