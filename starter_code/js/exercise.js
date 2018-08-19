console.log('hi')

$('#submit-btn').click(function(){
    event.preventDefault()
    var city = $('#city-type').val()
    if (city ==='nyc' || city === 'new york city') {
      $('body').css('background-image','url(images/nyc.jpg)')
    }
})

$('#submit-btn').click(function(){
    event.preventDefault()
    var city = $('#city-type').val()
    if (city ==='austin') {
      $('body').css('background-image','url(images/austin.jpg)')
    }
})

$('#submit-btn').click(function(){
    event.preventDefault()
    var city = $('#city-type').val()
    if (city ==='la' || city === 'new york city') {
      $('body').css('background-image','url(images/la.jpg)')
    }
})

$('#submit-btn').click(function(){
    event.preventDefault()
    var city = $('#city-type').val()
    if (city ==='sf' || city === 'new york city') {
      $('body').css('background-image','url(images/sf.jpg)')
    }
})

$('#submit-btn').click(function(){
    event.preventDefault()
    var city = $('#city-type').val()
    if (city ==='sydney' || city === 'new york city') {
      $('body').css('background-image','url(images/sydney.jpg)')
    }
})
