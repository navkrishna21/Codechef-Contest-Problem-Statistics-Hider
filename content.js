chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
 

    if(request.todo == "hideOnLoad"){
    	
		var MY_SELECTOR = "td.num" // Could be any selector

		var observer = new MutationObserver(function(mutations){
		 
		    for (var mutation of mutations){
		      // We're iterating through _all_ the elements as the parser parses them,
		      // deciding if they're the one we're looking for.
		      if (document.querySelector(MY_SELECTOR)){

		        $('td.num').css('display','none'); 
				$('#contest-ranks > p').css('display','none');	
		        chrome.runtime.sendMessage({todo: "notify"});
		        observer.disconnect();
		      };
		    }
		  
		});

		observer.observe(document.documentElement, {
		  childList: true,
		  subtree: true
		});


    }
    else if (request.todo == "hideStatistics")
    {
		$('td.num').css('display','none'); 
		$('#contest-ranks > p').css('display','none');				 	 			 	
    }
    else if (request.todo == "showStatistics")
    {

    	
		$('td.num').css('display','table-cell');
		$('#contest-ranks > p').css('display','block');    		
					 	
    	 	    	
    }

});
