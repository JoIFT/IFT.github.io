/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: 'rgba(238, 9, 74, 0.2)',
    lineColor: 'rgba(238, 9, 74, 0.2)'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 1 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/