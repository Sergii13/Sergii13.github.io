$(window).scroll(function() {
    $('.section_title').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("flipInX");
        }
    });
});

$(window).scroll(function() {
    $('.advantage_time').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInLeft");
        }
    });
});


$(window).scroll(function() {
    $('.advantage_value').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInRight");
        }
    });
});


$(window).scroll(function() {
    $('.advantage_travel').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInUp");
        }
    });
});
$(window).scroll(function() {
    $('.form').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("bounceInRight");
        }
    });
});

$(window).scroll(function() {
    $('.credits').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("bounceInLeft");
        }
    });
});