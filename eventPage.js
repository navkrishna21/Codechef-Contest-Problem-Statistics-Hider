chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            
            chrome.pageAction.show(tabs[0].id,function(){

            	chrome.storage.sync.get('hide_state' , function(hide_button){
		
					if(hide_button.hide_state=='on'){

						chrome.storage.sync.get('shuffle_state' , function(shuffle_button){
								
							let shuffle = "no";
							
							if(shuffle_button.shuffle_state == 'on'){
								shuffle= "yes"
							}

							chrome.tabs.sendMessage(tabs[0].id, {todo: "hideOnLoad",shuffle : shuffle});
						})				       
				       
					}
				})

            });
        });
    }
    else if(request.todo == "notify1" || request.todo == "notify2" ){
    	
    	let message =  'No. of Submissions, Accuracy and your Rank are hidden' 
    	
    	if(request.todo == "notify1")
    		message += '\nThe Problems have been randomly rearranged'

    	var notifOptions = {
			type : 'basic',
			iconUrl : 'icon48.png',
			title : 'Problem Stats Hidden',
			message : message
		};

		chrome.notifications.create('hiding_notif',notifOptions);
    }
});



