$(function () {

    $('.slide-show').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        dots: false,
        fade: true,
        
    });

     $('a[href^="#"]').click(function(){
        var adjust = -50;
        // スクロールの速度（ミリ秒）
        var speed = 400;
        // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
        var href= $(this).attr("href");
        // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
        var position = target.offset().top + adjust;
        // スムーススクロール linear（等速） or swing（変速）
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    
    
      });

      $('.burger-menu').on('click', function(){
        if ($('.header-menu-wrapper').hasClass('off')) {
            $('.header-menu-wrapper').removeClass('off');
            $('.header-menu-wrapper').animate({ 'top':'0px'}, 300).addClass('on');
        }
    });

    $('.menu-close-btn').on('click', function(){
        $('.header-menu-wrapper').addClass('off');
        $('.header-menu-wrapper').animate({'top':'-100px'},300).addClass('on');
    });

       $('a[href^="#"]').click(function(){
        var adjust = -50;
        // スクロールの速度（ミリ秒）
        var speed = 400;
        // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
        var href= $(this).attr("href");
        // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
        var position = target.offset().top + adjust;
        // スムーススクロール linear（等速） or swing（変速）
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    
    
      });

      let list = document.querySelectorAll('.social-icon');
      let bg = document.querySelector('.sns-block');
      list.forEach(elements =>{
          elements.addEventListener('mouseenter',function
          (event){
            let color = event.target.getAttribute('data-color');
            bg.style.backgroundColor = color;
          })
          elements.addEventListener('mouseleave',function
          (event){
            let color = event.target.getAttribute('data-color');
            bg.style.backgroundColor = '#ffffff';
          })
      })

      

});