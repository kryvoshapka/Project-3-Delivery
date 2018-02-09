$(window).ready(function() {

    setTimeout(function () {
        $(".wrapper").animate({opacity: 1}, 500);
    }, 500);


// burger //

    $('.burger').click(function() {
        $(this).toggleClass('fa-times fa-bars');
        $('nav').toggleClass('active');
    });


// slider //

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


// anchors //

$('a[href^="#"]').click(function(){

    if($(window).width() < 950) {
        $('nav').toggleClass('active');
        $('.burger').toggleClass('fa-close fa-bars');
    }

    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);

    return false;

});

// scroll to top //


    $('#up').click(function() {
        $('html, body').animate({scrollTop: 0},700);
        return false;
    });


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

// form-test //

    $('.country').click(function () {
        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');

        } else {
            $('.select.active').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

    $('.select ul li').click(function () {
        var current = $(this).text();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parent().siblings('.country').text(current);
        $(this).parent().siblings('input').val(current);
        $(this).parents('.select').removeClass('active');

    });


// animate counter //

var show = true;
var countbox = "#about";
$(window).on("scroll load resize", function () {
    if (!show) return false;
    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;
    var w_height = $(window).height();
    var d_height = $(document).height();
    var e_height = $(countbox).outerHeight();
    if (w_top + 500 >= e_top || w_height + w_top === d_height || e_height + e_top < w_height) {
        $('.count').spincrement({
            thousandSeparator: "",
            duration: 3000
        });

        show = false;
    }
});



