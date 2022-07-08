$(function(){

    /*
     * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
     *
     * 
     /*
     * 메인 슬라이드 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (Nico)
     */
        var mainSlide = new Swiper(".video", {
       
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
      });



    /*
    
     * 
     * sc-people 슬라이드 구역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (Nico)
     *
     *
     */
    var peopleslide = new Swiper(".people", {
        slidesPerView: 1.2,
        spaceBetween: 20,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
      });


     /* 
     * 
     * 
     * sc-benefits 슬라이드 구역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (Nico)
     */
     var bfslide = new Swiper(".benefits", {
      slidesPerView: 3,
      spaceBetween: 0,
      navigation: {
        nextEl: ".bt-next",
        prevEl: ".bt-prev",
      },
    });

    
    
    
    
    
    
    
    
    
    })//이거는 하나만 쓰세요 $(function())입니다.