$(function() {
	setTimeout(function(){
        $('.logo_start').fadeIn(1600);
    },500); //0.5秒後にロゴをフェードイン!
    setTimeout(function(){
        $(".logo").css({transform: "scale(3)",transition:"transform 1s"});
        $('.logo').fadeOut(500);
        $("html,body").animate({scrollTop:0},"300");
    },2500); 
});