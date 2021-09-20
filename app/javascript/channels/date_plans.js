$(document).ready(function(){
	$('#date_plans_select_box').bind('change', function() {
		var linkurl = $('#date_plans_select_box').val();
		$('#date_plans_select_box_link').attr({href:linkurl});
	});

});