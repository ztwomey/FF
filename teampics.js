$(document).ready(function(){
    $(".teampic").mouseenter(function(){
        $(this).fadeTo('slow', 0.25);
    });
    $(".teampic").mouseleave(function(){
        $(this).fadeTo('slow', 1);
    });
});
  