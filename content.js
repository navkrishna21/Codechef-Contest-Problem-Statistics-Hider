chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
 

    if (request.todo == "hideSubmissions")
    {


    	 	$('td.num').css('opacity','0');
    	 	$('#contest-ranks').css('opacity','0');
    	 	
    }

});