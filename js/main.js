$(function() {
  $('.status').html('Test')});

$('button').on('click', function() {
  if ($('button').attr('class') === 'on') {
    $('button').attr('class','off');
    $('body').attr('class','dark');
    $('.status').html("Who turned off the lights!")}
  else {
    $('button').attr('class','on');
    $('body').attr('class','light');
    $('.status').html("It's so bright in here!")}
  });
