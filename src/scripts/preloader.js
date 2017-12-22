$(window).on('load', function() {
  $preloaderBackdrop = $('.js-preloader-backdrop'),
  $preloader = $('.js-preloader');

  $preloader.addClass('is-done');
  $preloaderBackdrop.addClass('is-done');

  setTimeout(function() {
    $preloader.addClass('is-gone');
    $preloaderBackdrop.addClass('is-gone');
  }, 4000);
});