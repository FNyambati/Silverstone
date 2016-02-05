angular.module('myApp').controller('f1Ctrl', function($scope) {

  $('#clock').countdown('2020/10/10 12:34:56')
    .on('update.countdown', function(event) {
      var format = '%H:%M:%S';
      if (event.offset.days > 0) {
        format = '%-d day%!d ' + format;
      }
      if (event.offset.weeks > 0) {
        format = '%-w week%!w ' + format;
      }
      $(this).html(event.strftime(format));
    })
    .on('finish.countdown', function(event) {
      $(this).html('This offer has expired!')
        .parent().addClass('disabled');

    });
});
