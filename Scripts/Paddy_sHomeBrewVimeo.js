function updateVimeo(videoID){
	$('.video_container iframe').attr("src", "https://player.vimeo.com/video/" + videoID);
	
	//scroll
	
	var el = $('.video_container');
	var elOffset = el.offset().top + 320;
	var elHeight = el.height();
	var windowHeight = $(window).height();
	var offset;
	
	if (elHeight < windowHeight) {
		offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
	}
	else {
		offset = elOffset;
	}
	
	$.smoothScroll({ speed: 700 }, offset);
}