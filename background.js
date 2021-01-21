chrome.runtime.onMessage.addListener((msg, sender) => {
  if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
    chrome.pageAction.show(sender.tab.id);
  }
});
chrome.runtime.onMessage.addListener((msg, sender) => {
  if ((msg.from === 'conts') && (msg.subject === 'showDetected')) {
    chrome.pageAction.show(sender.tab.id);
  }
});
