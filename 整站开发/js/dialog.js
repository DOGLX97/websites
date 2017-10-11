/**
 * Created by Administrator on 2017/7/28.
 */
requirejs({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
define(["jquery"], function ($) {
    function Dialog(settings){
        this.defalutSettings={
            selector:"body",
            imgSrc:[],
            width:250,
            height:250,
            speed:1000,
            buttonStyle:"square",
            arrowsPos:"bottom"
        };
        $.extend(this.defalutSettings,settings);
        this.$slideShow=$('<div class="slide-show"></div>');
        this.$photograph=$('<div class="slide-show-photograph"></div>');
        this.$list=$('<ul class="slide-show-button-list"></ul>');
        this.$arrows=$('<div class="slide-show-arrows"></div>');
        this.$left=$('<div class="slide-show-left bottom"></div>');
        this.$right=$('<div class="slide-show-right bottom"></div>');
        this.nowIndex=0;
    }
    Dialog.prototype.init= function () {
        this.$slideShow.append(this.$photograph).append(this.$list).append(this.$arrows);
        this.$arrows.append(this.$left).append(this.$right);
        this.$slideShow.appendTo($(this.defalutSettings.selector));
        for(var i=0;i<this.defalutSettings.imgSrc.length;i++){
            this.$photograph.append('<img src="'+this.defalutSettings.imgSrc[i]+'" alt=""/>');
            this.$list.append('<li>'+(i+1)+'</li>');
        }
        this.$slideShow.css({
            width:this.defalutSettings.width,
            height:this.defalutSettings.height
        });
        this.$left.css({
            background:"url(img/轮播图左键.png) no-repeat"
        });
        this.$right.css({
            background:"url(img/轮播图右键.png) no-repeat"
        });
        $("img",this.$photograph).css({
            width:this.defalutSettings.width,
            height:this.defalutSettings.height
        });
        if(this.defalutSettings.buttonStyle=="circular"){
            $("li",this.$list).css({
                borderRadius:"50%"
            }).html("");
        }
        if(this.defalutSettings.buttonStyle=="learnButton"){
            $("li",this.$list).css({
                width:181,
                height:50
            }).html("");
        }
        if(this.defalutSettings.arrowsPos=="center"){
            this.$left.removeClass("bottom").addClass("center");
            this.$right.removeClass("bottom").addClass("center");
        }
        $("img",this.$photograph).eq(0).addClass("selected");
        $("li",this.$list).eq(0).addClass("selected");
        var that=this;
        $("li",this.$list).on("mouseover", function () {
            that.nowIndex=$(this).index();
            changeImg();
        });
        this.$left.on("click", function () {
            that.nowIndex--;
            if(that.nowIndex==-1){
                that.nowIndex=that.defalutSettings.imgSrc.length-1;
            }
            changeImg();
        });
        this.$right.on("click", function () {
            that.nowIndex++;
            if(that.nowIndex==that.defalutSettings.imgSrc.length){
                that.nowIndex=0;
            }
            changeImg();
        });
        function changeImg(){
            $("li",that.$list).eq(that.nowIndex).addClass("selected").siblings().removeClass("selected");
            $("img",that.$photograph).eq(that.nowIndex).addClass("selected").siblings().removeClass("selected");
        }
        this.$slideShow.hover(function () {
            clearInterval(that.timer);
        }, function () {
            play();
        });
        play();
        function play(){
            that.timer=setInterval(function () {
                that.$right.trigger("click");
            },that.defalutSettings.speed);
        }
    };


    return Dialog;
});