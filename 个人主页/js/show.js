/**
 * Created by Administrator on 2017/8/6.
 */
requirejs({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
define(["jquery"], function ($) {
    function Show(setting){
        var arrImg=[];
        this.defalutSetting={
            selector:"body",
            width:350,
            height:622,
            img:arrImg,
            indexStyle:"number",
            arrowsPos:"bottom",
            time:1000
        };
        $.extend(this.defalutSetting,setting);
        this.$container=$('<div class="show-container"></div>');
        this.$images=$('<div class="show-images"></div>');
        this.$index=$('<ul class="show-index"></ul>');
        this.$arrows=$('<div class="show-arrows"></div>');
        this.$left=$('<div id="show-left">&lt;</div>');
        this.$right=$(' <div id="show-right">&gt;</div>');
        this.nowIndex=0;
    }
    Show.prototype.init= function () {
        this.$container.appendTo($(this.defalutSetting.selector));
        this.$container.append(this.$images).append(this.$index).append(this.$arrows);
        this.$arrows.append(this.$left).append(this.$right);
        for(var i=0;i<this.defalutSetting.img.length;i++){
            this.$images.append('<img src="'+this.defalutSetting.img[i]+'" alt=""/>');
            this.$index.append("<li>"+(i+1)+"</li>");
        }
        $("img",this.$images).eq(0).addClass("selected");
        $("li",this.$index).eq(0).addClass("selected");
        if(this.defalutSetting.indexStyle=="null"){
            $("li",this.$index).empty().css({
                borderRadius:"50%"
            });
        }
        if(this.defalutSetting.arrowsPos=="middle"){
            this.$arrows.css({
                left:0,
                bottom:(this.defalutSetting.height-20)/2
            });
            this.$left.css({
                marginRight:this.defalutSetting.width-40
            });
            this.$right.css({
                marginRight:0
            });
        }
        var that=this;
        $("li",that.$index).on("mouseover", function () {
            that.nowIndex=$(this).index();
            change();
        });
        that.$left.on("click", function (e) {
            e=e||window.event;
            that.nowIndex--;
            if(that.nowIndex==-1){
                that.nowIndex=that.defalutSetting.img.length-1;
            }
            change();
            e.preventDefault();
        });
        this.$right.on("click", function (e) {
            that.nowIndex++;
            if(that.nowIndex==that.defalutSetting.img.length){
                that.nowIndex=0;
            }
            change();
            e.preventDefault();
        });
        $(that.defalutSetting.selector).hover(function () {
            clearInterval(that.timer);
        }, function () {
            play();
        });
        play();
        function play(){
            that.timer=setInterval(function () {
                that.$right.trigger("click");
            },that.defalutSetting.time);
        }
        function change(){
            $("li",that.$index).eq(that.nowIndex).addClass("selected").siblings().removeClass("selected");
            $("img",that.$images).eq(that.nowIndex).addClass("selected").siblings().removeClass("selected");
        }
        //document.onselectstart=new Function("return false");
    };
    return Show;
});