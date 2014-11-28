$(document).ready(function ($) {
    $('#tabs').tab();


$('.img-overlay').hover(function(){
    $(this).find('.project-overlay').fadeToggle(500);
});

$(".trigger").click(function(){
    var div = $(this).next(".toggle");
    $(".toggle").not(div).slideUp("1000");
    div.slideToggle("1000");
});

$(".close").click(function(){
    var div = $(this).next(".toggle");
    $(".toggle").not(div).slideUp("1000");
    div.slideToggle("1000");
})

    $('.more').hide().before('<a href="#" id="toggle-more" class="more-button text-center">+</a>');
    $('a#toggle-more').click(function() {
        $('.more').slideToggle(1000);
        return false;
    });


});