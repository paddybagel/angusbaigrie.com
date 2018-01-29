$(document).ready(function () {
    
    $('.nav').on('click', function () {
        var url;
        switch ($(this).data('url')) {
            case 'acting':
                url = "Acting.html";
                break;
            case 'about':
                url = "About.html";
                break;
            case 'writing':
                url = "Writing.html";
                break;
            case 'film':
                url = "Film.html";
                break;
            case 'photography':
                url = "Photography.html";
                break;
            case 'mumblings':
                url = "Mumblings.html";
                break;
            case 'contact':
                url = "Contact.html";
                break;
            default:
                url = ""
                break;
        }
        $.when($('#background_video').fadeOut(500)).done(RedirectToURL(url));
        
        
    
    
    })
});
function RedirectToURL(url) {
    window.location.href = url;
}