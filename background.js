// Function to clean URL by removing utm_source and everything after it
function cleanUrl(url) {
  // Find the index where "utm_source" appears in the URL
  const utmIndex = url.indexOf('?utm_source');
  if (utmIndex === -1) {
    // If not found with a question mark, check for &utm_source
    const ampUtmIndex = url.indexOf('&utm_source');
    if (ampUtmIndex === -1) {
      // No UTM parameters found
      return url;
    }
    // Find the previous ? to determine where to cut the URL
    const questionMarkIndex = url.lastIndexOf('?', ampUtmIndex);
    if (questionMarkIndex === -1) {
      // Malformed URL, return as is
      return url;
    }
    // Return the portion up to the &utm_source
    return url.substring(0, ampUtmIndex);
  }
  // Return the portion of the URL before the utm_source
  return url.substring(0, utmIndex);
}

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only process if URL has changed and contains utm_source
  if (changeInfo.url && (changeInfo.url.includes('utm_source'))) {
    const cleanedUrl = cleanUrl(changeInfo.url);
    
    // Only update if the URL actually changed
    if (cleanedUrl !== changeInfo.url) {
      chrome.tabs.update(tabId, { url: cleanedUrl });
    }
  }
});

// Listen for navigation events
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  // Only process main frame navigations that contain utm_source
  if (details.frameId === 0 && details.url.includes('utm_source')) {
    const cleanedUrl = cleanUrl(details.url);
    
    // Only update if the URL actually changed
    if (cleanedUrl !== details.url) {
      // Cancel the current navigation and replace with cleaned URL
      chrome.tabs.update(details.tabId, { url: cleanedUrl });
    }
  }
}); 