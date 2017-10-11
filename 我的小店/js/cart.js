/**
 * Created by Administrator on 2017/7/9.
 */
(function(){
    var aClose=document.getElementsByClassName("close");
    var aInfo=document.getElementsByClassName("info");
    var oCartLeft=document.getElementById("cart-left");
    for(var i=0;i<aClose.length;i++){
        aClose[i].index=i;
        aClose[i].onclick= function () {
            oCartLeft.removeChild(aInfo[this.index]);
            for(var i=0;i<aClose.length;i++){
                aClose[i].index=i;
            }
        };
    }
})();