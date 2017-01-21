(function () {
  'use strict';

  var MainCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams,loadFactory) {

    var ctrl = this;

    ctrl.calendario = loadFactory.getCalendario();
    
  }];

  MainCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory'];

  angular.module('campionatoAcsi').controller('MainCtrl', MainCtrl);

} ());