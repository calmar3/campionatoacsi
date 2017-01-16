(function () {
  'use strict';

  var MainCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams,loadFactory) {

    var ctrl = this;

    ctrl.changeState = changeStateFn;

    ctrl.selectedTab = 0;

    ctrl.selectTab = selectTabFn;

    function selectTabFn(tab) {

      ctrl.selectedTab = tab;

    }

    function changeStateFn() {
      $state.go('about');
    }

    ctrl.calendario = loadFactory.getCalendario();
    ctrl.calendario[0].avviso = "Garganta!";
    

    console.log(ctrl.calendario);
  }];

  MainCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory'];

  angular.module('campionatoAcsi').controller('MainCtrl', MainCtrl);

} ());