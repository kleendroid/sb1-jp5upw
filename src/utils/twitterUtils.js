export function extractTweetId(url) {
    const match = url.match(/(?:twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/);
    return match ? match[1] : null;
}

export function normalizeTwitterUrl(url) {
    return url.replace('x.com', 'twitter.com');
}

export function isTweetUrl(url) {
    return url.includes('/status/');
}