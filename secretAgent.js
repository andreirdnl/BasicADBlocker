var domaninBlackList = [
    "*://*.doubleclick.net/*",
    "*://*.video.sekindo.com/*",
    "*://*.lb.usemaxserver.de/*",
    "*://*.tracking.klickthru.com/*",
    "*://*.zmedia.com/*",
    "*://*.zv1.november-lax.com/*"
]

var _details;

function enableAdBlock() {
    chrome.webRequest.onBeforeRequest.addListener(
        function (details) {
            console.log('blocking: ', details.url);
            return { cancel: true };
        },
        { urls: domaninBlackList },
        ["blocking"]
    );
}