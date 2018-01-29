$(document).ready(function () {
    
    var show_intro = (window.location.href.indexOf("false") > -1);
    
    var vid = document.getElementById("background_video");
    var randomValue = Math.floor(Math.random() * 350) + 1;
    while (randomValue < 10 || (randomValue > 145 && randomValue < 270)){
        randomValue = Math.floor(Math.random() * 350) + 1;
    }
    
    $.browser= (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    
    if (!show_intro && !$.browser){
        vid.onplay = function () {
            this.currentTime = 6;
            $('#background_video').hide()
            $('.loader').fadeOut(600)
            $('#background_video').delay(500).fadeIn(600)
            $('.text_fade_1').delay(1000).fadeIn(1000)
            $('.text_fade_2').delay(3000).fadeIn(1000)
            $('#skip_intro').delay(6000).fadeIn(1000)
            $('.text_fade_3').delay(5000).fadeIn(1000)
            $('.text_fade_4').delay(8000).fadeIn(1000)
            $('.text_fade_5').delay(10000).fadeIn(1000)
            $('.intro').delay(12000).fadeOut(1000)
            $('.main').delay(13000).fadeIn(2000)
        };
    } else if ($.browser) {
        $('.loader').fadeOut(600)
        $('#background_video').hide()
        var background_randomValue = Math.floor(Math.random() * 26) + 1;
        $('#main_page').css('background-image', 'url(Images/Responsive_Backgrounds/resonsive_background_' + background_randomValue +'.png)')
        $('.intro').hide()
        $('.main').delay(500).fadeIn(2000)
    } else {
        vid.onplay = function () {
            this.currentTime = randomValue;
            $('#background_video').hide()
            $('.loader').fadeOut(600)
            $('#background_video').delay(500).fadeIn(600)
            $('.intro').hide()
            $('.main').delay(500).fadeIn(2000)
        }
    }
    
    $('#skip_intro').on("click", function(){
        $('.intro').stop()
        $('.main').stop()
        
        $('.intro').hide()
        $('.main').fadeIn(2000)
    })
});