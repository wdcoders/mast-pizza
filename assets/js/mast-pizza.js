$(document).ready(function(){

    $('.testimonial-slider').slick({
        dots:true,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 3000
    });

    $(".nav-trigger").on("click",function(){
        $(".site-content-wrapper").toggleClass('scaled');
    });

    $("#NavBarToggle").on("click",function(){

        if($("#MbNav").hasClass("in")){
            $("#MbNav").removeClass("in");
            $(".bg-overlay").removeClass("in");
        }else{
            $("#MbNav").addClass("in");
            $(".bg-overlay").addClass("in");
        }
    });

    $(".bg-overlay").on("click",function(){
        $("#MbNav").removeClass("in");
        $(this).removeClass("in");
    });
});

// 
$(document).on("click",".cart-quantity .cart-quantity-controls i", function(e){

    var getInput = $(this).attr("data-id");
    var getValue = parseInt($(getInput).val());
    var getControl = $(this).attr("data-control");

    if(getControl == 'up'){
        $(getInput).val(getValue+1)
    }
    if(getControl == 'down'){

        if(getValue > 1){
            $(getInput).val(getValue-1)
        }
    }
})