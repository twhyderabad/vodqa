$(document).ready ($) ->
  paraPositions = []
  headerHeight = 123;
  $('.content.para').each ->
    paraPositions.push $(this).offset().top
  $('a').click ->
    window.scrolling = true
    $('html, body').animate {scrollTop: $($.attr(this, 'href')).offset().top - headerHeight + 20}, 500, "swing", -> window.scrolling = false
    false
  $('ul li a').click ->
    $('ul li a').removeClass 'current'
    $(this).addClass 'current'
  $(document).on 'scroll', ->
    return if window.scrolling
    currentScrollTop = $(document).scrollTop()
    currentParaIndex = Math.max(0, paraPositions.filter((p) -> p < currentScrollTop + headerHeight).length - 1)

    $('ul li a').removeClass 'current'
    $('ul li a:eq(' + currentParaIndex + ')').addClass 'current'
  $('.navigation-toggle').click ()->
    $('.navigation').slideToggle()
