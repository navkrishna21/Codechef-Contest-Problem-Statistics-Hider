chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            
            chrome.pageAction.show(tabs[0].id,function(){

            	chrome.storage.sync.get('toggle' , function(state){
		
					if(state.toggle=='on'){

				       chrome.tabs.sendMessage(tabs[0].id, {todo: "hideSubmissions"});
				       
					}
				})

            });
        });
    }
});



