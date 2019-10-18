$(function(){

	chrome.storage.sync.get('toggle' , function(state){
		
		if(state.toggle =='on'){
			$('#status').text('Submissions are hidden');
			$('.toggle-button').prop('checked', true);
		}
		else
			$('#status').text('Toggle to hide submissions');
	})

	$(".toggle-button").change(function() {

    	if(this.checked) {
    		
    		chrome.storage.sync.set({'toggle' : 'on' },function(){

	    		chrome.tabs.query({active:true,currentWindow: true}, function(tabs){

	            	chrome.tabs.sendMessage(tabs[0].id, {todo: "hideSubmissions"},function(){
	            		$('#status').text('Submissions are hidden')
	            	});
	        	
	        	});

    		});

    	}
    	else{

    		chrome.storage.sync.set({'toggle' : 'off' } ,function(){

	    		chrome.tabs.query({active:true,currentWindow: true}, function(tabs){

	            	chrome.tabs.sendMessage(tabs[0].id, {todo: "showSubmissions"},function(){
	            		$('#status').text('Toggle to hide submissions')
	            	});
	        	
	        	});

    		});

    	}
	});

})