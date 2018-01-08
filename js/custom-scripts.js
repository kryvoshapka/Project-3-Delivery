$(window).ready(function() {

    setTimeout(function () {
        $(".wrapper").animate({opacity: 1}, 500);
    }, 500);

    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        arrows: false
    });


// modal window //

    $('.current-value').click(function() {
        $('.custom-select ul').fadeToggle(100);
    });

    $('.custom-select ul li').click(function() {
        var city = $(this).text();
        $(this).parent().siblings('.current-value').text(city);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $(this).parent().siblings('input').val(city);

        $(this).parents('.custom-select').find(' ul').fadeOut(100);
    });

});

// animate counter -2 //
var show = true;
var countbox = ".about-company";
$(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.count').spincrement({
            thousandSeparator: "",
            duration: 3000
        });

        show = false;
    }
});

// anchors //

    $('a[href^="#"]').click(function(){

        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);

        return false;

    });

// scroll to top //

$(function() {
    $('#up').click(function() {
        $('html, body').animate({scrollTop: 0},700);
        return false;
    })



//  modal  //

$(".get-modal").click(function () {
    $(".modal").fadeIn(400).css("display","flex");
});

$(".modal").click(function (event) {
    var clickedElemnt = event.target;
    if(!$(clickedElemnt).closest(".modal-inner").length) {
        $(".modal").fadeOut(400);
    }
    if($(clickedElemnt).hasClass("close-modal")) {
        $('.modal').fadeOut(400);
    }
});

// at lesson //
    $('.form-test .current-value').click(function () {
        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');

        } else {
            $('.form-test .custom-select.active').removeClass('active');
            $(this).parent().addClass('active');
        }


    });

    $('.form-test .current-select ul li').click(function () {
        var current = $(this).text();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parent().siblings('.form-test .current-value').text(current);
        $(this).parent().siblings('input').val(current);
        $(this).parents('.form-test .custom-select').removeClass('active');

    });

});



