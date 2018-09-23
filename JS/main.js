$(function(){

	$('.part h2').mousedown(function(){
		$(this).next('ol.content').slideToggle(400);
	});
	$('.show').click(function(){
		$('ol.content').show();
	});

});