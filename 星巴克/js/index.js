/**
 * Created by Administrator on 2017/8/4.
 */


    $("#menu").on("click", function () {
        $("#mask").removeClass("hide");
        $("#sub").removeClass("hide");
    });
    $("#mask").on("click", function (e) {
        $("#mask").addClass("hide");
        $("#sub").addClass("hide");
        //console.log(e.target);
    });
    var count=0;
    //$("#sub-sub2").on("click", function () {
    //    count++;
    //    if(count%2==0){
    //        $("#sub2").slideUp("slow");
    //    }
    //    else{
    //        $("#sub2").slideDown("slow");
    //    }
    //    console.log(count);
    //    console.log(count%2);
    //});
    $("#sub li a ").each(function () {
        this.bFlag=false;
    });
    $("#sub li a").on("click", function () {
        this.bFlag=!this.bFlag;
        if(this.bFlag==true){
            $(this).next().slideDown("slow");
        }else{
            $(this).next().slideUp("slow");
        }
    });


