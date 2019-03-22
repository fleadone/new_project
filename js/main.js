$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true
    });
    $('.like').on('click', function() {
      $(this).parent().find('.like');
        for (var i = 0; i < $(this).parent().find('.like').index(this); i++) {
          $(this).parent().find('.like').attr('src', 'img/like_red.png');
        }
        for (var i = $(this).parent().find('.like').index(this); i < $(this).parent().find('.like').length; i++) {
          $(this).parent().find('.like').eq(i+1).attr('src', 'img/like_grey.png');
        }
        $(this).parent().parent().find('.like_num').text($(this).parent().find('.like').index(this)+1);
    })
    $('.burger_menu').on('click', function () {
        $(this).toggleClass('open');
        $('.header_bottom_nav').slideToggle().css('display', 'flex');
    });
});
