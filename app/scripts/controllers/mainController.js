(function () {
  'use strict';

  var MainCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams,loadFactory) {

    var ctrl = this;

    $scope.$watch(function () {
      return loadFactory.getCalendario();
    }, function (res) {
      ctrl.calendario = res;
    });

    // ctrl.calendario = loadFactory.getCalendario();
    
  }];

  MainCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory'];

  angular.module('campionatoAcsi').controller('MainCtrl', MainCtrl);

} ());