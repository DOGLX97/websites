/**
 * Created by Administrator on 2017/8/8.
 */
$(function(){
    //���Ȼ�ȡ�ĵ�����
    var target;
    if(document.documentElement.scrollTop){//$("html").scrollTop()
        target = $("html");
    }else{
        target = $("body");
    }
    $("#arrow").on("click", function () {
        //console.log(target.scrollTop());
        var timer=setInterval(function () {
            var iScrollTop=target.scrollTop();
            if(iScrollTop>=585){
                clearInterval(timer);
            }
            target.scrollTop(iScrollTop+=50);
        },20);
    });
    //���ײ�
    $("#btn-up").on("click", function () {
        var timer=setInterval(function () {
            var iScrollTop=target.scrollTop();
            if(iScrollTop>=$(document).height()-$(window).height() ){
                clearInterval(timer);
            }
            target.scrollTop(iScrollTop+=50);
        },20);
    })
});