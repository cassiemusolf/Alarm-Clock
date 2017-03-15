var Alarm = require('./../js/alarm.js');

$(document).ready(function(){
  $('#time').text(moment());
  $('#alarm-clock-form').submit(function(event) {
    event.preventDefault();
    var time = $('#alarm-time').val();
    $('#alarm-is-set').append(time);
  });
});
