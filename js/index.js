/**
 * Created by admin on 2017/5/11.
 */

/********************第一个banner选项卡效果*********************/
$(document).ready(function () {
    $(".habit_banenr_left li").on("mouseenter",function () {
        var index=$(".habit_banenr_left li").index($(this));

        $(".habit_banenr_box li").eq(index).fadeIn().siblings().fadeOut();

        // $(".habit_banenr_box li").eq(now).fadeIn();
        // $(".habit_banenr_box li").eq(next).fadeOut();
        $(".habit_banenr_nav li a").removeClass('active').eq(index).addClass("active")

    })

});