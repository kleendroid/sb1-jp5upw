export const DEBUG = true;

export function debugLog(message, ...args) {
    if (DEBUG) {
        console.log(`[Photon Extension] ${message}`, ...args);
    }
}