chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
 

    if (request.todo == "hideSubmissions")
    {

	 	$(document).ready(function() {
			
			$('td.num').css('display','none'); 
			
			//$('#contest-ranks > p').css('color','transparent'); 
			//$('#contest-ranks > p').css('text-shadow','0 0 10px rgba(0,0,0,0.5)'); 

			$('#contest-ranks > p').css('display','none');
		});
					 	
    	 			 	
    }
    else if (request.todo == "showSubmissions")
    {

	 	$(document).ready(function() {
			
			$('td.num').css('display','table-cell');
			$('#contest-ranks > p').css('display','block');    
		
		});
					 	
    	 	//$('#contest-ranks').css('display','none !important');			 	
    }

});