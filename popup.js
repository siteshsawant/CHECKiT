window.onload=function(){
	//Basic Initialization
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    var activeTab=tabs[0].url;
	document.getElementById("url1").innerHTML = activeTab;
	const url =new URL(activeTab);
	var host=url.host;
	var pathname= url.pathname;
	var search="No Search";
	if(url.search.length!=0)
	{
		search=url.search;
	}
	var protocol=url.protocol;
	var port=url.port;
	var url_susp=0;
	var data0="";
	var url_mal=0;
	var data1="";
	    
	//URL Check Algo.
	if(host.length>=21&&host.length<=30)//Length of host
	{
		url_susp=url_susp+1;
		data0=data0+"Length of Host is Suspicious<br>";
	}
	if(host.length>=31)//Length of host
	{
		url_mal=url_mal+1;
		data1=data1+"Length of host is too big (Unsafe)(Phishing)<br>";
	}
	if(activeTab.match(/[/]/gi).length>=5&&activeTab.match(/[/]/gi).length<=14)//Slashes in URL
	{
		url_susp=url_susp+1;
		data0=data0+"Number of Slashes in URL are Suspicious<br>";	
	}	
	if(activeTab.match(/[/]/gi).length>=15)//Slashes in URL
	{
		url_mal=url_mal+1;
		data1=data1+"Too many redirections (Unsafe)<br>";	
	}
	if(host.match(/[.]/gi).length>2&&host.match(/[.]/gi).length<4)//dots in url
	{
		url_susp=url_susp+1;	
		data0=data0+"Number of Subdomains looks Suspicious<br>";
	}	
	if(host.match(/[.]/gi).length>=4)//dots in url
	{
		url_mal=url_mal+1;	
		data1=data1+"Number of Subdomains are more than usual(Phishy)<br>";
	}	
	if(protocol=='http')//protol 
	{
		url_susp=url_susp+1;
		data0=data0+"Protocol is Suspicious<br>";	
	}	
	if(activeTab.length>=54&&activeTab.length<=75)//length of URL
	{
		url_susp=url_susp+1;
		data0=data0+"Length of URL is Suspicious<br>";
	}
	if(activeTab.length>=76)//length of URL
	{
		url_mal=url_mal+1;
		data1=data1+"Length of URL too Big (Unsafe)(Phishing)<br>";
	}

	if(host.match(/[https]/gi).length>=1)//https in hostname
	{
		url_mal=url_mal+1;	
		data1=data1+"https in hostname looks Phishy(Unsafe)<br>";
	}	



// Displaing Details on popup.html
document.getElementById("protocol").innerHTML = protocol;
document.getElementById("host").innerHTML = host;
document.getElementById("pathname").innerHTML = pathname;
document.getElementById("search").innerHTML = search;
	
	
//Storing details to localStorage
window.localStorage.setItem('url',url1 );
window.localStorage.setItem('pathname',pathname );
window.localStorage.setItem('host',host );
window.localStorage.setItem('protocol',protocol );
window.localStorage.setItem('port',port );




//Content Check Display & Algo
const setDOMInfo = info => {
	var total=info.total;
	var iframes=info.iframes;
	var anch=info.anch;
	var meta=info.meta;
	var script=info.script;
	var links=info.links;
	document.getElementById('total').textContent = total;
  document.getElementById('iframes').textContent =iframes;
  document.getElementById('anch').textContent =anch;
  document.getElementById('meta').textContent =meta;
  document.getElementById('script').textContent =script;
  document.getElementById('links').textContent =links;
  
  var content_susp=0;
  var data2="";
  var content_mal=0;
  var data3="";
if (anch>=501&&anch<=700)
{
	content_susp=content_susp+1;
	data2=data2+"Number of Links in this Page Looks Suspicious";
}
if (anch>=701)
{
	content_mal=content_mal+1;
	data3=data3+"Number of Links (Unsafe)(Malicious)";
}
if (meta>=26&&meta<=50)
{
	content_susp=content_susp+1;
	data2=data2+"Number of Meta Data/Links in this Page Looks Suspicious";
}
if (meta>=51)
{
	content_mal=content_mal+1;
	data3=data3+"Meta Data/Links (Unsafe)(Malicious)";
}
if (links>=26&&links<=50)
{
	content_susp=content_susp+1;
	data2=data2+"Number of Links in this Page Looks Suspicious";
}
if (links>=51)
{
	content_mal=content_mal+1;
	data3=data3+"Links (Unsafe)(Malicious)";
}
	
if (script>=51&&links<=75)
{
	content_susp=content_susp+1;
	data2=data2+"Number of Scripts in this Page Looks Suspicious";
}
if (links>=76)
{
	content_mal=content_mal+1;
	data3=data3+"Too Many Scripts (Unsafe)(Malicious)";
}
	




url_mal=url_mal*2;
var total_url_status=url_mal+url_susp;
content_mal=content_mal*2;
var total_content_status=content_mal+content_susp;
var flag="";
if(total_url_status>=4&&total_url_status<8){
	document.getElementById('URL_status').textContent="Suspicious";
	flag=flag+"a";
}else if(total_url_status>=8){
	document.getElementById('URL_status').textContent="Phishing";
	flag=flag+"b";
}else{
	document.getElementById('URL_status').textContent="Safe";
	flag=flag+"c";
}

if(total_content_status>=3&&total_content_status<6){
	document.getElementById('CONTENT_status').textContent="Suspicious";
	flag=flag+"d";
}else if(total_content_status>=7){
	document.getElementById('CONTENT_status').textContent="Malicious";
	flag=flag+"e";
}else{
	document.getElementById('CONTENT_status').textContent="Safe";
	flag=flag+"f";
}

if(flag=="ad"||flag=="cd")
	{
	document.getElementById('status').textContent="SUSPICIOUS";
	var newURL="https://checkit123.000webhostapp.com/?" +activeTab+"&&&SUSPICIOUS";
	chrome.tabs.update({url: newURL});
	}
if(flag=="ae"||flag=="bd"||flag=="bf"||flag=="be"||flag=="ce"||flag=="af")
	{
	document.getElementById('status').textContent="MALICIOUS";
	var newURL="https://checkit123.000webhostapp.com/?" +activeTab+"&&&MALICIOUS";
	chrome.tabs.update({url: newURL});
	}
if(flag=="cf")
	{
	document.getElementById('status').textContent="SAFE";
	}

	document.getElementById('status_log').textContent=data0+data1+data2+data3;	

};
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        // ...also specifying a callback to be called 
        //    from the receiving end (content script).
        setDOMInfo);
  });
});

 var button = document.createElement("button")

button.innerText = "Go to Website"
button['id'] = 'inserted'
button['data-name'] = 'name1'
button.onclick = function() {
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    var activeTab=tabs[0].url;
		const url = "?"+ new URL(activeTab);
		var newURL="https://checkit123.000webhostapp.com" + url;
		alert(newURL);
		chrome.tabs.create({ url: newURL });
		});
}

document.body.appendChild(button)
}; 



