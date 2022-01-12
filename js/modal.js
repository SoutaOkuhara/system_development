//モーダルウィンドウ
$(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        console.log('aaa');
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});

$(function(){
    $(document).on('click','.js-modal-open1',function(){
        $('.js-modal1').fadeIn();
        var weekalert = document.getElementById('getWeekAlert');
        var Timealert = document.getElementById('getTimeAlert');
        weekalert.textContent = "";
        Timealert.textContent = "";
        return false;
    });
    $('.js-modal-close1').on('click',function(){
        $('.js-modal1').fadeOut();
        return false;
    });
});

//スムーススクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 120;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }
