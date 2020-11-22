$(document).ready(function() {


    $(".nav-item a.nav-link, .navbar-brand, .btn-work").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function() {
                window.location.hash = gato;
            });
        }
    });


    //Popovers
    $(function() {
        $('[data-toggle="popover"]').popover()
    })
});