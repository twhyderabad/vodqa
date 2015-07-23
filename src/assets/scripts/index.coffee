$(document).ready ($) ->
  parPosition = []
  $('.content.para').each ->
    parPosition.push $(this).offset().top
  $('a').click ->
    $('html, body').animate {scrollTop: $($.attr(this, 'href')).offset().top}, 500
    false
  $('ul li a').click ->
    $('ul li a').removeClass 'current'
    $(this).addClass 'current'
  $(document).on 'scroll', ->
    position = $(document).scrollTop()
    index = 0
    i = 0
    while i < parPosition.length
      if position <= parPosition[i]
        index = i
        break
      i++
    $('ul li a').removeClass 'current'
    $('ul li a:eq(' + index + ')').addClass 'current'
