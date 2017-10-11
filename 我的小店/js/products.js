/**
 * Created by Administrator on 2017/7/9.
 */
(function(){
    var oBrand=document.getElementById("brands");
    var aClassify=oBrand.getElementsByClassName("classify");
    var aSubmenu=oBrand.getElementsByClassName("submenu");
    for(var i=0;i<aClassify.length;i++){
        aClassify[i].index=i;
        aClassify[i].bFlag=false;
        aClassify[i].addEventListener("click",function(){
            if(this.bFlag){
                animate(aSubmenu[this.index],{height:0 });
                aSubmenu[this.index]&&animate(aSubmenu[this.index],{height:0 });
            }else{
                aSubmenu[this.index]&&animate(aSubmenu[this.index],{height:250});
            }
            this.bFlag=!this.bFlag;
        },false);
    }
})();