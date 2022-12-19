$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1200,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: false, 
        prevArrow: '<button type="button" class="slick-prev"><img src="/src/img/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/src/img/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    innerWidth: 700,
                    dots: true,
                    arrows: false
                }
            }
        ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').toggleClass('catalog-item__content_active');
            $('.catalog-item__list').toggleClass('catalog-item__list_active');
        })
      })

      $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
});