$(document).ready(function($) {
  var paraPositions;
  paraPositions = [];
  $('.content.para').each(function() {
    return paraPositions.push($(this).offset().top);
  });
  $('a').click(function() {
    window.scrolling = true;
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500, "swing", function() {
      return window.scrolling = false;
    });
    return false;
  });
  $('ul li a').click(function() {
    $('ul li a').removeClass('current');
    return $(this).addClass('current');
  });
  return $(document).on('scroll', function() {
    var currentParaIndex, currentScrollTop, headerHeight;
    if (window.scrolling) {
      return;
    }
    currentScrollTop = $(document).scrollTop();
    headerHeight = 123;
    currentParaIndex = Math.max(0, paraPositions.filter(function(p) {
      return p < currentScrollTop + headerHeight;
    }).length - 1);
    $('ul li a').removeClass('current');
    return $('ul li a:eq(' + currentParaIndex + ')').addClass('current');
  });
});
