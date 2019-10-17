$(function(){

	$(".checkbox").change(function() {
    	if(this.checked) {
        	chrome.runtime.sendMessage({todo: "hideSubmissions"});
    	}
	});

})