/**
 * Created by Administrator on 2017/7/29.
 */
requirejs({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
require(["jquery","dialog"], function ($,Dialog) {
    var arrImg=["img/banner.jpg"];
    var settings1={
        selector:"#banner",
        imgSrc:arrImg,
        width:1280,
        height:460,
        speed:1000,
        buttonStyle:"learnButton",
        arrowsPos:"center"
    };
    var dialog=new Dialog(settings1);
    dialog.init();
});

    var oWorksContent=document.getElementById("works-content");
    var count=0;
    for(var i=0;i<8;i++){
        var oImg=new Image();
        oImg.onload= function () {
            count++;
            if(count==8){
                onloadSuccess();
            }
        };
        oImg.src="img/bg"+(i+1)+".png";
        oWorksContent.appendChild(oImg);
    }
    function onloadSuccess(){
        var aImg=oWorksContent.getElementsByTagName("img");
        for(var i=0;i<aImg.length;i++){
            aImg[i].className="works-img";
        }
    }



    //var smallCount=0;
    //var oFooterRight=document.getElementById("footer-right");
    //
    //for(var i=0;i<6;i++){
    //    var oImg=new Image();
    //    oImg.onload= function () {
    //        smallCount++;
    //        if(smallCount==6){
    //            smallOnloadSuccess();
    //        }
    //    };
    //    oImg.src="img/footer-icon"+(i+1)+".png";
    //    oFooterRight.appendChild(oImg);
    //}
    //function smallOnloadSuccess(){
    //    var aImg=oFooterRight.getElementsByTagName("img");
    //    //console.log(aImg);
    //    for(var i=0;i<aImg.length;i++){
    //        aImg[i].className="footer-img";
    //    }
    //}
    var oFooterRight=document.getElementById("footer-right");
    for(var i=0;i<6;i++){
        //var aA=document.createElement("a");
        //oFooterRight.appendChild(aA);
        var aA="<a href=\"#\"></a>";
        oFooterRight.innerHTML+=aA;

    }
    var aAs=oFooterRight.getElementsByTagName("a");
    for(var i=0;i<aAs.length;i++){
        aAs[i].style.background="url(img/footer-icon"+(i+1)+".png)";
    }