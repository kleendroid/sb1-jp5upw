import { debugLog } from '../utils/logger';
import { processCard } from '../processors/CardProcessor';

export function initializeObserver() {
    const sections = ['newly-created', 'about-to-graduate', 'graduated'];

    sections.forEach(section => {
        const sectionElement = document.querySelector(`[class*="${section}"]`);
        if (sectionElement) {
            debugLog(`Setting up observer for ${section} section`);
            
            const observer = new MutationObserver((mutations) => {
                mutations.forEach(mutation => {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) {
                            const cards = node.classList?.contains('l-row-gap--xs') ? 
                                [node] : 
                                node.querySelectorAll('.l-row.l-row-gap--xs');
                            
                            cards.forEach(processCard);
                        }
                    });
                });
            });

            observer.observe(sectionElement, {
                childList: true,
                subtree: true
            });
        }
    });
}