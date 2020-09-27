chrome.runtime.onInstalled.addListener(function() {

});


let status;

chrome.storage.sync.get('isActivated', function(result) {
  console.log('Extension status started as  ' + result.isActivated + " in background.");
  status = result.isActivated;
  console.log(status)
});


chrome.storage.onChanged.addListener(function(change){
  status = change.isActivated.newValue
  console.log("Status has been changed to" + status)
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.isActivated == status)
    {sendResponse({activeStatus: true});}
    else
    {sendResponse({activeStatus: false});}
  });


   

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  var url = JSON.stringify(tab.url)
  
  //If changed url matches the url pattern and info status is complete.
  if(url.indexOf("https://www.instagram.com/p/") > -1 && changeInfo.status == 'complete')
  { 
    console.log("test instagram/p")
    chrome.tabs.executeScript(tabId, {file: "js/LikeComments.js"} ); 
  }
}); 




