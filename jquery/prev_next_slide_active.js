$(document).on('click', '.event-calendar .next-arrow', function() {
    if ( $(".event-calendar__month-selection .month-list li:last-child").hasClass('active')){
        $('.event-calendar .next-arrow').css({'opacity':'0.7', 'pointer-event':'none'})
    }
    else{
        $('.event-calendar__month-selection .month-list li.active').removeClass('active').next().addClass('active');
        $('.event-calendar .next-arrow').css({'opacity':'1', 'pointer-event':'auto'})
        $('.event-calendar .prev-arrow').css({'opacity':'1', 'pointer-event':'auto'})
    }
});
$(document).on('click', '.event-calendar .prev-arrow', function() {
    if ( $(".event-calendar__month-selection .month-list li:first-child").hasClass('active')){
        $('.event-calendar .prev-arrow').css({'opacity':'0.7', 'pointer-event':'none'})
    }
    else{
        $('.event-calendar__month-selection .month-list li.active').removeClass('active').prev().addClass('active');
        $('.event-calendar .prev-arrow').css({'opacity':'1', 'pointer-event':'auto'})
        $('.event-calendar .next-arrow').css({'opacity':'1', 'pointer-event':'auto'})
    }
});