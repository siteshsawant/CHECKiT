/*let pp = document.getElementsByTagName('p');
for (elt of pp) {
	elt.style['background-color'] = 'red';

} */

let iframes = document.getElementsByTagName('iframes');
var num=0;
for (elt of iframes) {
	elt.style['display'] = 'none'; 
	elt.innerHTML = 'Ad Blocked';
	num=num+1;
}console.log(num);

chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction',
});

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    // Collect the necessary data. 
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`.)
    var domInfo = {
      total: document.querySelectorAll('*').length,
      iframes: document.querySelectorAll('iframe').length,
	  anch: document.querySelectorAll('a').length,
	  meta: document.querySelectorAll('meta').length,
	  script: document.querySelectorAll('script').length, 
	  links: document.querySelectorAll('link').length,
	  };

    // Directly respond to the sender (popup), 
    // through the specified callback.
    response(domInfo);
  }


});
