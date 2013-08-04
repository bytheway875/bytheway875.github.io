 $(document).scroll(function() {
    var scrollPosition = $(document).scrollTop();
    var scrollReference = 10;
    if (scrollPosition >= scrollReference) {      
        $("#sidebar").addClass('fixed');   
    } else {
        $("#sidebar").removeClass('fixed');
        $("#sidebar").addClass('abs');
    };
});