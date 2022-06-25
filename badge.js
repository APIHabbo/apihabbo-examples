$(function(){
	// Get Badges from our API
	$.getJSON('https://apihabbo.com/api/badges?per_page=50', function(badges){
		$.each(badges.data, function(key, badge){
			// Append badges to div
			$('#badges').append('<img src="https://images.habbo.com/c_images/album1584/' + badge.code + '.gif" />');	
		});
	});
})
