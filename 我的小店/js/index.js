/**
 * Created by Administrator on 2017/6/18.
 */
(function(){
    var oTotalPrice=document.getElementById("total-price");//实时价格
    var oTotalNum=document.getElementById("total-num");//实时件数
    var oClearCart=document.getElementById("clear-cart");
    var oProduct=document.getElementById("product");
    var aBtn=oProduct.getElementsByTagName("button");
    var aInput=oProduct.getElementsByTagName("input");
    var aSpan=oProduct.getElementsByTagName("span");
    var aPrice=[];//定义数组
    for(var i=0;i<aSpan.length;i++){
        if(aSpan[i].className=="price"){
            aPrice.push(aSpan[i]);//存入数组
        }
    }
    for(var i=0;i<aBtn.length;i++){
        aBtn[i].index=i;
        aBtn[i].onclick=function(){
            //  console.log(aPrice[this.index].innerHTML);
            //console.log(aInput[this.index].value);
            oTotalPrice.innerHTML=parseFloat(oTotalPrice.innerHTML)+aInput[this.index].value*aPrice[this.index].innerHTML;
            oTotalNum.innerHTML=parseInt(oTotalNum.innerHTML)+parseInt(aInput[this.index].value);
        };
    }
    oClearCart.onclick=function(){
        oTotalPrice.innerHTML="0.00";
        oTotalNum.innerHTML="0";
    };
})();