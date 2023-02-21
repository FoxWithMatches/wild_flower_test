$(function () {

    //mobile nav

  const navToggle = $("#navToggle");
  const nav = $("#nav");
  const social = $('#social_menu');
  const close = $('#close');

  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
    social.toggleClass("show");
  });

  close.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
    social.toggleClass("show");
});
});