$(document).ready(function($) {
  var parPosition;
  parPosition = [];
  $('.content.para').each(function() {
    return parPosition.push($(this).offset().top);
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
    var i, index, position;
    if (window.scrolling) {
      return;
    }
    position = $(document).scrollTop();
    index = 0;
    i = 0;
    while (i < parPosition.length) {
      if (position <= parPosition[i]) {
        index = i;
        break;
      }
      i++;
    }
    $('ul li a').removeClass('current');
    return $('ul li a:eq(' + index + ')').addClass('current');
  });
});
