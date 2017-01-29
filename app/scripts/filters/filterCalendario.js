angular.module('campionatoAcsi').filter('filterCalendario', function () {
  return function (input) {
        if (input === 0 || isNaN(input))
            return '-';
        else
            return input
  };
});