/**
 * Created by admin on 2017/5/11.
 */
/**
 * Created by qq on 2016/12/18.
 */
//导航
$(document).ready(function () {
    $(".search").click(function () {
        $(".topnav li a").slice(1,9).addClass("csw")
        $(".topnav li a").last().addClass("gouwu")
        $(".searchbox").addClass("blk")
        $(".searchbox").get(0).offsetWidth;
        $(".head .topnav .searchbox .soubox dl dt").css('transform','translateX(-100%)');
    });
    $(".bag").click(function () {
        $(".topnav li a").slice(1,9).removeClass("csw");
        $(".searchbox").removeClass("blk");
        $(".topnav li a").slice(9).removeClass("gouwu")
        $(".head .topnav .searchbox .soubox dl dt").css('transform','translateX(100%)');
    });
    $('.xian').click(function() {
        $('.xlk').toggleClass('xlk1');
        $('.xian1').toggleClass('xian1-1');
        $('.xian2').toggleClass('xian2-1');
    })
});
//轮播
$(document).ready(function () {
    /* var img=$(".bannerimgbox li");
     var num=img.length-1;
     // console.log(img.length)
     var state={
     current:0,
     next:1
     }
     var render=function () {
     img.removeClass("active r-i r-o l-o l-i");
     img.eq(state.current).addClass("r-o");
     img.eq(state.next).addClass("active r-i");
     // img.eq(state.current).addClass("l-o");
     // img.eq(state.next).addClass("l-i active");
     }
     var move=function(){
     render();
     state.current=state.next;
     state.next=(state.next+1>num)?0:(state.next+1);
     }
     setInterval(render,1000)*/


    var zzt_bannerbox=$(".zzt_bannerfather .zzt_bannerbox");
    var dianjitiaoson=$(".dianjitiaoson");
    var chushi=$(".dijitiaobox .dianjitiao");
    var nums=zzt_bannerbox.length-1;
    var state={
        current:0,
        next:1,
        timerId:null,
        direction:'right'
    }
    var render=function(){
        if(state.current==nums){
            dianjitiaoson.removeClass("hdxgt");
        }
        dianjitiaoson.eq(state.next).addClass("hdxgt");
        chushi.removeClass("active").eq(state.next).addClass("active");
        zzt_bannerbox.removeClass("bannerone r-o r-i l-o l-i");
        if(state.direction=='right'){
            zzt_bannerbox.eq(state.current).addClass("r-o");
            zzt_bannerbox.eq(state.next).addClass("r-i bannerone");
        }else{
            zzt_bannerbox.eq(state.current).addClass("l-o");
            zzt_bannerbox.eq(state.next).addClass("l-i bannerone");
        }
    }
    // 点击函数  定义点击时调用多个函数
    var shijian;
    function doTimes(num,fn){
        if(num==0){
            return;
        }
        var count=0;
        shijian=setInterval(function(){
            count+=1;
            if(count==num){
                clearInterval(shijian);
            }
            fn();
        },200)
    }
    next=function(){
        clearInterval(state.timerId);
        state.next=(state.current+1>2)?0:(state.current+1);
        state.direction="right";
        setState();
    }
    prev=function (){
        clearInterval(state.timerId);
        state.next=(state.current-1<0)?nums:(state.current-1);
        state.direction="left";
        setState();
    }
    dianjiClick=function(){
        clearInterval(state.timerId);
        var index=$(this).index();
        state.next=index;
        var num=Math.abs(state.current-index);
        if(index>state.current){
            doTimes(num,next);
        }else{
            doTimes(num,prev);
        }
    }
    chushi.on('click',dianjiClick);
    $(".leftbtnbox").on("click",function(){
        prev();
    })
    $(".rightbtnbox").on("click",function(){
        next();
    })
    var setState=function(){
        render();
        state.current=state.next;
        state.next=(state.next+1>2)?0:(state.next+1);
    }
    state.timerId=setInterval(setState,4000);










})





/*
 h3.on('click',function(e){
 console.log($(this).index())
 $(this).find('.h3').toggleClass("rot");
 $(this).next().toggleClass("xiala");
 e.preventDefault();
 */

//底部响应式
$(document).ready(function () {
    var clicks=$(".foottitle")
    // console.log($(this).find('.foot-xiala').length)

    clicks.on('click',function () {
        $(this).index()
        $(this).next().toggleClass("blck");
    })

})
