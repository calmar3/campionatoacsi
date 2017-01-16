(function () {
  'use strict';

  var MainCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams,loadFactory) {

    var ctrl = this;

    ctrl.changeState = changeStateFn;

    ctrl.selectedTab = 0;

    ctrl.selectTab = selectTabFn;

    ctrl.selectedPage = 0;

    function selectTabFn(tab) {

      ctrl.selectedTab = tab;

    }

    function changeStateFn() {
      $state.go('about');
    }

    ctrl.calendario = loadFactory.getCalendario();

    ctrl.classifiche = loadFactory.getClassifiche();
    

    console.log(ctrl.classifiche);
  }];

  MainCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory'];

  angular.module('campionatoAcsi').controller('MainCtrl', MainCtrl);

} ());