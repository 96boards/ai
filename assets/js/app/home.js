$(document).ready(function(){
    $("#rock960").click(function(){
        location.href='/products/rock960/';
    });
    $("#hikey970").click(function(){
        location.href='/products/hikey970/';
    });
    $("#ultra96").click(function(){
        location.href='/products/ultra96/';
    });
    if (navigator.userAgent.match(/AppleWebKit/) && ! navigator.userAgent.match(/Chrome/)) {
        $("#ai-board-carousel").hide();
        $("#safari-carousel").show();
     }
});