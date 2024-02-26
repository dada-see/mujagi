// 상품 소분류
$('.m1_size a').click(function(e){
    e.preventDefault();
    let i = $(this).parent('p').index();
    console.log(i)
    if(i == 0){
       $('.m1_pd').css('display', 'block');
    } else if(i == 1){
        $('.m1_pd').css('display', 'none');
        $('.m1_01').css('display', 'block');
    } else if(i == 2){
        $('.m1_pd').css('display', 'none');
        $('.m1_02').css('display', 'block');
    } else if(i == 3){
        $('.m1_pd').css('display', 'none');
        $('.m1_03').css('display', 'block');
    } else if(i == 4){
        $('.m1_pd').css('display', 'none');
        $('.m1_04').css('display', 'block');
    }
});
