/**
 * Created by Administrator on 2017/8/14.
 */
$(function () {
    //首先获取文档对象
    var target;
    if(document.documentElement.scrollTop){
        target=$("html");
    }else{
        target=$("body");
    }
    $("#nu").on("click",function(e){
        e.preventDefault();
        var timer=setInterval(function () {
            var top=target.scrollTop();
            if(top>=$("#introduce").offset().top-20){
                clearInterval(timer);
            }
            target.scrollTop(top+=10);
        },20)
    });
    var $btn=$("#btn-menu");
    $btn.prop("bFlag",false);
    $btn.on("click", function () {
        if($btn.prop("bFlag")==false){
            $("#sub").removeClass("sub-menu");
        }else{
            $("#sub").addClass("sub-menu");
        }
        $btn.prop("bFlag",!$btn.prop("bFlag"));
    });
    $("#sp span").on("click", function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        $("#slide-show .item").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    })
});