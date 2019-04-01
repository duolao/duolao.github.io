 // 导航条点击效果
 $('li').click(function(){
    $(this).siblings('li').removeClass('dny_current'); 
    $(this).addClass('dny_current');
})
// 菜单动画效果
$(".dny-al_fl>a").hover(
    function () {
        $(this).addClass("dny-alnn");
    },
    function () {
        $(this).removeClass("dny-alnn");
    },
);
//切换图片
// $('.dny-al_xfl_bt').hover(
//     function(){
//         $(this).find(".dny-btaltu1").hide()
//     },
//     function(){
//         $(this).find(".dny-btaltu1").show()
//     }
// )

$('.dny-workshow').hover(
    function(){
        $(this).find(".dny-al_ewm1").hide()
    },
    function(){
        $(this).find(".dny-al_ewm1").show()
    }
)