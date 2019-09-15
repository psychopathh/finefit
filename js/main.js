$(document).ready(function(){
	slider=$('.slider').bxSlider();
	function bxslider(){
		var width = window.innerWidth;
		if(width<768){
			slider.bxSlider({
				touchEnabled: true,
			});
		} else {
			slider.destroySlider();
		}
	}
	bxslider();
	var resizeId;
	$(window).resize(function() {
		clearTimeout(resizeId);
		resizeId = setTimeout(doneResizing, 300);
	});
	function doneResizing(){
		clearTimeout(resizeId);
		bxslider();
	}
});