$(window).on("scroll", function () {
  // Aquí deberás escribir la lógica que modificará la barra
  if ($(window).scrollTop() > 200) {
        $('.top-nav').addClass('f-nav');
    } else {
        $('.top-nav').removeClass('f-nav');
    }
});
