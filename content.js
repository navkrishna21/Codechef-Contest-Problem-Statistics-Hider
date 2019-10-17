chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
 

    if (request.todo == "hideSubmissions")
    {

    	 	 $(document).ready(function() {
				
				$('td.num').css('display','none');    
			
			});
					 	
    	 	//$('#contest-ranks').css('display','none !important');			 	
    }

});