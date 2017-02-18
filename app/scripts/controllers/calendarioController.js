(function () {
  'use strict';

  var CalendarioCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams,loadFactory) {

    var ctrl = this;

    /**watch per attendere cambiamenti del calendario nella factory */
    $scope.$watch(function () {
      return loadFactory.getCalendario();
    }, function (res) {
      /**carico i dati utili alla view */
      ctrl.calendario = res;
      ctrl.dataAggiornamento = loadFactory.getDataAggiornamento();
    });
    
  }];

  CalendarioCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory'];

  angular.module('campionatoAcsi').controller('CalendarioCtrl', CalendarioCtrl);

} ());