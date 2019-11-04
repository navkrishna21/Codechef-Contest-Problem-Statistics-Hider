var url_re = /^(http|https):\/\/(www.codechef|codechef)\.com\/[A-Z]+[0-9]*[A-B]*(\?[A-Za-z0-9\?&=_-]+)?$/


function shuffleRows(parent) {
    var rows = parent.children();
    for (var i = rows.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = rows[i];
        rows.eq(i - 1).after(rows[j]);
        rows.eq(j - 1).after(temp);
    }
}


chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
 
	
	if(url_re.test(window.location.toString())){

	    if(request.todo == "hideOnLoad"){

			var MY_SELECTOR = "td.num" // Could be any selector

			var observer = new MutationObserver(function(mutations){
			 
			    for (var mutation of mutations){
			      // We're iterating through _all_ the elements as the parser parses them,
			      // deciding if they're the one we're looking for.
			      if (document.querySelector(MY_SELECTOR)){

			        $('td.num').css('display','none'); 
					$('#contest-ranks > p').css('display','none');
					

					if(request.shuffle=="yes"){

						var problems_list1 = $("#problems-list tbody");
						shuffleRows( problems_list1);
				        
				        var problems_list2 = $("#problems-list-2 tbody");
				        shuffleRows( problems_list2);	
				        chrome.runtime.sendMessage({todo: "notify1"});
					}
					else
						chrome.runtime.sendMessage({todo: "notify2"});

			        
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

			
			if(request.shuffle=="yes"){
				var problems_list1 = $("#problems-list tbody");
				shuffleRows( problems_list1);
		        
		        var problems_list2 = $("#problems-list-2 tbody");
		        shuffleRows( problems_list2);	
			}	
			
	    }
	    else if (request.todo == "showStatistics")
	    {
	
			$('td.num').css('display','table-cell');
			$('#contest-ranks > p').css('display','block');    		
						 	 	    	
	    }
	}
});
