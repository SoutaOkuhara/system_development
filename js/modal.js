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