$(document).ready(function(){
    $("button").hover(function () {
        $(this).addClass("rotate");
    }, function () {
        $(this).removeClass("rotate");
    });
    $(".intro").hover(function(){
        $(this).addClass("green");
    }, function () {
        $(this).removeClass("green");
    })

    $(".inline-block").on( {
        mouseenter: function() {
            $(this).css({
                "font-style": "bold"
            });
        }
    });

    // $( "h1" ).clone().appendTo( document.body); 
// $( window ).scroll(function() {
//   $( ".profile" ).css( "display", "inline" ).fadeOut( "slow" );
// });

}); //end of document.ready function
