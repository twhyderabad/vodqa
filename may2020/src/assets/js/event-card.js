$( document ).ready(function() {
    //console.log( "In event-card.js" );
    
    let eventTitle = document.getElementById('event-title');

    let btnAttend = document.getElementById('btn-attend');
    let btnFeedback = document.getElementById('btn-feedback');
    let btnTalk = document.getElementById('btn-talk');
    let timerBox = document.getElementById('clockdiv');

    let eventDate = document.getElementById('event-date').getAttribute('event-date');
    let eventDateNew = new Date(eventDate);
    eventDateNew.setHours(18, 30);
    let remainingTime = eventDateNew - (new Date());

    if(remainingTime < 0) {
        eventTitle.innerHTML = "<strong>Last Event</strong>"
        btnFeedback.style.display = "inline";
    }
    else {
        btnAttend.style.display = "inline";
        btnTalk.style.display = "inline";   
        timerBox.style.display = "inline-block";

        var deadline = new Date(eventDate);
        initializeClock('clockdiv', deadline);
    }
});


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
