console.log hi 

$(‘#submit-btn’).click(function() {
    event.preventDefault()
    var city = $(‘#city-type’).val()
    if (city === ‘nyc’ || city === ‘new york city’) {
        $(‘body’).css(‘background-image’,‘url(images/nyc.jpg)’)
    }
})
