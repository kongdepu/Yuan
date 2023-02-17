(function ($) {
    "use strict"

    // 页面预加载
    $(window).on('load', function () {
        $("#preloader").delay(1000).fadeOut();
    });

    // 获取主页文案
    $.get("https://v1.hitokoto.cn/?c=f&encode=text", ((res) = > {
        $('#copywriting').text(res)
}))
    ;

    // 加载缓存中的主题颜色 
    const themeColorSession = $.storage.get('theme_color');
    if (themeColorSession != null) {
        setThemeColor(themeColorSession)
    }

    ///////////////////////////
    // Scrollspy
    $('body').scrollspy({
        target: '#nav',
        offset: $(window).height() / 2
    });

    ///////////////////////////
    // Smooth scroll
    $("#nav .main-nav a[href^='#']").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
    });

    $('#back-to-top').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
    });

    ///////////////////////////
    // Btn nav collapse
    $('#nav .nav-collapse').on('click', function () {
        $('#nav').toggleClass('open');
    });

    ///////////////////////////
    // Mobile dropdown
    $('.has-dropdown a').on('click', function () {
        $(this).parent().toggleClass('open-drop');
    });

    ///////////////////////////
    // On Scroll
    $(window).on('scroll', function () {
        var wScroll = $(this).scrollTop();

        // Fixed nav
        if (wScroll > 1) {
            $('#nav').addClass('fixed-nav')
            $('#nav').removeClass('nav-transparent')
        } else {
            $('#nav').removeClass('fixed-nav');
            $('#nav').addClass('nav-transparent')
        }

        // Back To Top Appear
        wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
    });

    ///////////////////////////
    // magnificPopup 响应式弹出层图片
    $('.work').magnificPopup({
        delegate: '.lightbox',
        type: 'image'
    });
    // 使用方法
    // <div class="work">
    // 	<a class="lightbox" href="./img/work1.jpg"><i class="fa fa-search"></i></a>
    // </div>
    // /magnificPopup 响应式弹出层图片
    ///////////////////////////

    /////////////////////////// fa-angle-down
    // Owl Carousel 幻灯片
    $('#about-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: true,
        autoplay: true,
        animateOut: 'fadeOut'
    });
    // 使用方法
    // <div id="about-slider" class="owl-carousel owl-theme">
    // 	<img class="img-responsive" src="./img/about1.jpg" alt="">
    // 	<img class="img-responsive" src="./img/about2.jpg" alt="">
    // 	<img class="img-responsive" src="./img/about1.jpg" alt="">
    // 	<img class="img-responsive" src="./img/about2.jpg" alt="">
    // </div>

    $('#testimonial-slider').owlCarousel({
        loop: true,
        margin: 15,
        dots: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

})(jQuery);
