$(function(){

	chrome.storage.sync.get('hide_state' , function(hide_button){

		if(hide_button.hide_state =='on'){
			$('#hidebutton-status').text('Problem statistics are hidden');
			$('#hide-button').prop('checked', true);
		}
		else
			$('#hidebutton-status').text('Toggle to hide problem statistics');
	})


	chrome.storage.sync.get('shuffle_state' , function(shuffle_button){
		
		if(shuffle_button.shuffle_state == 'on'){
			$('#shufflebutton-status').text('Enabled');
			$('#shuffle-button').prop('checked', true);
		}
		else
			$('#shufflebutton-status').text('Disabled');
	})


	$('#shuffle-button').change(function() {
		
		if(this.checked){
			chrome.storage.sync.set( {'shuffle_state' : 'on' },function(){
				$('#shufflebutton-status').text('Enabled');
			});

		}
		else{
			chrome.storage.sync.set( {'shuffle_state' : 'off' },function(){
				$('#shufflebutton-status').text('Disabled');
			});
		}
	});

	$("#hide-button").change(function() {

    	if(this.checked) {
    		

			chrome.tabs.query({active:true,currentWindow: true}, function(tabs){

				let shuffle="no";

	        	if($('#shuffle-button').is(':checked')){

	        		shuffle="yes"
	        	}
	        	

	        	chrome.tabs.sendMessage(tabs[0].id, {todo: "hideStatistics", shuffle : shuffle},function(){
	        		
	        		var last_error=console.log(chrome.runtime.lastError);

	        		if(last_error){
	        			console.log(last_error.message);
	        		}
	        		else{
	        			
	        			chrome.storage.sync.set( {'hide_state' : 'on' } ,function(){
	        				$('#hidebutton-status').text('Problem statistics are hidden');
	        			});
	        		}
	        		
	        		
	        	});
	    	
	    	});

    	}
    	else{

    		chrome.tabs.query({active:true,currentWindow: true}, function(tabs){

            	chrome.tabs.sendMessage(tabs[0].id, {todo: "showStatistics"},function(){

            		var last_error=console.log(chrome.runtime.lastError);

	        		if(last_error){
	        			console.log(last_error.message);
	        		}
	        		else{

	        			chrome.storage.sync.set({'hide_state' : 'off' } ,function(){
       
            				$('#hidebutton-status').text('Toggle to hide problem statistics')
            			});
	        		}
            	});
        	
        	});
    	}
	});

})