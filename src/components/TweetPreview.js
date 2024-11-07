import { debugLog } from '../utils/logger';
import { extractTweetId, normalizeTwitterUrl, isTweetUrl } from '../utils/twitterUtils';

export function createTweetPreview(twitterUrl) {
    const previewContainer = document.createElement('div');
    previewContainer.className = 'tweet-preview-container';
    
    const tweetFrame = document.createElement('iframe');
    tweetFrame.className = 'tweet-preview-frame';
    
    const normalizedUrl = normalizeTwitterUrl(twitterUrl);
    tweetFrame.src = `https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-0&frame=false&hideCard=false&hideThread=false&id=${extractTweetId(normalizedUrl)}&theme=dark`;
    
    previewContainer.appendChild(tweetFrame);
    return previewContainer;
}

export async function addTweetPreview(cardElement) {
    if (cardElement.querySelector('.tweet-preview-container')) {
        return;
    }

    const twitterLinks = Array.from(cardElement.querySelectorAll('a[href*="twitter.com"], a[href*="x.com"]'))
        .filter(link => isTweetUrl(link.href));
    
    if (!twitterLinks.length) {
        return;
    }

    const twitterUrl = twitterLinks[0].href;
    debugLog('Found Tweet link:', twitterUrl);

    const previewContainer = createTweetPreview(twitterUrl);
    
    // Find the main content area of the card (usually the first child)
    const cardContent = cardElement.querySelector('.l-col');
    if (cardContent) {
        // Insert after the main content but before any action buttons
        cardContent.appendChild(previewContainer);
    }
}