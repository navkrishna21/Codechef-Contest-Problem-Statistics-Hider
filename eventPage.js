chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            
            chrome.pageAction.show(tabs[0].id,function(){

            	chrome.storage.sync.get('toggle' , function(state){
		
					if(state.toggle=='on'){

				       chrome.tabs.sendMessage(tabs[0].id, {todo: "hideOnLoad"});
				       
					}
				})

            });
        });
    }
    else if(request.todo == "notify"){
    	var notifOptions = {
			type : 'basic',
			iconUrl : 'icon48.png',
			title : 'Hiding Enabled',
			message : 'No. of Submissions, Accuracy and your Rank are hidden' 
		};

		chrome.notifications.create('hiding_notif',notifOptions);
    }
});



