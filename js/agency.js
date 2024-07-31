(function ($) {
  "use strict"; // Start of use strict

  // Disparador para desplazamiento suave
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 54,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Cerrar el menu cuando se da click
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Agregar las clases activas al navBar
  $("body").scrollspy({
    target: "#mainNav",
    offset: 56,
  });

  // colapsar Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Colapsa si la pagina no esta en la parte superior
  navbarCollapse();
  // Colapsa cuando se desliza hacia abajo
  $(window).scroll(navbarCollapse);

})(jQuery);
