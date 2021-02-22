$(document).ready(function($) {
  var headerHeight, paraPositions;
  paraPositions = [];
  headerHeight = 123;
  $('.content.para').each(function() {
    return paraPositions.push($(this).offset().top);
  });
  $('.navigator a').click(function() {
    window.scrolling = true;
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - headerHeight + 20
    }, 500, "swing", function() {
      return window.scrolling = false;
    });
    return false;
  });
  $('.navigator ul li a').click(function() {
    $('.navigator ul li a').removeClass('current');
    return $(this).addClass('current');
  });
  $(document).on('scroll', function() {
    var currentParaIndex, currentScrollTop;
    if (window.scrolling) {
      return;
    }
    currentScrollTop = $(document).scrollTop();
    currentParaIndex = Math.max(0, paraPositions.filter(function(p) {
      return p < currentScrollTop + headerHeight;
    }).length - 1);
    $('.navigator ul li a').removeClass('current');
    return $('.navigator ul li a:eq(' + currentParaIndex + ')').addClass('current');
  });
  return $('.navigation-toggle').click(function() {
    return $('.navigation').slideToggle();
  });
});
