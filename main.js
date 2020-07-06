  
$(window).scroll(function() {    
    let scroll = $(window).scrollTop();
    console.log(scroll)

    if (scroll >= 100) {
        $("#copy p").addClass("reveal");
        $("#copy p").removeClass("disappear");
    } else {
        $("#copy p").addClass("disappear");
        $("#copy p").removeClass("reveal"); 
    }
});

