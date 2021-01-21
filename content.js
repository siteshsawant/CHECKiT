chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction',
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
  var domInfo = {
		total: document.querySelectorAll('*').length,
    iframes: document.querySelectorAll('iframe').length,
	  anch: document.querySelectorAll('a').length,
	  meta: document.querySelectorAll('meta').length,
	  script: document.querySelectorAll('script').length,
	  links: document.querySelectorAll('link').length,
	  };
    response(domInfo);
  }
});
chrome.runtime.sendMessage({
  from: 'conts',
  subject: 'showDetected',
});
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  var link_s="Links::: \n";
  var link_s2="";
  var script_s="Scripts::: \n";
  var script_s2="";
  if (msg.from === 'pops')
  {
    let links= document.getElementsByTagName('a');
    for (elt of links){
      link_s2=elt.href;
      if(!link_s2.includes(msg.subject))
        {
          link_s=link_s+link_s2+"\n";

        }
    }
      console.log(status);

      let scripts= document.getElementsByTagName('scripts');
      for (elt in scripts){
        script_s2=elt.txt;
        console.log(script_s2);
      //  if(((script_s2.includes("https"))||(script_s2.includes("http")))&&(!script_s2.includes(msg.subject))){
        //  script_s=script_s+script_s2+"\n"
      //  }


      }

  }
});
