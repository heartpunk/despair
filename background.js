chrome.history.onVisited.addListener(function(result) {
  chrome.tabs.create({'url': 'http://reddit.com'});
});