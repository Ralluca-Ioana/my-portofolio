$(document).ready(function(){
    $(".slide-toggle1").click(function(){
        $(".page-start").animate({
            width: "toggle"
        });
        $(".box1").animate({
            width: "toggle"
        });
       
    });
    $(".slide-toggle2").click(function(){
        $(".page-start").animate({
            width: "toggle"
        });
        $(".box2").animate({
            width: "toggle"
        });
  
    });
    $(".slide-toggle3").click(function(){
        $(".box3").animate({
            width: "toggle"
        });
        $(".page-start").animate({
            width: "toggle"
        });

    });
    $(".slide-toggle4").click(function(){
        $(".box4").animate({
            width: "toggle"
        });
        $(".page-start").animate({
            width: "toggle"
        });
    });
});