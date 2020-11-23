var button = document.createElement("button")

button.innerText = "Go to Website"
button['id'] = 'inserted'
button['data-name'] = 'name1'
button.onclick = function() {
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    var activeTab=tabs[0].url;
		const url = new URL(activeTab); 
		window.location.href = "checkit123.000webhostapp.com?" + url;
		});
}

document.body.appendChild(button)