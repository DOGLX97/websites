/**
 * Created by Administrator on 2017/6/18.
 */
(function () {
    var oBigPic=document.getElementById("bigPic");
    var oImg=document.getElementById("img");
    var aImgs=oImg.getElementsByTagName("img");
    var oLeft=document.getElementById("left");
    var oRight=document.getElementById("right");
    var oDetails = document.getElementById("details");
    var oWrapper =document.getElementById("w");
    var oSmall=document.getElementById("small");
    var oDrag=document.getElementById("drag");
    var oMask=document.getElementById("mask");
    var oBig=document.getElementById("big");
    var oBigImg=oBig.getElementsByTagName("img")[0];
    var nowIndex=0;
    for(var i=0;i<aImgs.length;i++){
        aImgs[i].index=i;
        aImgs[i].onclick=function(){
            nowIndex=this.index;
            changeImg();
        };
    }
    oLeft.onclick=oRight.onclick=function(){
        if(this==oRight){
            nowIndex++;
            if(nowIndex==aImgs.length){
                nowIndex=0;
            }
        }else{
            nowIndex--;
            if(nowIndex==-1){
                nowIndex=aImgs.length-1;
            }
        }
        changeImg();
    };
    oLeft.onselectstart=oRight.onselectstart=function(){
        return false;
    };
    function changeImg(){
        for(var i=0;i<aImgs.length;i++){
            aImgs[i].className="";
        }
        oBigPic.src=aImgs[nowIndex].src;
        aImgs[nowIndex].className="selected";
        var move=0;
        if(nowIndex==0){
            move=0;
        }else{
            move=1;
        }
        animate(oImg,{
            left: -(aImgs[0].offsetWidth + 4) * move
        })
    }

    oMask.onmouseover=function(){
        oBig.style.display="block";
        oDrag.style.display="block";
    }
    oMask.onmouseout= function () {
        oBig.style.display="none";
        oDrag.style.display="none";
    }
    oMask.onmousemove= function (e) {
        e=e||window.event;
        var left= e.pageX - oWrapper.offsetLeft - oDrag.offsetWidth / 2;
        var top= e.pageY - oDetails.offsetTop - oDrag.offsetHeight / 2;
        if(left<=0){
            left=0;
        }
        if(top<=0){
            top=0;
        }
        var maxX=oSmall.offsetWidth-oDrag.offsetWidth;
        if(left>=maxX){
            left=maxX;
        }
        var maxY=oSmall.offsetHeight-oDrag.offsetHeight;
        if(top>=maxY){
            top=maxY;
        }
        oDrag.style.left=left+"px";
        oDrag.style.top=top+"px";

        //´óÍ¼Æ¬ÒÆ¶¯
        var scareX=left/maxX;
        var scareY=top/maxY;
        oBigImg.style.left=-scareX*(oBigImg.offsetWidth-oBig.offsetWidth)+"px";
        oBigImg.style.top=-scareY*(oBigImg.offsetHeight-oBig.offsetHeight)+"px";
    }
})();