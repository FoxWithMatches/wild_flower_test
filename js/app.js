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

//modal

const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");



modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $("#modal").addClass("show");
    $("body").addClass("no-scroll");
})

modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $("#modal").removeClass("show")
    $("body").removeClass("no-scroll");
})
});