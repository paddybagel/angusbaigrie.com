
$(document).ready(function() {
	$('body').fadeIn(400)
	
	$(window).stellar({
        verticalOffset: 70
	});
	
    // Change this to the correct selector for your nav. px
    if (screen.width > 558) {
        $('nav.fixed').midnight();
    }
});