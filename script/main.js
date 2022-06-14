$('.button').click( function(e) {
    e.preventDefault();
      $('.overlay').fadeIn();
    });
    
        // Закрытие окна на крестик
        $('.close-popup').click( function() {
          $('.overlay').fadeOut();
        });
      
        // Закрытие окна на поле
        $(document).mouseup( function (e) { 
          var popup = $('.popup');
          if (e.target != popup[0] && popup.has(e.target).length === 0){
            $('.overlay').fadeOut();
          }
        });
        $('.mobile-burger').click( function(e) {
          e.preventDefault();
            $('.hamburger-lines').toggleClass('mobile-burger__active');
            $('.header-menu').toggleClass('header-menu__active');
            $('.body').toggleClass('body__active');
            $('.overflow').toggleClass('overflow__none');
          });
          $('.body').click( function(e) {
            e.preventDefault();
              $('.hamburger-lines').removeClass('mobile-burger__active');
              $('.header-menu').removeClass('header-menu__active');
              $('.body').removeClass('body__active');
              $('.overflow').removeClass('overflow__none');
            });
            const swiper = new Swiper('.swiper', {
              // Optional parameters
              direction: 'horizontal',
              loop: true,
              slidesPerView: 1.3,
              centeredSlides: true,
              spaceBetween: 15,
              // If we need pagination
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            
             
            });