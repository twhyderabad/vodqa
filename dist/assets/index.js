$(document).ready(function($) {
  var parPosition;
  parPosition = [];
  $('.content.para').each(function() {
    return parPosition.push($(this).offset().top);
  });
  $('a').click(function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });
  $('ul li a').click(function() {
    $('ul li a').removeClass('current');
    return $(this).addClass('current');
  });
  return $(document).on('scroll', function() {
    var i, index, position;
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
