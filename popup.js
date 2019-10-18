$(function(){

	chrome.storage.sync.get('toggle' , function(state){
		
		if(state.toggle =='on')
			$('.toggle-button').attr('checked', true);
	})

	$(".toggle-button").change(function() {

    	if(this.checked) {
    		
    		chrome.storage.sync.set({'toggle' : 'on' },function(){

	    		chrome.tabs.query({active:true,currentWindow: true}, function(tabs){

	            	chrome.tabs.sendMessage(tabs[0].id, {todo: "hideSubmissions"});
	        	
	        	});

    		});

    	}
    	else{

    		chrome.storage.sync.set({'toggle' : 'off' } ,function(){

	    		chrome.tabs.query({active:true,currentWindow: true}, function(tabs){

	            	chrome.tabs.sendMessage(tabs[0].id, {todo: "showSubmissions"});
	        	
	        	});

    		});

    	}
	});

})