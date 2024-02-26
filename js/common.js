// * 문서 전체 스크롤 이벤트
$(window).scroll(function () {
    let sct = $(window).scrollTop();

    // * 탑버튼
    if (sct > 700) {
        $(".goTop").stop().fadeIn();
    } else {
        $(".goTop").stop().fadeOut();
    }

}); // * 문서 전체 스크롤 이벤트 끝

// * 페이지 탑 버튼 
$(".goTop").click(function(){
    $('html, body').animate({
        scrollTop : 0
    }, 400);
});

// 모바일 메뉴
$('.h02_btn').click(function(){
    $('.h02_side').css('margin-left', 0);
});
$('.h02_closeBt').click(function(){
    $('.h02_side').css('margin-left', '100%');
});

// 헤더 gnb
$('.h01_shop, .h01_talk, .h01_mypage').mouseover(function(){
    $('.h01_shop, .h01_talk, .h01_mypage').removeClass('move');
    $(this).addClass('move');
    $(this).find('.h01_depth').stop().slideDown();
}).mouseout(function(){
    $(this).find('.h01_depth').stop().slideUp(function(){
        $(this).parent('div').removeClass('move');
    });
});