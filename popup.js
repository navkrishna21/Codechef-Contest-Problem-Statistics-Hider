$(function(){

	$(".toggle-button").change(function() {

    	if(this.checked) {
    		
    		
    		chrome.tabs.query({active:true,currentWindow: true}, function(tabs){

            	chrome.tabs.sendMessage(tabs[0].id, {todo: "hideSubmissions"});
        	
        	});

    	}
	});

})